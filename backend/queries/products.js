const pool = require('./queries').pool;
const qunatity = require('./quantity_product');
const fs = require("fs");

const Image = require("../models/models");

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

    pool.query(
        `SELECT 
            *,product.name as name, product.id as id, product.desc as desc, product.price as price,
            category.name as category 
            FROM public.products as product
            INNER JOIN public.quantity_product AS Sod ON product.id = Sod.product_id 
            INNER JOIN public.category AS category ON product.category_id = category.id 
            WHERE product.id = $1`
        , [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createProduct = (name, desc, category_id, price, mainImg, frontImg, backImg, is_one_size) => {
    pool.query('INSERT INTO public.products (name, "desc", category_id, price, main_img, front_img, back_img) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id', 
    [name, desc, category_id, price, mainImg, frontImg, backImg], (error, results, fields) => {
        if (error) {
            throw error
        }
        pool.query('INSERT INTO public.quantity_product (product_id, is_one_size, quantity_total, quantity_s, quantity_m, quantity_l, quantity_xl) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
        [results.rows[0].id, is_one_size, 0, 0, 0, 0, 0], (error, results) => {
            if (error) {
                throw error
            }
        })
    })
}

const updateProduct = (id, name, desc, category_id, price, mainImg, frontImg, backImg, is_one_size) => {
    pool.query('UPDATE public.products SET name = $1, "desc" = $2, category_id = $3, price = $4, main_img = $5, front_img = $6, back_img = $7 WHERE id = $8',
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