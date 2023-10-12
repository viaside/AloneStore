const db = require('./queries').pool;

const getCategory = (request, response) => {
    db.query('SELECT * FROM public.category ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
  
const getCategoryById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM public.category WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createCategory = (request, response) => {
    const { name } = request.body

    pool.query('INSERT INTO public.category (name) VALUES ($1)', 
    [name], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Category added with ID: ${results.insertId}`)
    })
}

const updateCategory = (request, response) => {
    const id = parseInt(request.params.id)
    const { name } = request.body

    pool.query(
        'UPDATE public.category SET name = $1 WHERE id = $2',
        [name, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Category modified with ID: ${id}`)
        }
    )
}

const deleteCategory = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM public.category WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Category deleted with ID: ${id}`)
    })
}

module.exports = {
    getCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}