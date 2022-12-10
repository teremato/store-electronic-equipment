<template>
    <div class="user__page-games">
        <!-- <h3>Игры</h3> -->
        <app-link-title title="Игры"
            path="games'" />

        <div v-if="games.lengtn">

        </div>
        <app-empty-block v-else/>
    </div>
</template>

<script>
import AppEmptyBlock from '@components/blocks/app-empty-block.vue';
import appLinkTitle from '@/components/use/app-link-title.vue';
import { mapGetters } from 'vuex';

export default {
    props: {
        games: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        ...mapGetters({
            userId: "userId"
        })
    },
    components: {
        AppEmptyBlock,
        appLinkTitle
    }
}
</script>

<style src="@app-sass/pages/user.scss" 
    lang="scss" 
    scoped >
</style>