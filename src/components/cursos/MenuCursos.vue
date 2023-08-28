<template>
    <div>
        <ul>
            <li>
                <router-link :to="{name: 'alumnos'}"
               >Curso A</router-link>
            </li>
            <li>
                <router-link :to="{name: 'alumnosb'}"
               >Curso B</router-link>
            </li>
            <li>
                <router-link :to="{name: 'alumnosc'}"
               >Curso C</router-link>
            </li>
            <li>
                <router-link :to="{name: 'alumnosd', params:{'codigo': 30 },query:{texto: [1,2,3,4]}}"
               >Curso D</router-link>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">

    .router-link-active{
        color:red
    }
    .router-link-exact-active{
        color: greenyellow;
    }
</style>

