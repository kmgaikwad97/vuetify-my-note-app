<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="headline">Login</v-card-title>
          <v-card-text>
            <v-form ref="loginForm" @submit.prevent="signinUser">
              <v-text-field label="Email" v-model="email" type="email" required></v-text-field>
              <v-text-field label="Password" v-model="password" type="password" required></v-text-field>
              <v-btn color="primary" @click="signinUser">Login</v-btn>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <!-- Add a link to the signup page -->
            <v-row justify="center" class="mt-2">
              <v-col cols="12" class="text-center">
                <p>Don't have an account?</p>
                <v-btn text @click="goToSignup" color="secondary">
                  Sign up here
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { auth, googleProvider } from "../../plugins/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signinUser() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    goToSignup() {
      this.$router.push("/signup");
    },
  },
};
</script>
