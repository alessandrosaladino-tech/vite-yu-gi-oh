<script>
export default {
    name: 'AppReloader',

 
}
</script>

<template>
    <div class="d-flex justify-content-center mt-5">
        <div class="loader">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
.loader {
    border: 13px solid $yg_white;
    border-top: 13px solid $yg_primary;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 0.3s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>