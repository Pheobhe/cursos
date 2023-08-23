<template>
    <div class="alumnos">
        <div class="alumnos__left">
              aca un menu
        </div>

        <div class="alumnos__right">
            aca contenido de cada op del menu
        </div>

    </div>
</template>

<script>
    export default {
        name: 'AlumnosPage'
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
    width: 70%;
  }
 
}
</style>