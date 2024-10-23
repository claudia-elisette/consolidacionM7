<template>
    <v-card width="400">
        <v-img
            height="200px"
            contain
            :src="curso.img"
        >
        </v-img>
        <v-card-title>{{ curso.nombre }}</v-card-title>
        <v-card-text>
            
            <div class="font-weight-bold ml-8 mb-2">
              Información
            </div>

            <v-timeline
              align-top
              dense
            >
                <v-timeline-item
                    color="deep-purple lighten-1"
                    small
                >
                    <div>
                    <div class="font-weight-normal">
                        Costo: <strong>{{ curso.costo }}</strong>
                    </div>
                    <div>Duración: {{ curso.duracion }}</div>
                    </div>
                </v-timeline-item>
                <v-timeline-item
                    color="green"
                    small
                >
                    <div>
                    <div class="font-weight-normal">
                        Cupos: <strong>{{ curso.cupos }}</strong>
                    </div>
                    <div>Completado: {{ isCompleted }}</div>
                    </div>
                </v-timeline-item>
                <v-timeline-item
                    color="deep-purple lighten-1"
                    small
                >
                    <div>
                    <div class="font-weight-normal">
                        Fecha de registro: 
                    </div>
                    <div>{{curso.fecha_registro}}</div>
                    </div>
                </v-timeline-item>
                <v-timeline-item
                    color="green"
                    small
                >
                    <div>
                    <div class="font-weight-normal">
                        Descripción: 
                    </div>
                    <div>{{ curso.descripcion }}</div>
                    </div>
                </v-timeline-item>
            </v-timeline>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'card-comp',
    props: {
        curso:{
            type:Object,
            Required:true
        }
    },
    data: function(){
        return {}
    },
    computed: {
        isCompleted(){
            if(this.curso.completado){
                return "Si"
            }else{
                return "No"
            }
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
    
</style>