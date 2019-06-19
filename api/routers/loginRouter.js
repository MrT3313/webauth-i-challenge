// IMPORTS
const express = require('express')
const bcrypt = require('bcrypt')

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
        console.log('loginRouter POST/')
        const { userName, password } = req.body
        console.log(userName, password)

        DB_KNEX('USERS')
            .where('userName', userName)
                .first()
                .then( user => {
                    console.log('user', user)

                    const pwVerification = bcrypt.compareSync(password, user.password)
                        console.log(pwVerification)

                    if (user && pwVerification) {
                        res.status(200).json({ message: `Welcome ${userName}`})
                    } else {
                        res.status(500).json({ message: `Invalid Credentials`})
                    }

                })
                .catch( () => {
                    res.status(500).json({ message: "yo shit broken"})
                })
    })

// EXPORTS
    module.exports = router