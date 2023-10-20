const pool = require('./queries').pool;

const getOrderDetail = (request, response) => {
    pool.query('SELECT * FROM public.order_detail ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
  
const getOrderDetailById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT *, det.id as det_id, prod.id as product_id FROM public.order_detail as det INNER JOIN public.products AS prod ON prod.id = det.product_id WHERE det.order_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getOrderDetailByOrderId = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM public.order_detail WHERE order_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createOrderDetail = (request, response) => {
    const {order_id, product_id, qunatity, size, total_price} = request.body

    pool.query('INSERT INTO public.order_detail (order_id, product_id, qunatity, size, total_price) VALUES ($1, $2, $3, $4, $5)', 
    [order_id, product_id, qunatity, size, total_price], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`OrderDetail added with ID: ${results.insertId}`)
    })
}

const updateOrderDetail = (request, response) => {
    const id = parseInt(request.params.id)
    const { order_id, product_id, qunatity, size, total_price } = request.body

    pool.query(
        'UPDATE public.order_detail SET order_id = $1, product_id = $2, qunatity = $3, size = $4, total_price = $5 WHERE id = $6',
        [order_id, product_id, qunatity, size, total_price, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`OrderDetail modified with ID: ${id}`)
        }
    )
}

const deleteOrderDetail = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM public.order_detail WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`OrderDetail deleted with ID: ${id}`)
    })
}

module.exports = {
    getOrderDetail,
    getOrderDetailById,
    createOrderDetail,
    updateOrderDetail,
    deleteOrderDetail
}