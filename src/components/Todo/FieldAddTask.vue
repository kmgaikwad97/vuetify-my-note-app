<template>
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
  >
  
<!-- forms text-field starts -->
   <template v-slot:append>
              <v-icon
              @click="addTask"
              color="primary"
              :disabled="!newTaskTitle"
              >mdi-plus</v-icon>
            </template>
<!-- forms text-field starts -->
  

  </v-text-field>
</template>

<script>
export default {
  name: "FieldAddTask",
  data() {
    return {
      newTaskTitle: "",
    };
  },
  computed:{
    newTaskTitleInvalid(){
      return !this.newTaskTitle
    }
  },

  methods: {
    addTask() {
      if(!this.newTaskTitleInvalid){
        // this.$store.commit("addTask", this.newTaskTitle);
        this.$store.dispatch("addTask", this.newTaskTitle);
        this.newTaskTitle = "";
      }

    },
  },
};
</script>

<style>
</style>