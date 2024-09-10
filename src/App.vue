<template>
  <v-app id="inspire">
    <!-- naviagtion drawer starts -->

    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="768" app>
      <v-img class="pa-4 pt-5" height="200" src="./assets/mountains.png"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)">
        <v-avatar size="70" class="mb-2">
          <img :src="userPhotoURL" alt="Profile Image" />
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">
          {{ username }}
        </div>
        <div class="white--text text-subtitle-2">{{ email }}</div>
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

      <!-- Add Logout button at the bottom -->
      <v-spacer></v-spacer>
      <v-list-item v-if="isUserLoggedIn" @click="logout">
        <v-btn class="ma-2" color="primary">
        Logout
        <v-icon icon="mdi-logout" end></v-icon>
      </v-btn>
      </v-list-item>
    </v-navigation-drawer>

    <!-- naviagtion drawer ends -->

    <!-- NAV-BAR STARTS -->
    <v-app-bar app color="primary" height="200" dark prominent src="./assets/mountains.png">
      <!-- <v-app-bar
      app
      color="primary"
      dark
      prominent
      src="https://picsum.photos/1920/1080?random"
    > -->
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
      </template>

      <!-- grid starts -->
      <v-container class="header-container pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
        </v-row>
        <v-row>
          <v-app-bar-title class="text-h4 ml-4">{{
            $store.state.appTitle
          }}</v-app-bar-title>
        </v-row>
        <v-row>
          <live-date-time />
        </v-row>
        <v-row v-if="$route.path === '/'">
          <field-add-task />
        </v-row>
      </v-container>
      <!-- grid ends -->

      <search />

    </v-app-bar>
    <!-- NAV-BAR ENDS -->
    <v-main>
      <!-- If using vue-router -->
      <router-view></router-view>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

export default {
  data: () => ({
     drawer: null,
     items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
     }),

  data() {
    return {
      drawer: null,
      email: "",
      username: "",
      userPhotoURL: "https://via.placeholder.com/150",
      isUserLoggedIn: false, 
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
    };
  },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push("/login");
      }).catch((error) => {
        console.error("Logout error:", error.message);
      });
    },
  },
  components: {
    "field-add-task": require("@/components/Todo/FieldAddTask.vue").default,
    search: require("@/components/Tools/Search.vue").default,
    snackbar: require("@/components/Shared/Snackbar.vue").default,
    "live-date-time": require("@/components/Tools/LiveDateTime.vue").default,
  },
  computed: {
    appTitle() {
      return process.env.VUE_APP_TITLE;
    },
  },
  mounted() {
    this.$store.dispatch("getTasks");
    
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isUserLoggedIn = true; 
        this.email = user.email;
        this.username = user.email.substring(0, user.email.indexOf("@"));
        this.userPhotoURL = user.photoURL || this.userPhotoURL;
      } else {
        this.isUserLoggedIn = false; 
        this.email = "";
        this.username = "";
        this.userPhotoURL = "https://via.placeholder.com/150";
      }
    });
  },
};
</script>

<style lang="sass">
.header-container
  max-width: none important
</style>
