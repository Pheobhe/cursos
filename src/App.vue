<template>
 <!-- <h1>Practica Componentes dinámicos</h1> -->
 <div class="header">
  <h3 class="header__lista">Vue Cursos</h3>
    <ul class="header__lista">
        <li class="header__lista__item">
          <a 
            href="#"
            class="header__lista__item__link">
            Cursos
        </a>
        </li>
        <li class="header__lista__item">
          <a 
            href="#"
            class="header__lista__item__link"> 
            Profesores
          </a>
        </li>
        <li class="header__lista__item">
          <a 
            href="#"
            class="header__lista__item__link"> 
            Contactos
          </a>
        </li>
    </ul>
 </div>

 <div> 
  <lista-cursos 
  titulo="Listado de Cursos"
  />
  <lista-profesores 
  titulo="Listado de Profesores"
  />
  <contactos-cursos
    titulo="Formulario de Contacto"
  />
</div>

</template>

<script>

import ListaCursos from '@/components/cursos/ListaCursos'
import ListaProfesores from '@/components/cursos/ListaProfesores'
import ContactosCursos from '@/components/cursos/ContactosCursos'
export default {
  name: 'App',
  components: {
    ListaCursos,
    ListaProfesores,
    ContactosCursos
  }
}
</script>

<style lang="scss">

*{
  margin: 0px;
  padding: 0px;
}
.header {
  padding: 1em;
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__lista{
     display: flex;
     list-style: none;
     padding: 0;
     margin: 0;
     &__item{
      padding: 1em;

     }
  }
}
</style>
