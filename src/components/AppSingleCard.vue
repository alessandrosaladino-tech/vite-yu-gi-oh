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
                        {{ state.name }}
                    </div>

                    <div>
                        {{ state.archetype }}
                    </div>

                </div>


            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped></style>