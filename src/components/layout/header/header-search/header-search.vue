<template>
    <form class="header-search" :class="{active: isInput}">

        <button class="header-search_btn">
            <BootstrapIcon icon="search" size="md"/>
        </button>
        
        <input
        @focus="isFocus"
        @blur="isNotFocus"
        placeholder="Поиск..."
        class="header-search_input"
        type="text"
        >

    </form>
</template>

<script>
export default {
    name: 'header-search',
    data() {
        return { isInput: false }
    },
    methods: {
        isFocus() { this.isInput = true; },
        isNotFocus() { this.isInput = false; }
    }
}
</script>

<style lang="scss" scoped>
    @import './header-search.scss'
</style>