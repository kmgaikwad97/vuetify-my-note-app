<template>
  <div class="photos pa-6">
    <h1>This is Photos Page</h1>

    <v-container class="pa-4 text-center">
      <v-row class="fill-height" align="center" justify="center">
        <template>
          <v-col
            v-for="item in product"
            :key="item.id"
            cols="12"
            lg="2"
            md="3"
            sm="4"
          >
            <v-img max-height="150" max-width="250" :src="item.image">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      product: "",
      alignments: ["start", "center", "end"],
      img: [
        {
          id: 1,
          imgSrc: "https://picsum.photos/id/11/500/300",
          lazySrc: "https://picsum.photos/id/11/10/6",
        },
        {
          id: 2,
          imgSrc: "https://picsum.photos/id/11/500/300",
          lazySrc: "https://picsum.photos/id/11/10/6",
        },
        {
          id: 3,
          imgSrc: "https://picsum.photos/id/11/500/300",
          lazySrc: "https://picsum.photos/id/11/10/6",
        },
        {
          id: 4,
          imgSrc: "https://picsum.photos/id/11/500/300",
          lazySrc: "https://picsum.photos/id/11/10/6",
        },
        {
          id: 5,
          imgSrc: "https://picsum.photos/id/11/500/300",
          lazySrc: "https://picsum.photos/id/11/10/6",
        },
        {
          id: 6,
          imgSrc: "https://picsum.photos/id/11/500/300",
          lazySrc: "https://picsum.photos/id/11/10/6",
        },
        {
          id: 7,
          imgSrc: "https://picsum.photos/id/11/500/300",
          lazySrc: "https://picsum.photos/id/11/10/6",
        },
        {
          id: 8,
          imgSrc: "https://picsum.photos/id/11/500/300",
          lazySrc: "https://picsum.photos/id/11/10/6",
        },
        {
          id: 9,
          imgSrc: "https://picsum.photos/id/11/500/300",
          lazySrc: "https://picsum.photos/id/11/10/6",
        },
        {
          id: 10,
          imgSrc: "https://picsum.photos/id/11/500/300",
          lazySrc: "https://picsum.photos/id/11/10/6",
        },
      ],
    };
  },
  async mounted() {

    const result = await axios.get("https://fakestoreapi.com/products/");
    this.product = result.data;
  },
};
</script>

<style>
</style>
