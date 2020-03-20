const express = require('express');

//controller file
const {getProducts, getOneFruit} = require('./controller')
// const controller = require('./controller')

const app = express()

const PORT = 3000;

app.get('/api/fruit', getProducts)
app.get('/api/fruit/:id', getOneFruit)

app.listen(PORT, () => console.log(`Running on PORT ${PORT}`))