<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Agregar Curso
        </v-btn>
      </template>
      <AddModal @add="add" @close="dialog=false"></AddModal>
      
    </v-dialog>
  </v-row>
</template>


<script>

import { mapActions } from 'vuex';
import AddModal from './AddModal.vue';
export default {
    name: 'addCourse-comp',
    // props: {},
    data: function(){
        return {
            dialog: false,
            
        }
    },
    computed: {
    },
    methods: {
        ...mapActions(['addCurso']),
        add(curso){
            this.addCurso(curso)
            this.dialog=false
        }
    },
    // watch: {},
    components: {
        AddModal
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>