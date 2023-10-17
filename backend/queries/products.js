const pool = require('./queries').pool;
const qunatity = require('./quantity_product');

const getProduct = (request, response) => {
    pool.query('SELECT * FROM public.products INNER JOIN public.quantity_product AS Sod ON public.products.id = Sod.product_id ORDER BY public.products.id ASC', (error, results) => {
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
    const {name, desc, category_id, price, mainImg, frontImg, backImg, is_one_size} = request.body

    pool.query('INSERT INTO public.products (name, "desc", category_id, price, main_img, front_img, back_img) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id', 
    [name, desc, category_id, price, mainImg, frontImg, backImg], (error, results, fields) => {
        if (error) {
            throw error
        }
        pool.query('INSERT INTO public.quantity_product (product_id, is_one_size, quantity_total, quantity_s, quantity_m, quantity_l, quantity_xl) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
        [results.rows[0].id, is_one_size, null, null, null, null, null], (error, results) => {
            if (error) {
                throw error
            }
        })
        response.status(201).send(`Products added with ID: ${ results.rows[0].id}`)
    })
}

const updateProduct = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, desc, category_id, price, mainImg, frontImg, backImg, is_one_size } = request.body

    pool.query(
        'UPDATE public.products SET name = $1, "desc" = $2, category_id = $3, price = $4, main_img = $5, front_img = $6, back_img = $7 WHERE id = $8',
        [name, desc, category_id, parseInt(price), mainImg, frontImg, backImg, id],
        (error, results) => {
            if (error) {
                throw error
            }
            pool.query('UPDATE public.quantity_product SET is_one_size = $1 WHERE product_id = $2', 
            [is_one_size, id], (error, results) => {
                if (error) {
                    throw error
                }
            })
            response.status(200).send(`Products modified with ID: ${id}`)
        }
    )
}

const deleteProduct = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM public.quantity_product WHERE product_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
    })
    pool.query('DELETE FROM public.products WHERE id = $1 RETURNING id', [id], (error, results) => {
        if (error) {
            throw error
        }
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