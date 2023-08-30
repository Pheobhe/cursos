<template>
    <div class="contacto">
        <h3 class="contacto__title">{{ titulo }}</h3>
        <input
            type="email"
            class="contacto__in"
            placeholder="Ingrese email"
        >
        <input
            type="text"
            class="contacto__in"
            placeholder="Ingrese mensaje"
        >
        <button class="contacto__btn">Enviar</button>
 
    </div>
</template>

<script>
    export default {
        name: 'ContactosCursos',
        data() {
            return{
                email:'data@gmail.com',
                fullName:''
            }
        },
        props: {
            titulo: String
        },
        beforeCreate: function() {
            console.log('Funcion  que se ejecuta antes de ser creada')
            console.log(this.email)
            console.log(this.$route.params.id)
            console.log(this.titulo)
        },
    }
</script>

<style lang="scss" scoped>

.contacto {
    border: 1px solid;
    display: block;
    &__title{
        font-size:  15px;
        font-weight: bold;
    }
    &__in{
        display: block;
        height: 35px;
        margin: 10px;
    }
    &__btn{
        margin: 10px;
        padding: 7px 16px 7px 16px;
    }
}
</style>