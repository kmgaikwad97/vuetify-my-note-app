<template>
  <div class="home">
    <v-text-field
    v-model="newTaskTitle"
    @click:append="addTask" 
    @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Add Task"
      append-icon="mdi-plus-circle"
      hide-details
      clearable
    ></v-text-field>

    <v-list v-if="$store.state.tasks.length" flat class="pt-0">
      <div v-for="task in $store.state.tasks" :key="task.id">
        <v-list-item
          @click="$store.commit('doneTask',task.id)"
          :class="{ 'blue lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
                >{{ task.title }}</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action @click.stop="$store.commit('deleteTask',task.id)">
              <v-btn icon>
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      newTaskTitle:"",
    };
  },

  methods: {
    // addTask(){
    //   console.log("addtask");
    //   let newTask = {
    //     id: Date.now(),
    //     title: this.newTaskTitle,
    //     done:false
    //   }
    //   this.tasks.push(newTask);
    //   this.newTaskTitle = ""
    // },
      // doneTask(id) {
      //   console.log("data", id);
      //   let task = this.tasks.filter((task) => task.id === id)[0];
      //   task.done = !task.done;
      // },
      // deleteTask(id) {
      //   console.log("data", id);
      //   this.tasks = this.tasks.filter((task) => task.id !== id);
      //   console.log("asdf", this.tasks);
      // },
    addTask(){
      this.$store.commit('addTask', this.newTaskTitle)
      this.newTaskTitle=""
    },
  },
};
</script>
