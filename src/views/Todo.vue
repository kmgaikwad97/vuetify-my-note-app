<template>
  <div class="home">

    <field-add-task />

    <list-task v-if="$store.state.tasks.length" />

    <no-task v-else />

    <button-done-sorting v-if="$store.state.sorting" />
    
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {  
    "list-task": require("@/components/Todo/ListTasks.vue").default,
    "no-task": require("@/components/Todo/NoTasks.vue").default,
    "button-done-sorting": require("@/components/Todo/ButtonDoneSorting.vue").default,
  },
};
</script>

