<template>
    <form class="reviews-field"
        :class="{'active': focus}" >

        <textarea v-model="text" ref="textarea"
            @change="input"
            @focus="handleFocus"
            @blur="handleBlur"
            :class="{ 'resize': !resize }"
            :style="{height: isFocusRows + 'px'}"
            :placeholder="placeholder"
            :cols="cols"
            :maxlength="maxlength"
            class="text-form"
            type="text"
            wrap="hard" >
            
        </textarea>

        <div class="text-form-buttons">
            <button>
                Отправить
            </button>
        </div>
    </form>
</template>

<script>

export default {
    name: "app-reviews-field",
    
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        cols: {
            type: [String, Number],
            default: 1
        },
        rows: {
            type: [String, Number],
            default: 1
        },
        resize: {
            type: Boolean,
            default: false
        },
        maxlength: {
            type: [String, Number],
            default: 250
        }
    },
    data() {
        return {
            text: '',
            focus: false,
            height: 16
        }
    },
    methods: {
        input() {
            this.$emit('change:input', this.text)
        },
        handleFocus() {
            this.focus = true;
        },
        handleBlur() {
            this.height = 16
            this.focus = false;
        }
    },
    computed: {
        isFocusRows() {
            return (this.focus) ? this.height * this.rows : this.height
        }
    }
}

</script>

<style lang="scss" scoped>
    .reviews-field {
        padding-bottom: $sp_10;
        border-bottom: 2px solid $black;

        transition: $transition;

        .text-form {
            @include btn-input;
            @include box-size(100%, 100%);

            font-size: 15px;
            font-weight: 500;

            transition: $transition;
            overflow-y: hidden;

            &-buttons {
                display: none;
                justify-content: end;

                button { @include default-btn(30px, 10px); }
            }
        }
        .resize {
            resize: none;
        }
    }
    .active {
        border-bottom: 2px solid $main_red;
        .text-form-buttons {
            display: flex;
        }
    }
</style>