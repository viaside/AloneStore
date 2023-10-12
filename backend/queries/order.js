const db = require('./queries').pool;

const getOrder = (request, response) => {
    db.query('SELECT * FROM public.orders ORDER BY id ASC', (error, results) => {
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
    const { user_id, created_at, modified_at, address, total_price, full_name, phone_number, status, desc } = request.body

    pool.query('INSERT INTO public.orders (user_id, created_at, modified_at, address, total_price, full_name, phone_number, status, desc) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', 
    [user_id, created_at, modified_at, address, total_price, full_name, phone_number, status, desc], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Order added with ID: ${results.insertId}`)
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
    deleteOrder
}