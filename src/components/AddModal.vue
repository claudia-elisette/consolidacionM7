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
                    v-model="myCurso.nombre"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-text-field
                    label="URL de la imagen"
                    required
                    v-model="myCurso.img"
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
                    v-model="myCurso.cupos"
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
                    v-model="myCurso.inscritos"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-text-field
                        label="Duración del curso"
                        required
                        v-model="myCurso.duracion"
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-text-field
                        label="Fecha de registro"
                        :value="myCurso.fecha_registro"
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
                        v-model="myCurso.costo"
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
                        v-model="myCurso.descripcion"
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
            @click="setCurso()"
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
            myCurso:{
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
            this.myCurso.fecha_registro = date.toLocaleDateString()
        },
        setCurso(){
            
            if(this.myCurso.cupos < this.myCurso.inscritos){
                alert("La cantidad de inscritos no debe superar los cupos disponibles")
                return
            }

            this.myCurso.id = Number(Math.floor(Math.random()*1000))

            let curso = this.myCurso

            console.log(curso)

            this.$emit('add', curso)
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