<template>
   <a
    class="main-btn"
    href="#"
    :style="{ backgroundColor: colorFondo, color: colorTexto}">
       {{ textoBtn }}
   </a>

</template>

<script>
    export default {
        name: 'VButtonMain',
        props: {
            textoBtn: String,
            colorTexto: String,
            colorFondo: String
        }
    }
</script>

<style lang="scss" scoped>

@import '../_app.scss';
    

    .main-btn{
        padding: 7px 15px 7px 15px;
        font-family: $ff-secondary;
        border: 1px solid;
        margin: 15px;
        text-decoration: none;
    }
</style>