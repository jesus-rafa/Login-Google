
import LoginPage from '@/views/users/LoginPage.vue'
import SolicitudPage from '@/views/users/SolicitudPage.vue'

const usersRutes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/solicitar',
    name: 'solicitud',
    component: SolicitudPage,
  },
]

export default usersRutes