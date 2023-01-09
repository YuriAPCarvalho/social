const express = require('express')
const router = express.Router()
const perfilService = require('./../services/perfilService')
const { verificar } = require('./../middlewares/autenticacaoMiddleware')

router.get("", async (req, res) => {
    try {
        const resposta = await perfilService.buscarUltimos()
        res.json(resposta)

    } catch (error) {
        res.status(error.status).json({
            message: error.message
        })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const resposta = await perfilService.buscarPorId(req.params.id)
        res.json(resposta)

    } catch (error) {
        res.status(error.status).json({
            message: error.message
        })
    }
})
router.post("", async (req, res) => {
    try {
        const resposta = await perfilService.cadastrar(req.body)
        res.json(resposta)

    } catch (error) {
        res.status(error.status).json({
            message: error.message
        })
    }
})
router.post("/conexao", verificar, async (req, res) => {
    try {
        const resposta = await perfilService.conectar(req.body)
        res.json(resposta)

    } catch (error) {
        res.status(error.status).json({
            message: error.message
        })
    }
})
router.put("/:id", verificar, async (req, res) => {
    try {
        const resposta = await perfilService.editar(req.params.id, req.body)
        res.json(resposta)

    } catch (error) {
        res.status(error.status).json({
            message: error.message
        })
    }
})

module.exports = router