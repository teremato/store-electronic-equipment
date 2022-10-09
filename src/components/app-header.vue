<template>
    <header class="header">
        <div class="container">

            <h1 class="header-logo">
                LOGO
            </h1>

            <div class="header-controller">
                <form @click.prevent="''" :class="{ 'active': form.focus }">
                    <input 
                        @focus="focus" 
                        @blur="blur"
                        placeholder="Поиск..."
                    >
                    <button>
                        <icon icon="search"/>
                    </button>
                </form>

                <div class="controler-buttons">
                    <button class="user_profile">
                        <icon icon="person-circle"/>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    props: {
        name: {
            type: String,
            default: () => {
                return 'app-header'
            }
        }
    },
    data() {
        return {
            form: {
                focus: false
            }
        }
    },
    methods: {
        focus() { this.form.focus = true; },
        blur() { this.form.focus = false }
    }
}

</script>

<style lang="scss" scoped>

.header {

    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;

    color: $white;
    background-color: $black;

    .container {

        @include flex-default;
        justify-content: space-between;

        margin: 0 auto;

        min-height: 40px;
        max-height: 60px;

        width: $default_app_container;
    }

    .bi {
        font-size: 25px;
        margin: 0px;
    }

    .header-controller {

        @include flex-default;
        gap: 20px;

        form {
            @include flex-default;
            gap: 5px;

            padding: 2px 10px;
            color: $white;

            input {
                @include btn-input;

                width: 100%;
                font-size: $font_size_m;
                color: $white;

                padding-bottom: 5px;
                border-bottom: 2px solid $white;

                transition: all .3s;

                &:focus { border-color: $main_red; }
                
                &::placeholder {
                    opacity: 60%;
                }
            }
            .bi { font-size: 20px; }
        }

        button {
            @include btn-input;
            cursor: pointer;

            color: $white;

            transition: all .2s;

            &:hover { color: $main_red }
        }
    }
}
</style>