// IMPORTS
const express = require('express')

// KNEX version of DB
    const DB_KNEX = require('../../data/dbConfig.js')

// MIDDLEWARE
    const pwHash = require('../middleware/pwHash')

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
    router.post('/', pwHash, async (req,res) => {
    console.log('registerRouter POST/')
    console.log('req.newUser', req.newUser)

    const objToPass = req.newUser
    console.log('object to pass', objToPass)
    
    DB_KNEX('USERS')
        .insert(objToPass)
        .then( results => {
            res.status(200).json(results)
        })
        .catch( () => {
            res.status(500).json({ error: `POST/ -> Could not INSERT new USER`})
        })
})
// EXPORTS
    module.exports = router