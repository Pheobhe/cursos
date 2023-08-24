<template>
    <div class="alumnos">
        <div class="alumnos__left">
              <menu-cursos />
        </div>

        <div class="alumnos__right">
            <router-view/>
        </div>

    </div>
</template>

<script>

import MenuCursos from '@/components/cursos/MenuCursos'
    export default {
        name: 'AlumnosPage',
        components: {
          MenuCursos
        }
    }
</script>

<style lang="scss" scoped>
 .alumnos {
    display: flex;
  &__left {
    width: 30%;
    border: 1px solid black;
  }
  &__right {
    border: 1px solid black;
    width: 70%;
  }
 
}
</style>