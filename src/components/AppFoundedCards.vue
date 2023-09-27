<script>
import { state } from "../state.js"
export default {
    data(){
        return {
            state
        }
    }

}
</script>

<template>
    <div class="found">
        Found {{ state.cards.length }} cards
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
.found {
    background-color: $yg_dark;
    color: $yg_white;
    padding: 1rem;
}
</style>