import { createRouter, createWebHistory } from 'vue-router'

import CursosPage from '@/views/CursosPage'
import ProfesoresPage from '@/views/ProfesoresPage'
import AlumnosPage from '@/views/alumnos/AlumnosPage'
import AlumnosA from '@/views/alumnos/AlumnosA'
import AlumnosB from '@/views/alumnos/AlumnosB'
import AlumnosC from '@/views/alumnos/AlumnosC'
import AlumnosD from '@/views/alumnos/AlumnosD'
import ContactoPage from '@/views/alumnos/ContactoPage'

const routes = [
 
  {
    path:'/lista-cursos',
    component: CursosPage,
    name: 'cursos'
  },
  {
    path:'/profesores',
    component: ProfesoresPage,
    name: 'profesores'
  },
  {
    path:'/alumnos',
    component: AlumnosPage,
    name: 'alumnos',
    children: [
      {
        path:'/alumnos-a',
        component: AlumnosA,
        name: 'alumnosa'
      },
      {
        path:'/alumnos-b',
        component: AlumnosB,
        name: 'alumnosb'
      },
      {
        path:'/alumnos-c',
        component: AlumnosC,
        name: 'alumnosc'
      },
      {
        path:'/alumnos-d/:codigo',
        component: AlumnosD,
        name: 'alumnosd'
      }
     
    ]
    
  } ,
  
  {
    path:'/contacto',
    component: ContactoPage,
    name: 'contacto'
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
