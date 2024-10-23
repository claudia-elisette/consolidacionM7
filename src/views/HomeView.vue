<template>
  <v-container>
    <h1>Lista de cursos</h1>
    <v-row>
      <v-col v-for="curso in cursos" :key="curso.id" cols="12" sm="10" md="6" lg="4" >
        <Card :curso="curso"></Card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Card from '@/components/Card.vue';
  import { mapState } from 'vuex';

  export default {
    name: 'Home-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
      ...mapState(['cursos']),
      
    },
    //methods: {}
    // watch: {},
    components: {
      Card
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
  }
</script>
<style scoped>
  h1{
    text-align: center;
    font-size: 2.5rem;
    font-weight: 400;
  }
</style>
