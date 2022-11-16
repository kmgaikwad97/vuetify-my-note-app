import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

let db = new Localbase('db')
db.config.debug = false


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search:null,
    tasks: [
      // {
      //   id: 1,
      //   title: "Wake Up",
      //   done: false,
      //   dueDate:'2022-10-16'
      // },
      // {
      //   id: 2,
      //   title: "Do Your Chores",
      //   done: false,
      //   dueDate:'2022-10-17'
      // },
      // {
      //   id: 3,
      //   title: "Clean Yourself",
      //   done: false,
      //   dueDate:null
      // },
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

    },
    sorting:false
  },
  
  mutations: { 

    // **** Search starts ****
    setSearch(state,value){
      // console.log('value',value);
      state.search = value
    },
    // **** Search ends ****

    // ******* have to convet "this" to "state" *****
    // ******* No Async will Work here ******

    addTask(state, newTask){
      console.log("addtask");
      // let newTask = {
      //   id: Date.now(),
      //   title: newTaskTitle,
      //   done:false,
      //   dueDate:null
      // }
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
    setTasks(state,tasks){
      console.log("adf",tasks);
      state.tasks = tasks
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
    },
    toggleSorting(state){
      state.sorting = !state.sorting
    }
  },
  actions: {
    addTask({commit}, newTaskTitle){
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done:false,
        dueDate:null
      }
      db.collection('tasks').add(newTask).then(()=>{
        commit('addTask',newTask)
        commit('showSnackbar','Task Added !')
      })
    },
    doneTask({ state, commit }, id) {
      let task = state.tasks.filter(task => task.id === id)[0]
      db.collection('tasks').doc({ id: id }).update({
        done: !task.done
      }).then(() => {
        commit('doneTask', id)
      })
    },
    deleteTask({commit}, id){
      db.collection('tasks').doc({id:id}).delete().then(()=>{
        commit('deleteTask',id)
        commit('showSnackbar','Task Deleted !')
      })
    },
    updateTaskTitle({commit}, payload){
      db.collection('tasks').doc({id:payload.id}).update({
        title:payload.title
      }).then(()=>{
        commit('updateTaskTitle', payload)
        commit('showSnackbar','Task Updated !')
      })
    },
    updateTaskDueDate({commit}, payload){

      db.collection('tasks').doc({id:payload.id}).update({
        dueDate:payload.dueDate
      }).then(()=>{
        commit('updateTaskDueDate', payload)
        commit('showSnackbar','Due Date Updated !')
      })


    },
    setTasks({commit},tasks){
      db.collection('tasks').set(tasks)
      commit('setTasks',tasks)
    },
    getTasks({commit}){
      console.log('getTasks');
      db.collection('tasks').get().then(tasks =>{
        // console.log('task: ', tasks);
        commit('setTasks',tasks )
      })
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
