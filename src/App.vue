<template>
    
    <div class="layout">
        
        <app-header />
            <router-view />
        <app-footer />

        <notifications position="bottom right" />
    </div>
</template>

<script>
import { GET_USER } from '@store/actions/user-actions';


export default {
    name: 'app',
    async created() {

        const token = localStorage.getItem('token');

        await this.$store.dispatch(GET_USER, token)
    },
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
