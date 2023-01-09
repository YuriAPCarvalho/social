require('dotenv').config()
const api = require("./server")
const port = process.env.PORT

api.listen(port, () => {
  console.log(`Rede social API rodando na porta: ${port}...`)
})