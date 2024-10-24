<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                <th v-for="(header,i) in tableHeaders" :key="i" class="text-left">
                    {{header}}
                </th>
                </tr>
            </thead>
            <tbody>
                <TableRow v-for="curso in cursos" :key="curso.id" :curso="curso" @delete="deleteCourse"></TableRow>
            </tbody>
        </template>
  </v-simple-table>
</template>

<script>
import { mapState } from 'vuex';
import TableRow from './TableRow.vue';
export default {
    name: 'table-comp',
    // props: {},
    data: function(){
        return {
            tableHeaders:["Curso", "Cupos", "Inscritos","Duración","Costo","Terminado","Fecha","Acciones"]
        }
    },
    computed: {
        ...mapState(['cursos'])
    },
    methods: {
        deleteCourse(id){
            let index = this.cursos.findIndex((curso)=> curso.id == id)
            this.cursos.splice(index,1)
        }
    },
    // watch: {},
    components: {
        TableRow
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>