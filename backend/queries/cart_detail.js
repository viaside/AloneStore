const db = require('./queries').pool;

const getCartDetail = (request, response) => {
    db.query('SELECT * FROM public.cart_detail ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
  
const getCartDetailById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM public.cart_detail WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getCartDetailByCartId = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM public.cart_detail WHERE cart_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createCartDetail = (request, response) => {
    const { cart_id, product_id, qunatity, size, total_price } = request.body

    pool.query('INSERT INTO public.cart_detail (cart_id, product_id, qunatity, size, total_price) VALUES ($1, $2, $3, $4, $5)', 
    [cart_id, product_id, qunatity, size, total_price], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`CartDetail added with ID: ${results.insertId}`)
    })
}

const updateCartDetail = (request, response) => {
    const id = parseInt(request.params.id)
    const { cart_id, product_id, qunatity, size, total_price } = request.body

    pool.query(
        'UPDATE public.cart_detail SET cart_id = $1, product_id = $2, qunatity = $3, size = $4, total_price = $5 WHERE id = $6',
        [cart_id, product_id, qunatity, size, total_price, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`CartDetail modified with ID: ${id}`)
        }
    )
}

const deleteCartDetail = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM public.cart_detail WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`CartDetail deleted with ID: ${id}`)
    })
}

module.exports = {
    getCartDetail,
    getCartDetailById,
    createCartDetail,
    updateCartDetail,
    deleteCartDetail
}