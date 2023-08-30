<template>
    <div class="contacto">
        <h3 class="contacto__title">{{ titulo }}</h3>
        <input
            type="email"
            class="contacto__in"
            placeholder="Ingrese email"
            v-model="email"
        >
        <input
            type="text"
            class="contacto__in"
            placeholder="Ingrese mensaje"
            v-model="fullName"
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
        created: function(){
            console.log('%c Se ha creado la instancia de Vue', 'background:blue; color: white; font-size: 20px;')
            if (this.$route.params.id === 0){
                this.email = 'otrosdata@gmail.com'
            }
            else{
                this.email = 'otrosdata@gmail.com'
                }
            this.verificarInscripcion()
        },
        beforeMount (){
            console.log('%c Se ejecuta antes de montar el componente en pantalla', 'background:green; color: white; font-size: 20px;')
        },
        methods: {
            verificarInscripcion: function(){
                console.log('Verificando ....')
            }
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