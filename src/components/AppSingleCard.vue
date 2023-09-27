<script>
import { state } from '../state.js';

export default {
    name: 'AppSingleCard',
    props: ["card"],
    data() {
        return {
            state
        }
    },
    created() {
        state.fetchData()
    }
}
</script>

<template>
    <div class="col mb-3 mt-2" >

        <div class="card">

            <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">

            <div class="card-body">

                <div class="card-text">

                    <div class="name">
                        {{ card.name }}
                    </div>

                    <div class="type">
                        {{ card.archetype }}
                    </div>

                </div>


            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


.name {
    color: $yg_white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.7rem;
    text-align: center;

}

.card-body {
    background-color: $yg_primary;
    height: 100px;

    .type {
        text-align: center;
    }
}
</style>