<template>
  <v-list flat class="pt-0">
    <draggable
     v-model="tasks"
      class="list-group"
      handle=".handle"

    >
      <task
        :task="task"
        v-for="task in tasks"
        :key="task.id"
      />
    </draggable>
  </v-list>
</template>

<script>
import draggable from "../../../node_modules/vuedraggable/dist/vuedraggable.common.js";
export default {
  components: {
    task: require("@/components/Todo/Task.vue").default,
    draggable,
  },
  computed: {
    tasks: {
        get() {
            return this.$store.getters.tasksFiltered 
        },
        set(value) {
            this.$store.dispatch('setTasks', value)
        }
    }
}
};
</script>

<style>
</style>
