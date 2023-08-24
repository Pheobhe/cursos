<template>
    <div>
        <ul>
            <li>
                <router-link :to="{name: 'alumnosa'}"
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
                <router-link :to="{name: 'alumnosd', params:{'codigo': 30 }}"
               >Curso D</router-link>
            </li>
        </ul>
    </div>
</template>

