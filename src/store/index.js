import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search:null,
    tasks: [
      {
        id: 1,
        title: "Wake Up",
        done: false,
        dueDate:'2022-10-16'
      },
      {
        id: 2,
        title: "Do Your Chores",
        done: false,
        dueDate:'2022-10-17'
      },
      {
        id: 3,
        title: "Clean Yourself",
        done: false,
        dueDate:null
      },
      // {
      //   id: 4,
      //   title: "Make Food",
      //   done: false,
      // },
      // {
      //   id: 5,
      //   title: "Drink Beer",
      //   done: false,
      // },
      // {
      //   id: 6,
      //   title: "Go For Outing",
      //   done: false,
      // },
      // {
      //   id: 7,
      //   title: "Play Music",
      //   done: false,
      // },
      // {
      //   id: 8,
      //   title: "Go To Bed",
      //   done: false,
      // },
    ],
    snackbar:{
      show:false,
      text:"",
    timeout: 1100,

    }
  },
  
  mutations: { 

    // **** Search starts ****
    setSearch(state,value){
      console.log('value',value);
      state.search = value
    },
    // **** Search ends ****

    // ******* have to convet "this" to "state" *****
    // ******* No Async will Work here ******

    addTask(state, newTaskTitle){
      console.log("addtask");
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done:false,
        dueDate:null
      }
      state.tasks.push(newTask);
      // this.newTaskTitle = ""
    },

    doneTask(state,id) {
      console.log("data", id);
      let task = state.tasks.filter(task => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state,id) {
      // console.log("data", id);
      state.tasks = state.tasks.filter(task => task.id !== id);
      // console.log("asdf", state.tasks);
    },
    updateTaskTitle(state,payload){
      console.log('payload:',payload);
      let task = state.tasks.filter(task => task.id === payload.id)[0];
      task.title = payload.title
    },
    updateTaskDueDate(state,payload){
      console.log('payload:',payload);
      let task = state.tasks.filter(task => task.id === payload.id)[0];
      task.dueDate = payload.dueDate
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
    deleteTask({commit}, id){
      commit('deleteTask',id)
      commit('showSnackbar','Task Deleted !')
    },
    updateTaskTitle({commit}, payload){
      commit('updateTaskTitle', payload)
      commit('showSnackbar','Task Updated !')
    },
    updateTaskDueDate({commit}, payload){
      commit('updateTaskDueDate', payload)
      commit('showSnackbar','Due Date Updated !')
    }
  },
  getters: {
    tasksFiltered(state){
      if(!state.search){
        return state.tasks
      }
      return state.tasks.filter(task=>task.title.toLocaleLowerCase().includes(state.search.toLocaleLowerCase()))
    }
  },
})  
