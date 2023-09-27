<script>
import { state } from "../state"
import AppSelect from "./AppSelect.vue";
import AppCardList from "./AppCardList.vue";
export default {
    name: "AppMain",
    components: {
        AppSelect,
        AppCardList,

    },

    data() {
        return {
            state
        }
    },

    methods: {
        searchArchetype() {
            const urlArchetype = this.state.base_url + `&archetype=${this.state.archetypeName}`
            this.state.fetchData(urlArchetype)
            console.log(this.state.archetypeName, urlArchetype);
        }
    },

    created() {

        state.fetchData(this.state.base_url);
        state.fetchDataArchetypes(this.state.archetype_url)
    },
}
</script>

<template>
    <main>
        <div class="container">
            <AppSelect @search-by-archetype="searchArchetype"></AppSelect>

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