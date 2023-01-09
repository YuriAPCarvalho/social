const perfilModel = require('./../models/perfil')
const tokenUtil = require('./../utils/tokenUtil')
const bcrypt = require('bcrypt')

module.exports = {
    autenticar: async (usuario) => {
        try {
            if (usuario.email && usuario.senha) {
                let perfilEncontrado = await perfilModel.findOne({
                    "usuario.email": usuario.email
                }).select("+usuario.senha").exec()

                if (perfilEncontrado) {
                    const match = await bcrypt.compare(usuario.senha, perfilEncontrado.usuario.senha)

                    if (match) {
                        const token = tokenUtil.gerarToken(JSON.stringify(perfilEncontrado.usuario))
                        return {
                            token: token,
                            email: perfilEncontrado.usuario.email,
                            perfil: perfilEncontrado._id
                        }

                    } else {
                        throw {
                            message: "Erro ao efetuar login : Credenciais inválidas"
                        }
                    }
                } else {
                    throw {
                        message: "Erro ao efetuar login : Credenciais inválidas"
                    }
                }
            } else {
                throw {
                    message: "Erro ao efetuar login : Faltando credenciais!"
                }
            }
        } catch (error) {
            throw {
                message: error.message
            }
        }
    }
}