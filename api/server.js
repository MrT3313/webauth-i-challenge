// EXPRESS
    const express = require('express')

// ROUTERS
    const registerRouter = require('./registerRouter')
    const loginRouter = require('./loginRouter')
    const usersRouter = require('./usersRouter')

// SERVER
    const server = express()
    server.use(express.json())

// HOMEPAGE ROUTING
    server.get('/', (req, res) => {
        res.json({ message: 'webAuth Server is Working!'})
    })

// INDIVIDUAL ROUTES 
    server.use('/registerRouter', registerRouter)
    server.use('/loginRouter', loginRouter)
    server.use('/usersRouter', usersRouter)

// EXPORTS
    module.exports = server 