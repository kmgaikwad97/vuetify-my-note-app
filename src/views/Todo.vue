<template>
  <div class="home">
    <field-add-task />
    <list-task v-if="$store.state.tasks.length" />
    <no-task v-else />

    
  </div>
</template>

<script>
// import FieldAddTask from '@/components/Todo';
export default {
  name: "Home",
  components: {
    // 'field-add-task':FieldAddTask
    // child components
    "field-add-task": require("@/components/Todo/FieldAddTask.vue").default,
    "list-task": require("@/components/Todo/ListTasks.vue").default,
    "no-task": require("@/components/Todo/NoTasks.vue").default,
  },
};
</script>

