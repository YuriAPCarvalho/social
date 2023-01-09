<template>
<div class="alerta-app" :class="[{ erro: erro }]" v-show="exibir">
    <p>{{ mensagem }}</p>
    <button @click="fechar">Fechar</button>
</div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAlertaStore } from '../stores/alertaStore'
 
export default {
    computed: {
        ...mapState(useAlertaStore, ["exibir", "mensagem", "erro"])
    },
    methods: {
        ...mapActions(useAlertaStore, ["fechar"])
    }
} 
</script>

