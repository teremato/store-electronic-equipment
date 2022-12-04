<template>
    <div class="user__page-games">
        <h3>Игры</h3>

        <div v-if="games.lengtn">

        </div>
        <app-empty-block v-else/>
    </div>
</template>

<script>
import AppEmptyBlock from '@components/blocks/app-empty-block.vue';

export default {
    props: {
        games: {
            type: Array,
            default: () => []
        }
    },
    components: {
        AppEmptyBlock
    }
}
</script>

<style src="@app-sass/pages/user.scss" 
    lang="scss" 
    scoped >
</style>