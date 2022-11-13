<template>
    
    <div class="layout">
        <app-header ref="app-header" />

        <component :is="layout">
            <router-view  :key="$route"/>
        </component>
        
        <app-footer />
    </div>
</template>

<script>
import appDefaultLayout from '@/layouts/default.vue'
import appUserLaypot from '@/layouts/user.vue'

export default {
    name: 'app',
    async created() {

        const token = localStorage.getItem('token');

        await this.$store.dispatch('getUser', token)
    },
    computed: {
        layout() {
            const layout = this.$route.meta.layout

            switch(layout) {
                case "app-default-layout":
                    return appDefaultLayout
                case "app-user-layout":
                    return appUserLaypot
                default: 
                    return appDefaultLayout
            }
        }
    },
    components: {
        appDefaultLayout,
        appUserLaypot
    }
}
</script>

<style lang="scss">
    @import '@/assets/scss/main.scss';

    .layout {
        position: relative;
        min-height: 100vh;

        padding-bottom: 100px;
        transition: $transition;
    }
</style>
