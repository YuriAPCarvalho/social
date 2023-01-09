import { defineStore } from "pinia"

export const useAlertaStore = defineStore("alerta", {
    state: () => ({
        exibir: false,
        mensagem: "Mensagem...",
        erro: false,
        info: false,
        aviso: false
    }),
    actions: {
        abrir(mensagem) {
            this.exibir = true,
                this.mensagem = mensagem

        },
        fechar() {
            this.exibir = false
            this.mensagem = ""
            this.erro = false
            this.info = false
            this.aviso = false
        },
        exibirErro(mensagem) {
            this.erro = true
            this.abrir(mensagem)
        }
    }
})