// IMPORTS
const express = require('express')

// KNEX version of DB
    const DB_KNEX = require('../../data/dbConfig.js')

// ROUTER
    const router = express.Router()

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //
/* 
    there is ONLY a post request in here -> this ONLY deals with logging in

*/

// - POST - //
    router.post('/', async (req,res) => {
        
    })

// EXPORTS
    module.exports = router