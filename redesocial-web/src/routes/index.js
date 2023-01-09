import Home from '../pages/Home.vue'
import Perfil from '../pages/Perfil.vue'
import Login from '../pages/Login.vue'
import NovaConta from '../pages/NovaConta.vue'

export default [
    { path: '/home', component: Home },
    { path: '/perfil', component: Perfil },
    { path: '/nova-conta', component: NovaConta },
    { path: '/', component: Login }
]