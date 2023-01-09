const express = require("express")
const perfilRoute = require("./routes/perfilRoute")
const notificacaoRoute = require("./routes/notificacaoRoute")
const loginRoute = require("./routes/loginRoute")
const cors = require('cors')

const api = express()
const db = require("./db")

db.connect()

api.use(express.json())
api.use(cors({
  origin: "*"
}))
api.use('/perfil', perfilRoute)
api.use('/notificacao', notificacaoRoute)
api.use('/login', loginRoute)

api.get('/', (req, res) => {
  res.send("Bem vindo a Rede Social - API")
})

module.exports = api