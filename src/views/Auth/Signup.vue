<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title class="headline">Sign Up</v-card-title>
            <v-card-text>
              <v-form ref="signupForm" @submit.prevent="createUser">
                <v-text-field
                  label="Email"
                  v-model="email"
                  type="email"
                  required
                ></v-text-field>
                <v-text-field
                  label="Password"
                  v-model="password"
                  type="password"
                  required
                ></v-text-field>
  
                <v-btn color="primary" class="mr-4 mt-3" @click="createUser">
                  Sign Up
                </v-btn>
                <v-btn color="secondary" class="mt-3" @click="signUpWithGoogle">
                  Sign up with Google
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { auth, googleProvider } from "../../plugins/firebase.js";
  import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
        photoURL:"",
        name:""
      };
    },
    methods: {
      createUser() {
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
      signUpWithGoogle() {
        signInWithPopup(auth, googleProvider)
          .then((result) => {
            this.$router.push("/");
          })
          .catch((error) => {
            alert(error.message);
          });
      },
    },
  };
  </script>
  