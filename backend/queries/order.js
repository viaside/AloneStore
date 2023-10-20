const pool = require('./queries').pool;

const getOrder = (request, response) => {
    pool.query('SELECT *, ord.id as id, st.id as st_id, st.name as st_name FROM public.orders as ord INNER JOIN public.status as st ON st.id = ord.status ORDER BY ord.status ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
  
const getOrderById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM public.orders WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createOrder = (request, response) => {
    const { id, FullName, Address, PhoneNumber } = request.body
    pool.query('SELECT * FROM public.cart WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        pool.query('INSERT INTO public.orders (user_id, created_at, modified_at, address, total_price, full_name, phone_number, status) VALUES ($1, current_date, $2, $3, $4, $5, $6, $7) RETURNING id', 
        [results.rows[0].user_id, null, Address, 0, FullName, PhoneNumber, 0], (error, resultsOrders) => {
            if (error) {
                throw error
            }
                pool.query('SELECT * FROM public.cart_detail WHERE cart_id = $1', [id], (error, resultDetail) => {
                    if (error) {
                        throw error
                    }
                    resultDetail.rows.map(el => {
                        pool.query('INSERT INTO public.order_detail (order_id, product_id, quantity, size, total_price) VALUES ($1, $2, $3, $4, $5)', 
                        [resultsOrders.rows[0].id, el.product_id, el.quantity, el.size, 0], (error) => {
                            if (error) {
                                throw error
                            }
                            pool.query('DELETE FROM public.cart_detail WHERE cart_id = $1', [id], (error, results) => {
                                if (error) {
                                    throw error
                                }
                            })
                        })
                    })
                    pool.query('DELETE FROM public.cart WHERE id = $1', [id], (error, results) => {
                        if (error) {
                            throw error
                        }
                    })
                })
            response.status(201).send(`Order added with ID: ${results.insertId}`)
        })
    })
    
}

const updateOrder = (request, response) => {
    const id = parseInt(request.params.id)
    const { user_id, created_at, modified_at, address, total_price, full_name, phone_number, status, desc } = request.body

    pool.query(
        'UPDATE public.orders SET user_id = 1$, created_at = 2$, modified_at = 3$, address = 4$, total_price = 5$, full_name = 6$, phone_number = 7$, status = 8$, desc = 9$ WHERE id = $10',
        [user_id, created_at, modified_at, address, total_price, full_name, phone_number, status, desc, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Order modified with ID: ${id}`)
        }
    )
}

const ChangeStatusOrder = (request, response) => {
    const id = parseInt(request.params.id)
    const { status } = request.body

    pool.query(
        'UPDATE public.orders SET status = $1 WHERE id = $2',
        [status, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Order modified with ID: ${id}`)
        }
    )
}

const deleteOrder = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM public.orders WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Order deleted with ID: ${id}`)
    })
}

module.exports = {
    getOrder,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
    ChangeStatusOrder
}