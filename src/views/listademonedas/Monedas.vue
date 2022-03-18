<template>
    <div>
        <h1>Administracion de Monedas</h1>
        <!-- <p>{{apellido}} {{name}}</p> -->
        <Listademonedas></Listademonedas>
    </div>
</template>

<script>
import Listademonedas from '@/components/Listademonedas.vue'
import {mapState} from 'vuex'

export default {
    data(){
        return {
            apellido: 'Tzuc'
        }
    },
    computed: {
        ...mapState(['name'])
    },
    components:{
        Listademonedas
    }
}
</script>
