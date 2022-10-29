<template>
    <div v-if="trigger"
         class="app__search-dropdown"
         :class="{'active': trigger}"
    >
        <ul class="app__search-dropdown-list"
            :class="{'no-search': !noSearch}"
        >
            <li v-if="items.length" class="app__search-dropdown-list-item">
            </li>

            <li>
                ничего не найдено :(
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "app-search-dropdown",
    props: {
        items: {
            type: Array,
            default: () => []
        },
        trigger: {
            type: Boolean,
            default: false
        }
    },
    mounted() {
        window.addEventListener('mousedown', (e) => {
            if(this.trigger) {
                if( !e.target.closest('.app__search-dropdown') ) {
                    this.$emit('modal:close', false)
                }
            }
        })
    },
    computed: {
        noSearch() {
            return (this.items.length > 0)
        }
    }
}
</script>

<style lang="scss" scoped>
    @include modal-create(50px, 65px);

    .app__search-dropdown {
        @include box-shadow-default;

        position: absolute;
        top: 50px;

        z-index: 999;

        color: $black;
        background-color: $white;

        &-list {
            @include box-size(300px, 250px);
            list-style: none;

            padding: $sp_15;
            font-size: $font_size_xs;
        }
    }
    .no-search {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .active {
        animation: modal-create .5s forwards;
    }
</style>
