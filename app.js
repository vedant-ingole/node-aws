const express = require('express')
const app = express()

const port = process.env.port || 3000

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => {
    console.log('Server up and running')
})


// github connection to aws through installing app 
//vedant-ingole
//26189620