<template>
    <div>

    <div class="alumnos__right">
        <h3>Somos los alumnos  del D</h3>
        <p>{{ $route.params.codigo}}</p>
        <button class="btn" @click="irUrl()"> Inscribirse aca </button> 
    </div>
    </div>
</template>

<script>
    export default {
        name: "AlumnosD",
        methods: {
            irUrl:function() {
                this.$router.push({ name: 'contacto'})
            }
        }
    }
</script>

<style lang="scss" scoped>
 .btn{
    padding: 7px 10px;
 }
</style>