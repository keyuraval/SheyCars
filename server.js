const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnnection = require('./db')

app.get('/', (req, res) => res.send("Hello World"))
app.listen(port, () => console.log(`Nj started on ${port}`))