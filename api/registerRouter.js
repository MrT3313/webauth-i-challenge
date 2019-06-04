// IMPORTS
const express = require('express')

// KNEX version of DB
    const DB_KNEX = require('../data/dbConfig')

// ROUTER
    const router = express.Router()

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //
/* 
    there is ONLY a post request in here since this router is ONLY for
    registering a user  
*/


// - POST - //
    /* ACCEPTED SHAPE
    {
            "firstName": "STRING",
            "lastName": "STRING",
            "userName": "STRING",
            "password": "STRING"
        }
    */
    router.post('/', async (req,res) => {
    console.log('registerRouter POST/')

    DB_KNEX('USERS')
        .insert(req.body)
        .then( results => {
            console.log(results)
            
            res.status(200).json(results)
        })
        .catch( () => {
            res.status(500).json({ error: `POST/ -> Could not INSERT new USER`})
        })
})
// EXPORTS
    module.exports = router