<template>
    <h1>Home</h1>
    <h2>Olá {{  usuarioLogado.nome }}</h2>
</template>

<script>

import { mapState } from 'pinia'
import { usePerfilStore } from '../stores/perfilStore'

export default {
    computed: {
        ...mapState(usePerfilStore, ["usuarioLogado"])
    }
}

</script>

