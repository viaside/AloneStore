const pool = require('./queries').pool;

const getUser = (request, response) => {
    pool.query('SELECT * FROM public."user" ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}
  
const login = (request, response) => {
    const loginData = request.params.login
    const passwordData = request.params.password
    pool.query('SELECT * FROM public."user" WHERE login = $1 AND password = $2', [loginData, passwordData], (error, results) => {
        if (error) {
            response.status(400).json('not found')
        } else{
            response.status(200).json(results?.rows);
        }
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM public."user" WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserByLogin = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM public."user" WHERE login = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const {login, password, phone_number, email, full_name, address, is_admin} = request.body

    pool.query('INSERT INTO public."user" (login, password, phone_number, email, full_name, address, is_admin) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id', 
    [login, password, phone_number, email, full_name, address, false], (error, results) => {
        if (error) {
            throw error
        } else{
            pool.query('INSERT INTO public.cart (user_id, total_price) VALUES ($1, $2)', 
            [results.rows[0].id, 0], (error, results) => {
                if (error) {
                    throw error
                }
            })
            response.status(201).send("SUCCESS")
        }
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { login, password, phone_number, email, full_name, address} = request.body

    pool.query(
        'UPDATE public."user" SET login = $1, password = $2, phone_number = $3, email = $4, full_name = $5, address = $6 WHERE id = $7',
        [login, password, phone_number, email, full_name, address, is_admin, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Users modified with ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM public."user" WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Users deleted with ID: ${id}`)
    })
}

module.exports = {
    login,
    getUser,
    getUserById,
    getUserByLogin,
    createUser,
    updateUser,
    deleteUser
}