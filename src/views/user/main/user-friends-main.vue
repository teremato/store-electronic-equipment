<template>
    <div class="user__page-friends">

        <app-link-title title="Друзья"
            path="friends" >

            <template #subtitle>
                <span>{{ friends.length }}</span>
            </template>
        </app-link-title>

        <div v-if="friends.length" 
            class="user__page-friends-block" >

            <template v-for="(item, index) in friends" 
                :key="index" >

                <div class="friends-list-item">

                    <img v-if="item.avatar"
                        :src="item.avatar" alt >

                    <img v-else src="@/assets/images/no-user-photo.png"
                        class="no-image"
                        alt >

                    <router-link :to="`/user/${item.user_id}`">
                        {{ item.name }}
                    </router-link>
                </div>
            </template>
        </div>
        <div v-else>
            <app-empty-block label="У вас пока нет друзей :(" />
        </div>
    </div>
</template>

<script>
import appEmptyBlock from '@components/blocks/app-empty-block.vue';
import appLinkTitle from '@/components/use/app-link-title.vue';

export default {
    props: {
        friends: {
            type: Array,
            default: () => []
        }
    },
    components: {
        appEmptyBlock,
        appLinkTitle
    }
}
</script>

<style src="@app-sass/pages/user.scss" 
    lang="scss" 
    scoped >

</style>