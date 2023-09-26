<script>
import AppSingleCard from './AppSingleCard.vue';
export default {
    name: 'AppCardList',

    components:{
        AppSingleCard
    }
}
</script>

<template>
    <div class="card_list">

        <div class="found">
            Found X cards
        </div>

        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5">
            <AppSingleCard />
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.card_list {
    background-color: $yg_white;
    padding: 3rem;

    .found {
        background-color: $yg_dark;
        color: $yg_white;
        padding: 1rem;
    }
}
</style>