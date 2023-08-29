<template>
     <ul class="lista">
        <li
            class="lista__item"
            v-for="elemento in lista"
            :key="elemento.id">
            <router-link :to="{ name: 'cursos-detail', params: {id:elemento.id}}"
            class="lista_item_link" >
             {{ elemento.name }}
             </router-link>
        </li>

      </ul>
</template>

<script>
    export default {
        name: 'VLista',
        props: {
            lista: Array
        }    
    }
</script>

<style lang="scss" scoped>

</style>