<template>
    <div>
        <div>
            <button class="btn" @click="showInscription = true">Inscribir</button>
        </div>
        <div 
        v-if="showInscription"
        class="inscription">
            <contactos-cursos /> 
            <button class="btn" @click="showInscription = false">Cancelar</button>
        </div>
       
    </div>
</template>

<script>

import ContactosCursos from '@/components/cursos/ContactosCursos.vue'

    export default {
        name: 'DetailCurso',
        data() {
            return {
                showInscription:false
            }
        },
        components: {
            ContactosCursos
        }
    }
</script>

<style lang="scss" scoped>

</style>