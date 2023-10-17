const pool = require('./queries').pool;
const qunatity = require('./quantity_product');

const getProduct = (request, response) => {
    pool.query('SELECT * FROM public.products ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
  
const getProductById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM public.products WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createProduct = (request, response) => {
    const {name, desc, category_id, price, mainImg, frontImg, backImg} = request.body

    pool.query('INSERT INTO public.products (name, "desc", category_id, price, main_img, front_img, back_img) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
    [name, desc, category_id, price, mainImg, frontImg, backImg], (error, results) => {
        if (error) {
            throw error
        }
        qunatity.createQuantityProduct({id: id, product_id: id, is_one_size: null, quantity_total: 0, quantity_s: null, quantity_m: null, quantity_l: null, quantity_xl: null});
        response.status(201).send(`Products added with ID: ${results.insertId}`)
    })
}

const updateProduct = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, desc, category_id, price, mainImg, frontImg, backImg } = request.body

    pool.query(
        'UPDATE public.products SET name = $1, desc = $2, category_id = $3, price = $4, mainImg = $5, frontImg = $6, backImg = $7 WHERE id = $8',
        [name, desc, category_id, price, mainImg, frontImg, backImg, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Products modified with ID: ${id}`)
        }
    )
}

const deleteProduct = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM public.products WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        qunatity.deleteQuantityProduct({id: id});
        response.status(200).send(`Products deleted with ID: ${id}`)
    })
}

module.exports = {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}