
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [
      { id: 1, 
        img: 'https://i.blogs.es/545cf8/es6-logo/450_1000.png', 
        nombre: 'JavaScript Avanzado', 
        costo: 30000,
        duracion: '2 meses', 
        cupos: 20, 
        inscritos: 10, 
        completado: false,
        fecha_registro: '06/03/2022', 
        descripcion: 'Curso con las nuevas actualizaciones de JavaScript.' 
      },
      { id: 2, 
        img: 'https://lineadecodigo.com/wp-content/uploads/2014/04/css.png', 
        nombre: 'CSS para principiantes',
        costo: 10000, 
        duracion: '1 mes', 
        cupos: 35, 
        inscritos: 23,
        completado: false, 
        fecha_registro: '05/03/2022', 
        descripcion:'Aprendiendo estilos con CSS desde el nivel más básico.' 
      },
      { id: 3, 
        img: 'https://i.pinimg.com/564x/45/c8/92/45c8926e25926d97d53c54a0b86350b8.jpg', 
        nombre: 'JavaScript Básico de 0 a 100', 
        costo: 20000, 
        duracion: '2 meses', 
        cupos: 25,
        inscritos: 0, 
        completado: true, 
        fecha_registro: '05/03/2022',
        descripcion: 'Programando para la web con JavaScript.' 
      },
      { id: 4, 
        img:'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png', 
        nombre: 'HTML Básico', 
        costo: 10000, 
        duracion: '1 mes', 
        cupos: 35, 
        inscritos: 0, 
        completado: true, 
        fecha_registro: '31/01/2022', 
        descripcion:'Aprende HTML 5 y crea tus primeras páginas web paso a paso con decenas de ejercicios.' 
      },
      { id: 5, 
        img: 'https://ih1.redbubble.net/image.319465116.6151/st,small,507x507-pad,600x600,f8f8f8.u2.jpg', 
        nombre: 'Vue JS de 0 a 100', 
        costo: 85500, 
        duracion: '5 meses', 
        cupos: 35, 
        inscritos: 35, 
        completado: false, 
        fecha_registro: '06/03/2022', 
        descripcion: 'Aprende desde cero como usar VueJS, cómo usarlo en aplicaciones pequeñas y ver lo que ofrece el framework.' 
      },
      { id: 6, 
        img: 'https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png',
        nombre: 'Estilos con SASS', 
        costo: 45000, 
        duracion: '1 mes', 
        cupos: 40, 
        inscritos: 35, 
        completado: false, 
        fecha_registro: '06/03/2022',
        descripcion: 'Con SASS aprenderás a escribir mejor código de CSS con todas las funciones necesarias.'
      },
    ]
  },
  getters: {
    totalCupos:state=>{
      return state.cursos.reduce((total,curso)=>{
        return total + curso.cupos
      },0)
    },
    totalInscritos: state=>{
      return state.cursos.reduce((total,curso)=>{
        return total + curso.inscritos
      },0)      
    },
    cursosTerminados: state=>{
       
      const terminados = state.cursos.filter((curso)=> curso.completado == true)
      return terminados.length

    },
    cursosActivos: state=>{
       
      const terminados = state.cursos.filter((curso)=> curso.completado == false)
      return terminados.length

    },
    totalCursos: state=>{
      return state.cursos.length
    }
  },
  mutations: {
    ADD_CURSO: (state, curso)=>{
      state.cursos.push(curso)
    }
  },
  actions: {
    addCurso:({commit}, curso)=>{
      commit('ADD_CURSO', curso)
    }
  },
  modules: {
  }
})
