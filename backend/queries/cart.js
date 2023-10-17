const pool = require('./queries').pool;

const getCart = (request, response) => {
    pool.query('SELECT * FROM public.cart ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
  
const getCartById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM public.cart WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createCart = (request, response) => {
    const { user_id, total_price } = request.body

    pool.query('INSERT INTO public.cart (user_id, total_price) VALUES ($1, $2)', 
    [user_id, total_price], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Cart added with ID: ${results.insertId}`)
    })
}

const updateCart = (request, response) => {
    const id = parseInt(request.params.id)
    const { user_id, total_price } = request.body

    pool.query(
        'UPDATE public.cart SET user_id = $1, total_price = $2 WHERE id = $3',
        [user_id, total_price, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Cart modified with ID: ${id}`)
        }
    )
}

const deleteCart = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM public.cart WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Cart deleted with ID: ${id}`)
    })
}

module.exports = {
    getCart,
    getCartById,
    createCart,
    updateCart,
    deleteCart
}