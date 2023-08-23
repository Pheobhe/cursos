<template>
    <div>
        <lista-cursos 
        titulo="Lista de Cursos"/>
    </div>
</template>

<script>
import ListaCursos from '@/components/cursos/ListaCursos'

    export default {
        name: 'CursosPage',
        components: {
            ListaCursos
        }
    }
</script>

<style lang="scss" scoped>

</style>