<template>
    <div v-if="trigger"
         class="app__dropdown"
         :class="{'active': trigger}"
    >
        <ul class="app__dropdown-list">
            <li v-for="(item, index) in items" :key="index"
                class="app__dropdown-list-item"
            >
                <icon :icon="item.icon" />
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "app-dropdown-modal",
    props: {
        items: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            trigger: false
        }
    },
    mounted() {
        window.addEventListener('mousedown', (e) => this.close(e))
    },
    methods: {
        open() {
            this.trigger = true
        },
        close(e) {
            if(this.trigger) {
                if( !e.target.closest('.app__dropdown') ) {
                    this.trigger = false;
                }
            }
        }
    }
}

</script>

<style lang="scss" scoped>

    @include modal-create(50px, 60px);

    .app__dropdown {
        @include box-size(auto, max-content);
        @include icon(25px);
        @include box-shadow-default;

        position: absolute;
        right: 0;
        top: 50px;

        padding: $sp_15;

        z-index: 999;
        color: $black;
        background-color: $white;

        &-list {
            @include list-style(column, 10px);

            &-item {
                @include flex-default;
                gap: 5px;
                cursor: pointer;

                font-size: $font_size_xs;
                transition: $transition;

                &:hover { color: $main_red; }
            }
        }
    }
    .active {
        animation: modal-create .5s forwards;
    }
</style>
