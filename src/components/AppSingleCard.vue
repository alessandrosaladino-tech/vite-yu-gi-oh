<script>
import { state } from '../state.js';

export default {
    name: 'AppSingleCard',
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
    <div class="col" v-for="card in state.cards">

        <div class="card">

            <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">

            <div class="card-body">

                <div class="card-text">

                    <div>
                        {{ card.name }}
                    </div>

                    <div>
                        {{ card.archetype }}
                    </div>

                </div>


            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
.card-body {
    background-color: $yg_primary;
    height: 100px;

    .name {
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.9rem;
        text-align: center;

    }

    .archetype {
        text-align: center;
    }
}
</style>