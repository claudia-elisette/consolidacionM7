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
            <v-btn icon color="orange" @click="$emit('edit', curso.id)">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon color="red" @click="$emit('delete', curso.id)">
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </td>  
    </tr>
</template>

<script>
export default {
    name: 'tableRow-comp',
    props: {
        curso:{
            type:Object,
            Required:true
        }
    },
    data: function(){
        return {}
    },
    computed: {
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
    
</style>