<template>
  <div>
    <router-link 
      :to="{ name: 'cursos' }"
      class="link"> 
      Cursos
  </router-link>
    <router-link  
      :to="{ name: 'profesores' }" 
      class="link"> 
      Profesores
  </router-link >
  </div>

  <div>
  <router-view /> 

  </div>
</template>

<script>

  export default {
    name: 'App',
  }
</script>


<style lang="scss">
 .link{
   padding: 1em;
 }
</style>
