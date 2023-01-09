import { mande } from 'mande'

const api = mande("http://localhost:3000/perfil", {})

export function cadastrar(perfil) { 
    return api.post(perfil)
}