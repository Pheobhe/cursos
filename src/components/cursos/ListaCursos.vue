<template>
    <div class="cursos">
        <h3 class="cursos__title">{{titulo}}</h3>
        <v-lista
          :lista="lista"
        />
    </div>
</template>

<script>

import VLista from '@/components/base/VLista'

export default {
        name: 'ListaCursos',
        props:{
            titulo: String
        },
        components: {
            VLista
            
        },
        data() {
            return {
            lista: [
                {id:0, name:'Curso profesional de Django'},
                {id:1, name:'Curso profesional de Vue'},
                {id:2, name:'Curso profesional de JS'},
                {id:3, name:'Curso profesional de Laravel'},
                {id:4, name:'Curso profesional de Buenos Modales'},
                ]
            }
       
        },
       
    }
</script>

<style lang="scss" scoped>
    .cursos{
        border:  1px solid;
    }

</style>