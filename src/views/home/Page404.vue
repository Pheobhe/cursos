<template>
    <div class="title">
        <h3 class="title__h3"> Error 404: </h3>
        <span class="title__h3__span">"Pagina no encontrada"</span>
       
        <v-button-main
        textoBtn="Informar"
        :color-fondo="color4"
        :color-texto="color5"
    
    /> 
    </div>

</template>
<script>
 
 
 import VButtonMain from '@/components/base/VButtonMain.vue'
 import { c4, c5 } from '@/components/_app.scss?vue&type=style&index=0&lang=scss&module=1'
    
 export default {
        name:'Page404',
        components: {
             VButtonMain
        },
        data: function() {
            return {                
                color4: c4,
                color5: c5
               
                }
        }
    }
</script>

<style lang="scss" scoped>
  
    @import '../../components/_app.scss';
    

    .title{
       
        padding-top: 3em;
        padding-bottom: 3em;
        display: flex;
       
        &__h3{
           
            font-family: $ff-primary;
            font-size: 22px;
            width: 30%;
            display: flex;
            justify-content: center;
            align-items: left;
             &__span{
               
                width: 50%;
                padding-top: 1.5em;
                font-family: $ff-primary;
                font-size: 18px;
                color: $color4;
                }
            }
 

        }
       
</style>