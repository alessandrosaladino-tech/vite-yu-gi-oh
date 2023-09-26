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
    <div class="col">

        <div class="card">

            <img :src="state.cardImage" class="card-img-top" alt="...">

            <div class="card-body">

                <div class="card-text">

                    <div>
                        {{ state.cardName }}
                    </div>

                    <div>
                        {{ state.CardArchetype }}
                    </div>

                </div>


            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped></style>