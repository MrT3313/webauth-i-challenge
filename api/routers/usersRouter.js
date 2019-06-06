// IMPORTS
const express = require('express')

// KNEX version of DB
    const DB_KNEX = require('../../data/dbConfig.js')

// ROUTER
    const router = express.Router()

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// - GET - //
    router.get('/', async (req,res) => {
        console.log('usersRouter GET/')

        DB_KNEX('USERS')
            .then( users => {
                res.status(200).json(users)
            })
            .catch( () => {
                res.status(500).json({ error: `GET/ -> Could not get ALL users`})
            })
    })
// - POST - //
    /* THIS IS HANDLED IN W/ A DEDICATED REGISTER ROUTER */ 
// - PUT - //
// - DELETE - //

// EXPORTS
    module.exports = router