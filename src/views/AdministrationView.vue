<template>
    <div>
        <v-container class="mt-5">
            <h1>Administración</h1>
            <v-row justify="center" class="mt-10">
                <AddCourse></AddCourse>
            </v-row>
            <v-row justify="center" class="mt-10">
                <Table></Table>
            </v-row>
        </v-container>
        <div></div>
    </div>
    
</template>

<script>
import AddCourse from '@/components/addCourse.vue';
import Table from '@/components/Table.vue';

export default {
    name: 'administration-view',
    // props: {},
    data: function(){
        return {
            showAdd:false,
        }
    },
    // computed: {},
    methods: {
        
    },
    // watch: {},
    components: {
        Table,
        AddCourse
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