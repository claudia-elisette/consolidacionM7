<template>
    <div>
        <v-app-bar
            color="deep-purple"
            dark
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>Cursos AlfaWeb</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item v-for="(route,i) in routes" :key="i" @click="redirectTo(route.name)">
                        <v-list-item-icon>
                        <v-icon>{{route.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{route.title}}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'navBar-comp',
    // props: {},
    data: function(){
        return {
            drawer: false,
            group: null,
            routes:[
                {
                    icon:"mdi-home",
                    title:"Inicio",
                    name:"home"
                },
                {
                    icon:"mdi-wrench",
                    title:"Administración",
                    name:"administracion"
                },
            ],
        }
    },
    computed: {
        currentName(){
            return this.$route.name
        }
    },
    methods: {
        redirectTo(routeName){
            if(this.currentName == routeName) return

            this.$router.push({name:routeName})
        }
    },
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