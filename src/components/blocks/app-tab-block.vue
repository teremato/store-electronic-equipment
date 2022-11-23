<template>
    <div class="tab__block">

        <template v-for="(item, index) in tabs" 
             :key="index" >

            <div @click="getFilter(item.filter)"
                class="tab__block-item"
                :class="{ 'active': item.filter === currentFilter }" >

                {{ item.name }}
            </div>
        </template>
    </div>
</template>

<script>

export default {
    props: {
        tabs: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            currentFilter: ''
        }
    },
    created() {
        this.getFilter(this.tabs[0].filter);
    },
    methods: {
        getFilter(filter) {
            this.currentFilter = filter
            this.$emit("change:filter", filter)
        }
    },
}
</script>

<style lang="scss" scoped>
    .tab__block {
        @include box-size(auto, 200px);
        @include flex-vertical;
        margin: $sp_15 0;

        &-item {
            cursor: pointer;
            font-size: $font_size_xs;
            padding: $sp_10 $sp_10;
            border-left: 2px solid $black;
        }
    }
    .active {
        border-bottom: 2px solid $black;

        color: $white;
        background-color: $black;
    }
</style>