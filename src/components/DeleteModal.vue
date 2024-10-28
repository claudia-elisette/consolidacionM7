<template>
    <v-card>
        <v-card-title class="text-h5">
          ¿Eliminar curso: <span>{{curso.nombre}}?</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click="$emit('delete', curso.id)"
          >
            Eliminar
          </v-btn>
          <v-btn
            color="black"
            text
            @click="$emit('close')"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'close-comp',
    props: {
        id:{
            type:Number,
            required:true
        },
        
    },
    data: function(){
        return {
          curso:{},
        }
    },
    computed: {
        ...mapState(['cursos']),
    },
    methods: {
      setCurso(id){
        let index = this.cursos.findIndex((curso)=> curso.id == id)
        this.curso = this.cursos[index]
        this.myId = this.curso.id
      },
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
      created(){
        this.setCurso(this.id)
      }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>