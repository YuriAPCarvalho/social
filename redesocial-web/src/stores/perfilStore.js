import { defineStore } from 'pinia'
import { login } from '../api/login'
import { cadastrar } from '../api/perfil'

export const usePerfilStore = defineStore("perfil", {
    state: () => ({
        usuarioLogado: {}
    }),
    actions: {
       async login(usuario) {
           await login(usuario)
        
        },
        async cadastrar(perfil) {
            await cadastrar(perfil)
        }
    },
})