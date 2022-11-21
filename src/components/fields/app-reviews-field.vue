<template>
    <form class="reviews-field"
        :class="{'active': focus}" >

        <textarea v-model="text"
            @change="input"
            @focus="handleFocus"
            :class="{ 'resize': !resize }"
            :style="{height: isFocusRows + 'px'}"
            :placeholder="placeholder"
            :cols="cols"
            :maxlength="maxlength"
            class="text-form"
            type="text"
            wrap="hard" >
            
        </textarea>
        <slot v-if="focus"
            name="photo" >
        </slot>
        <div class="text-form-buttons">
            <slot name="upload"></slot>
            <button @click.prevent="submitForm"> 
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
    mounted() {
        window.addEventListener('mousedown', (e) => this.handleBlur(e));
    },
    methods: {
        input(event) {
            this.$emit('update:modelValue', event.target.value)
        },
        handleFocus() {
            this.focus = true;
        },
        handleBlur(event) {
            if( !event.target.closest('.reviews-field') ) {
                this.focus = false;
            }
        },
        submitForm() {
            this.$emit("form:click");
            this.text = '';
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
            align-items: center;
            
            margin-top: $sp_5;
        }
    }
</style>