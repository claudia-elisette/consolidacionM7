<template>
    <v-card>
        <v-card-title >
          <span class="text-h5">Editar Curso</span>
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
                        v-model="myCurso.fecha_registro"
                        readonly
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-text-field
                        label="Terminado"
                        v-model="myCurso.completado"
                        required
                        hint="true/false"
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
            color="green"
            text
            @click="updateCurso(id)"
          >
            Editar
          </v-btn>
          <v-btn
            color="red"
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
    props: {
        id:{
            type:Number,
            required:true
        },
    },
    data: function(){
        return {
            myCurso:{}
        }
        
    },
    computed: {
        ...mapState(['cursos'])
    },
    methods: {
        setMycurso(id){
            let index = this.cursos.findIndex((curso)=> curso.id == id)

            this.myCurso = this.cursos[index]

            console.log(this.myCurso)
        },
        updateCurso(id){
            if(this.myCurso.completado== "true"){
                this.myCurso.completado = true
                this.myCurso.inscritos = 0
            }else{
                this.myCurso.completado = false
            }
            
            if(this.myCurso.cupos < this.myCurso.inscritos){
                alert("La cantidad de inscritos no debe superar los cupos disponibles")
                return
            }

            let index = this.cursos.findIndex((curso)=> curso.id == id)
            this.cursos[index] = this.myCurso
            console.log(this.cursos[index])
            this.$emit('close')
        },
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
        created(){
            this.setMycurso(this.id)
        }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    span{
        margin: 0 auto;
    }
</style>