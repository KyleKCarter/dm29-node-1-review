const fruit = require('./fruit.json')

//wanting to get all data from fruit from .json

const getProducts = (req, res) => {
    res.status(200).send(fruit)
}

const getOneFruit = (req, res) => {
    // let selectedFruit = fruit.filter(fruit => req.params.id == fruit.id)
    // res.send(selectedFruit)

    // let selectedFruit = fruit.findIndex(fruit => +req.params.id === fruit.id)
    // res.status(200).json(fruit[selectedFruit])

    let selectedFruit = []
    for(let i = 0; i < fruit.length; i++) {
        if(fruit[i].id === +req.params.id) {
            selectedFruit.push(fruit[i])
        }
    }
    res.status(200).send(selectedFruit)
}

module.exports = {
    getProducts,
    getOneFruit
}