<template>
    <div class="user__games-page">

        <div class="user__games-page-container">

            <div class="user__games-page-list">
                
                <h2>Игры</h2>

                <template>

                </template>
            </div>

            <appTabBlock :tabs="tabs" />
        </div>
    </div>
</template>

<script>
import appTabBlock from '@/components/blocks/app-tab-block.vue';

export default {
    data() {
        return {
            games: [],
            favoriteGames: [],
            tabs: [
                { name: "Все Игры", filter: "all" },
                { name: "В желаемом", filter: "favorite" },
            ],
        }
    },
    components: {
        appTabBlock
    }
}
</script>

<style src="@app-sass/pages/user.scss"
    lang="scss"
    scoped >

</style>