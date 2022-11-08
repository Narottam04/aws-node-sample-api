const app = require("express")()

// import data files
const characters = require('./data/allCharacter.json')
const spells = require('./data/allSpells.json')

const {PORT = 3000 }= process.env

app.get('/', (req,res) => {
    res.status(200).send({
        name:"Harry potter api",
        Endpointes:"/spells, /characters"
    },
    )
})

app.get('/spells', (req,res) => {
    res.status(200).json(spells)
})

app.get('/characters', (req,res) => {
    res.status(200).json(characters)
})

app.listen(PORT,() => {
    console.log(`API IS RUNNING ON PORT ${PORT} `)
})
