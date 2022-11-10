<template>
    <div>
        <h4>{{ text }}</h4>
        <input class="input"
            @focus="handleFocus"
            @blur="handleFocus"
            :class="{ 'active': isActive }"
            :type="type"
            :placeholder="placeholder" >
            
    </div>
</template>

<script>

export default {
    props: {
        type: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        handleFocus() {
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style lang="scss" scoped>
    .input {
        @include box-size(auto, 100%);
        @include btn-input;

        margin: $sp_15 0 ;
        padding-bottom: $sp_10;
        border-bottom: 2px solid $black;

        font-size: $font_size_m;
        
        transition: $transition;
    }
    .active {
        border-color: $main_red;
    }
</style>