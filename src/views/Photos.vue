<template>
<div class="photos pa-6">
    <h1>This is Photos Page</h1>
    <v-row>
        <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
            <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`" :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" aspect-ratio="1" class="grey lighten-2">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-col>
    </v-row>
</div>
</template>

<script>
export default {
    data() {
        return {
            alignments: ["start", "center", "end"],
            img: [{
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
};
</script>

<style>
</style>
