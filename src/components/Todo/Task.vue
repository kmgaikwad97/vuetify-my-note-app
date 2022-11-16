<template>
  <div>
    <v-list-item
      @click="$store.dispatch('doneTask', task.id)"
      :class="{ 'blue lighten-5': task.done }"
      class="white"
      :ripple="false"
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

        <!-- list - time -starts -->
        <v-list-item-action v-if="task.dueDate">
                <v-list-item-action-text>
                  <v-icon small>mdi-calendar</v-icon>
                  {{task.dueDate | niceDate  }}
                </v-list-item-action-text>
              </v-list-item-action>

        <!-- list - time -ends -->


        <!-- <v-list-item-action @click.stop="$store.dispatch('deleteTask', task.id)"> -->
        <v-list-item-action>
          <!-- <v-btn @click.stop="dialogs.delete = true" icon>
            <v-icon color="primary lighten-1">mdi-delete</v-icon>
          </v-btn> -->
          <task-menu :task="task"/>
        </v-list-item-action>


        <v-list-item-action
        v-if="$store.state.sorting"
        >
           <v-btn color="primary" class="handle" icon >
          <v-icon>mdi-drag</v-icon>
        </v-btn>
        </v-list-item-action>



      </template>
    </v-list-item>

    <v-divider></v-divider>

    <!-- <dialog-delete
      v-if="dialogs.delete"
      @close="dialogs.delete = false"
      :task="task"
    /> -->
  </div>
</template>

<script>
import { format } from 'date-fns'
export default {
  props: ["task"],
  filters:{
    niceDate(value){
      return format(new Date(value), 'MMM d')
    }
  },
  components: {
    "task-menu": require("@/components/Todo/TaskMenu.vue")
      .default
  },
};
</script>

<style>
.sortable-ghost{
  opacity: 0;
}
.sortable-drag{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
