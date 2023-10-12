const db = require('./queries').pool;

const getStatus = (request, response) => {
    db.query('SELECT * FROM public.status ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
  
const getStatusById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM public.status WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createStatus = (request, response) => {
    const { name } = request.body

    pool.query('INSERT INTO public.status (name) VALUES ($1)', 
    [name], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Status added with ID: ${results.insertId}`)
    })
}

const updateStatus = (request, response) => {
    const id = parseInt(request.params.id)
    const { name } = request.body

    pool.query(
        'UPDATE public.status SET name = $1 WHERE id = $2',
        [name, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Status modified with ID: ${id}`)
        }
    )
}

const deleteStatus = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM public.status WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Status deleted with ID: ${id}`)
    })
}

module.exports = {
    getStatus,
    getStatusById,
    createStatus,
    updateStatus,
    deleteStatus
}