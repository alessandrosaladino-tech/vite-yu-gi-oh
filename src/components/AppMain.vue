<script>
import AppSelect from './AppSelect.vue';
import AppCardList from './AppCardList.vue';
export default {
    name: "AppMain",
    components: {
        AppSelect,
        AppCardList,

    }
}
</script>

<template>
    <main>
        <div class="container">
            <AppSelect></AppSelect>

            <AppCardList></AppCardList>
        </div>
    </main>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

main {
    background-color: $yg_primary;
}
</style>