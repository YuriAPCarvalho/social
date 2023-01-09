const express = require('express')
const router = express.Router()
const loginService = require('./../services/loginService')

router.post("", async (req, res) => {
    try {
        const resposta = await loginService.autenticar(req.body)
        res.json(resposta)

    } catch (error) {
        console.log(`ERRO: ${error.message}`)
        res.status(500).json({
            message: "Erro ao efetuar login."
        })
    }
})

module.exports = router