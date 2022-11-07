import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "Wake Up",
        done: false,
      },
      {
        id: 2,
        title: "Do Your Chores",
        done: false,
      },
      {
        id: 3,
        title: "Clean Yourself",
        done: false,
      },
      {
        id: 4,
        title: "Make Food",
        done: false,
      },
      {
        id: 5,
        title: "Drink Beer",
        done: false,
      },
      {
        id: 6,
        title: "Go For Outing",
        done: false,
      },
      {
        id: 7,
        title: "Play Music",
        done: false,
      },
      {
        id: 8,
        title: "Go To Bed",
        done: false,
      },
    ],
    snackbar:{
      show:true,
      text:"hello mother flipper",
    timeout: 1100,

    }
  },
  getters: {
  },
  mutations: { 

    // ******* have to convet "this" to "state" *****
    // ******* No Async will Work here ******

    addTask(state, newTaskTitle){
      console.log("addtask");

      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done:false
      }
      state.tasks.push(newTask);
      // this.newTaskTitle = ""
    },

    doneTask(state,id) {
      console.log("data", id);
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state,id) {
      console.log("data", id);
      state.tasks = state.tasks.filter((task) => task.id !== id);
      console.log("asdf", state.tasks);
    },
    showSnackbar(state,text){
      let timeout = 0;
      if(state.snackbar.show){
        state.snackbar.show = false
        timeout = 300
      }
      setTimeout(()=>{
        state.snackbar.show = true
        state.snackbar.text = text
      },timeout)
    },
    hideSnackbar(state){
      state.snackbar.show = false;
    }
  },
  actions: {
    addTask({commit}, newTaskTitle){
      commit('addTask',newTaskTitle)
      commit('showSnackbar','Task Added !')
    },
    deleteTask({commit},id){
      commit('deleteTask',id)
      commit('showSnackbar','Task Deleted !')
    }
  },
  modules: {
  }
})  
