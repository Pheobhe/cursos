<template>
    <div class="profesores">
        <v-lista 
            :lista="lista"
        />
    </div>
</template>

<script>

import VLista from '@/components/base/VLista'

    export default {
        name: 'ListaProfesores',
        components: {
            VLista
            
        },
        data() {
            return {
            lista: [
                {id:0, name:'Juan Garcia'},
                {id:1, name:'Pedro Gonzalez'},
                {id:2, name:'Yair Bonin'},
                {id:3, name:'Pedro Antonio'},
                {id:4, name:'Laura Fernandez'},
                ]
            }
       
        },
       
    }
</script>

<style lang="scss" scoped>

</style>