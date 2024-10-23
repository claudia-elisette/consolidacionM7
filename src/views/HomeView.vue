<template>
  <v-container>
    <h1>Lista de cursos</h1>
    <v-row>
      <v-col v-for="curso in cursos" :key="curso.id" cols="12" sm="10" md="6" lg="4" >
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
                  <div>Completado: {{ curso.completado }}</div>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
    // components: {},
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
