<template>
  <v-app id="inspire">
    <!-- naviagtion drawer starts -->

    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="768" app>
      <v-img
        class="pa-4 pt-5"
        height="150"
        src="./assets/mountains.png"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
        <v-avatar size="70" class="mb-2">
          <img
            src="https://avatars.githubusercontent.com/u/97344369?v=4"
            alt="Kshitij Gaikwad"
          />
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">Kshitij Gaikwad</div>
        <div class="white--text text-subtitle-2">kmgaikwad97</div>
      </v-img>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- naviagtion drawer ends -->

    <!-- NAV-BAR STARTS -->
    <v-app-bar
      app
      color="primary"
      height="150"
      dark
      prominent
      src="./assets/mountains.png"
    >
      <!-- <v-app-bar
      app
      color="primary"
      dark
      prominent
      src="https://picsum.photos/1920/1080?random"
    > -->
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <!-- grid starts -->
      <v-container class="header-container pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
        </v-row>
        <v-row>
          <v-app-bar-title class="text-h4 ml-4"
            >{{$store.state.appTitle}}</v-app-bar-title
          >
        </v-row>
        <v-row>
          <live-date-time />
        </v-row>
      </v-container>
      <!-- grid ends -->

      <search />

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->

      <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
    </v-app-bar>
    <!-- NAV-BAR ENDS -->

    <v-main>
      <!--  -->
      <!-- If using vue-router -->
      <router-view></router-view>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
export default {
  // data: () => ({
  //    drawer: null,
  //    items: [
  //       { title: 'Dashboard', icon: 'mdi-view-dashboard' },
  //       { title: 'Photos', icon: 'mdi-image' },
  //       { title: 'About', icon: 'mdi-help-box' },
  //     ],
  //    }),

  data() {
    return {
      drawer: null,
      items: [
        {
          title: "Todo",
          icon: "mdi-format-list-checks",
          to: "/",
        },
        {
          title: "Photos",
          icon: "mdi-image-album",
          to: "/photos",
        },
        {
          title: "About",
          icon: "mdi-information-outline",
          to: "/about",
        },
        {
          title: "Axios",
          icon: "mdi-account-arrow-up",
          to: "/axios",
        },
      ],
      // right: null  ,
    };
  },
  components: {
    search: require("@/components/Tools/Search.vue").default,
    snackbar: require("@/components/Shared/Snackbar.vue").default,
    "live-date-time": require("@/components/Tools/LiveDateTime.vue").default,
  },
  computed:{
    appTitle(){
      return process.env.VUE_APP_TITLE
    }
  },
  mounted(){
    this.$store.dispatch('getTasks')
  },
};
</script>

<style lang="sass">
.header-container
  max-width:none important
</style>
