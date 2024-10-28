<template>
    <div>
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
                    <TableRow v-for="curso in cursos" :key="curso.id" :curso="curso"></TableRow>
                </tbody>
            </template>
        </v-simple-table>
    </div>
    
</template>

<script>
import { mapState } from 'vuex';
import TableRow from './TableRow.vue';
export default {
    name: 'table-comp',
    // props: {},
    data: function(){
        return {
            tableHeaders:["Curso", "Cupos", "Inscritos","Duración","Costo","Terminado","Fecha","Acciones"],
            myId:"",
        }
    },
    computed: {
        ...mapState(['cursos'])
    },
    //methods: {},
    // watch: {},
    components: {
        TableRow,
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .modal{
        width: 100vw;

    }
</style>