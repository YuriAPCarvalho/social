<template>
    <h1 class="text-center titulo">Nova Conta</h1>

    <form class="form-login">
        <label for="nome">Nome</label>
        <input v-model="perfil.nome" type="text" placeholder="Digite seu nome" name="nome" id="nome">
        <label for="dataNascimento">Data de Nascimento</label>
        <input v-model="perfil.dataNascimento" type="date" placeholder="Data de Nascimento" name="dataNascimento"
            id="dataNascimento">
        <div class="flex full-width mt-5">
            <label for="disponibilidadeMudanca">Disponibilidade de Mudança</label>
            <input class="ml-5" v-model="perfil.disponibilidadeMudanca" type="checkbox"
                placeholder="E-Disponibilidade de Mudança" name="disponibilidadeMudanca"
                id="disponibilidadedeMudanca">
        </div>
        <label class="mt-5" for="disponibilidadeHorario">Disponibilidade de Horário</label>
        <select v-model="perfil.disponibilidadeHorario" class="mt-5 ml-1" id="disponibilidadeHorario">
            <option value="Meio Periodo">Meio Período</option>
            <option value="Integral">Integral</option>
        </select>
        <label for="email">E-mail</label>
        <input v-model="perfil.usuario.email" type="email" placeholder="E-Mail" name="email" id="email">
        <label for="senha">Senha</label>
        <input v-model="perfil.usuario.senha" type="password" placeholder="Senha" name="senha" id="senha">
        <button @click="cadastrarPerfil" type="button">Criar</button>
    </form>
</template>
<script>
import { mapActions } from 'pinia'
import { usePerfilStore } from '../stores/perfilStore'

export default {
    data: () => ({
        perfil: { usuario: {} },
    }),
    methods: {
        ...mapActions(usePerfilStore, ["cadastrar"]),
        cadastrarPerfil() {
            this.cadastrar(this.perfil)
        }
    }
}
</script>