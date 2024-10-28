<template>
    <tr>
        <td>{{ curso.nombre }}</td>
        <td>{{ curso.cupos }}</td>
        <td>{{ curso.inscritos }}</td>
        <td>{{ curso.duracion }}</td>
        <td><v-chip color="green" dark>${{ curso.costo }}</v-chip></td>
        <td><v-chip :color="completedColor" dark>{{ isCompleted }}</v-chip></td>
        <td><v-chip color="green" dark>{{ curso.fecha_registro }}</v-chip></td>
        <td>
            <v-dialog v-model="editDialog">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    icon
                    color="orange"
                    v-bind="attrs"
                    v-on="on"
                    >
                    <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </template>
                <EditModal :id="curso.id" @close="editDialog=false"></EditModal>
            </v-dialog>
            <v-dialog v-model="deleteDialog" max-width="400">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    icon
                    color="red"
                    v-bind="attrs"
                    v-on="on"
                    >
                    <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </template>
                <DeleteModal :id="curso.id" @delete="deleteCurso" @close="deleteDialog=false"></DeleteModal>
            </v-dialog>
        </td>  
    </tr>
</template>

<script>
import { mapState } from 'vuex';
import EditModal from './EditModal.vue';
import DeleteModal from './DeleteModal.vue';

export default {
    name: 'tableRow-comp',
    props: {
        curso:{
            type:Object,
            Required:true
        }
    },
    data: function(){
        return {
            editDialog: false,
            deleteDialog: false
        }
    },
    computed: {
        ...mapState(['cursos']),
        isCompleted(){
            if(this.curso.completado){
                return "Si"
            }else{
                return "No"
            }
        },
        completedColor(){
            if(this.curso.completado){
                return "light-blue"
            }else{
                return "grey"
            }
        }
    },
    methods: {
        deleteCurso(id){
            let index = this.cursos.findIndex((curso)=> curso.id == id)
            this.cursos.splice(index,1)
            this.deleteDialog=false
        }
    },
    // watch: {},
    components: {
        EditModal,
        DeleteModal
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>