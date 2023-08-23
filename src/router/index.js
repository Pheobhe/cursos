import { createRouter, createWebHistory } from 'vue-router'
import CursosPage from '@/views/CursosPage'
import ListaProfesores from '@/components/cursos/ListaProfesores'

const routes = [
 
  {
    path:'/lista-cursos',
    component: CursosPage,
    name: 'cursos'
  },
  {
    path:'/profesores',
    component: ListaProfesores,
    name: 'profesores'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
