<template>
  <v-snackbar v-model="$store.state.snackbar.show" :timeout="$store.state.snackbar.timeout">
    {{ $store.state.snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn text v-bind="attrs" @click="$store.commit('hideSnackbar')">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {

};
</script>

<style>
</style>
