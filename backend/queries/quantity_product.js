const pool = require('./queries').pool;

const getQuantityProduct = (request, response) => {
    pool.query('SELECT * FROM public.quantity_product ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
  
const getQuantityProductById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM public.quantity_product WHERE product_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createQuantityProduct = (request, response) => {
    const {product_id, is_one_size, quantity_total, quantity_s, quantity_m, quantity_l, quantity_xl} = request.body

    pool.query('INSERT INTO public.quantity_product (product_id, is_one_size, quantity_total, quantity_s, quantity_m, quantity_l, quantity_xl) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
    [product_id, is_one_size, quantity_total, quantity_s, quantity_m, quantity_l, quantity_xl], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`quantity_product added with ID: ${results.insertId}`)
    })
}

const updateQuantityProduct = (request, response) => {
    const product_id = parseInt(request.params.id)
    const {quantity_total, quantity_s, quantity_m, quantity_l, quantity_xl} = request.body

    pool.query(
        'UPDATE public.quantity_product SET quantity_total = $1, quantity_s = $2, quantity_m = $3, quantity_l = $4, quantity_xl = $5 WHERE product_id = $6',
        [quantity_total, quantity_s, quantity_m, quantity_l, quantity_xl, product_id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`quantity_product modified with ID: ${product_id}`)
        }
    )
}

const deleteQuantityProduct = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM public.quantity_product WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`quantity_product deleted with ID: ${id}`)
    })
}

module.exports = {
    getQuantityProduct,
    getQuantityProductById,
    createQuantityProduct,
    updateQuantityProduct,
    deleteQuantityProduct
}