<template>
  <div class="photos pa-6">
    <h1>This is Photos Page</h1>

    <v-row >
      <v-flex v-for="productd in product" :key="productd.id" cols="md-3" class="pa-3">
        <v-img
        
          :src="productd.image"
          max-height="100%"
          width="50%"
          :lazy-src="productd.image"
          aspect-ratio="1.5"
          contain
          class="grey lighten-2 pa-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-flex>
    </v-row>

    <!-- <v-app>
      <v-main>
        <v-container>
          <v-layout v-for="productd in product" :key="productd.id" row>
            <v-flex md-6>
              <img :src="productd.image" alt="" />
            </v-flex>
            <v-flex md-6>
              <img :src="productd.image" alt="" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
    </v-app> -->

    <!-- <div v-for="productd in product" :key="productd.id">
      <v-row>
        <v-col v-for="n in 1" :key="n" class="d-flex child-flex" cols="4">
          <v-img
            :src="productd.images[0]"
            :lazy-src="productd.images[0]"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </div> -->
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
    // const result = await axios.get("https://api.escuelajs.co/api/v1/products");
    const result = await axios.get("https://fakestoreapi.com/products/");
    console.log("data", result);
    this.product = result.data;
    // console.log(this.product);
  },
};
</script>

<style>
</style>
