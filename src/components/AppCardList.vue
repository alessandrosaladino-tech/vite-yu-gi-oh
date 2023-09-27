<script>
import AppSingleCard from './AppSingleCard.vue';
import AppReloader from './AppReloader.vue';
import AppFoundedCards from './AppFoundedCards.vue';
import { state } from '../state.js';
export default {
    name: 'AppCardList',

    data() {
        return {
            state
        }
    },

    created() {
        state.fetchData(this.state.base_url);
    },


    components: {
        AppSingleCard,
        AppReloader,
        AppFoundedCards,
    }
}
</script>

<template>
    <div class="card_list">

        <AppFoundedCards/>

        <AppReloader v-if="state.status"></AppReloader>
        <div v-else class="row row-cols-2 row-cols-md-3 row-cols-lg-5">
            <AppSingleCard :card="card" v-for="card in state.cards"></AppSingleCard>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.card_list {
    background-color: $yg_white;
    padding: 3rem;
}
</style>