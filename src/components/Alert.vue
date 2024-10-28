<template>
    <div>
        <v-alert
         dense
         outlined
         icon="mdi-account-multiple"
         color="purple"
        >
            Cantidad total de alumnos permitidos: {{ totalCupos }} alumnos.
        </v-alert>
        <v-alert
         dense
         outlined
         icon="mdi-account-check"
         color="light-blue"
        >
            Cantidad total de alumnos inscritos: {{ totalInscritos }} alumnos.
        </v-alert>
        <v-alert
         dense
         outlined
         icon="mdi-account-plus"
         color="red"
        >
            Cantidad total de cupos restantes: {{ cuposRestantes }} alumnos.
        </v-alert>
        <v-alert
         dense
         outlined
         icon="mdi-cancel"
         color="pink"
        >
            Cantidad total de cursos terminados: {{ cursosTerminados }} cursos.
        </v-alert>
        <v-alert
         dense
         outlined
         icon="mdi-bell-ring"
         color="light-green"
        >
            Cantidad total de cursos activos: {{ cursosActivos }} cursos.
        </v-alert>
        <v-alert
         dense
         outlined
         icon="mdi-book-edit"
         color="amber"
        >
            Cantidad total de cursos: {{ totalCursos }} cursos.
        </v-alert>
    </div>
    
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'info-comp',
    // props: {},
    data: function(){
        return {
            //INTENTO DE HACER ALERTS DESDE UN ARRAY
            // alerts:[
            //     {
            //         icon:"mdi-account-multiple",
            //         color:"purple",
            //         text1:"Cantidad total de alumnos permitidos",
            //         data:"",
            //         text2:"alumnos",

            //     },
            //     {
            //         icon:"mdi-account-check",
            //         color:"light-blue",
            //         text1:"Cantidad total de alumnos inscritos",
            //         data:"",
            //         text2:"alumnos",

            //     },
            //     {
            //         icon:"mdi-account-plus",
            //         color:"red",
            //         text1:"Cantidad total de cupos restantes",
            //         data:"",
            //         text2:"alumnos",

            //     },
            //     {
            //         icon:"mdi-cancel",
            //         color:"pink",
            //         text1:"Cantidad total de cursos terminados",
            //         data:"",
            //         text2:"cursos",

            //     },
            //     {
            //         icon:"mdi-bell-ring",
            //         color:"light-green",
            //         text1:"Cantidad total de cursos activos",
            //         data:"",
            //         text2:"cursos",

            //     },
            //     {
            //         icon:"mdi-book-edit",
            //         color:"amber",
            //         text1:"Cantidad total de cursos",
            //         data:"",
            //         text2:"cursos",

            //     },
            // ]
        }
    },
    computed: {
        ...mapGetters(['totalCupos', 'totalInscritos','cursosTerminados','cursosActivos','totalCursos']),
        cuposRestantes(){
            return this.totalCupos -this.totalInscritos 
        }

    },
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    div{
        width: 100%;
    }
</style>