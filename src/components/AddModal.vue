<template>
    <v-card>
        <v-card-title >
          <span class="text-h5">Agregar Curso</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-text-field
                    label="Nombre del curso"
                    required
                    counter="30"
                    v-model="myCourse.nombre"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-text-field
                    label="URL de la imagen"
                    required
                    v-model="myCourse.img"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-text-field
                    label="Cupos del curso"
                    required
                    counter="2"
                    v-model="myCourse.cupos"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-text-field
                    label="Inscritos en el curso"
                    required
                    counter="2"
                    v-model="myCourse.inscritos"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-text-field
                        label="Duración del curso"
                        required
                        v-model="myCourse.duracion"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-text-field
                        label="Fecha de registro"
                        :value="myCourse.fecha_registro"
                        readonly
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-text-field
                        label="Costo del curso"
                        required
                        v-model="myCourse.costo"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                >
                    <v-textarea
                        label="Descripción"
                        solo
                        required
                        counter="120"
                        v-model="myCourse.descripcion"
                    ></v-textarea>
                </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="setCourse()"
          >
            Agregar
          </v-btn>
          <v-btn
            color="blue darken-1"
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
    name: 'component-name',
    // props: {},
    data: function(){
        return {
            myCourse:{
                id: "", 
                img: "",
                nombre: "", 
                costo: "", 
                duracion: "", 
                cupos: "", 
                inscritos: "", 
                completado: false, 
                fecha_registro: "",
                descripcion:""
            }
        }
    },
    computed: {
        ...mapState(["cursos"])
    },
    methods: {
        setDate(){
            let date = new Date()
            this.myCourse.fecha_registro = date.toLocaleDateString()
        },
        setCourse(){
            
            if(this.myCourse.cupos < this.myCourse.inscritos){
                alert("La cantidad de inscritos no debe superar los cupos disponibles")
                return
            }

            let course = this.myCourse

            this.$emit('add', course)
        }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
        created(){
            this.setDate()
        }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    span{
        margin: 0 auto;
    }
</style>