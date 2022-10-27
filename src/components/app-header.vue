<template>
    <header class="header" ref="header">
        <div class="container">

            <h1 class="header-logo">LOGO</h1>

            <div class="header-controller">
                <form @click.prevent="''" :class="{ 'active': focus }">
                    <input
                        @focus="handleFocus"
                        @blur="handleFocus"
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

    <app-scroll
        :target="$refs.header"
        :vision="!scrollArrow"
    />

</template>

<script>
import AppScroll from "@components/use/app-scroll";

export default {
    components: { AppScroll },
    data() {
        return {
            focus: false,
            scrollArrow: false
        }
    },
    mounted() {

        const callback = (entries) => {
            this.scrollArrow = (!entries[0].isIntersecting)
        }

        const observer = new IntersectionObserver(callback, {
            rootMargin: '0px',
            threshold: 1.0
        })

        observer.observe(this.$refs.header)
    },
    methods: {
        handleFocus() {
            this.focus = !this.focus;
        },
        scrollVision(event) {
            this.scrollArrow = event
        }
    }
}

</script>

<style lang="scss" scoped>

.header {

    width: 100%;
    padding-top: $sp_10;
    padding-bottom: $sp_10;

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
        margin: 0;
    }

    .header-controller {

        @include flex-default;
        gap: 20px;

        form {
            @include flex-default;
            gap: 5px;

            padding: 2px $sp_10;
            color: $white;

            input {
                @include btn-input;

                width: 100%;
                font-size: $font_size_m;
                color: $white;

                padding-bottom: $sp_5;
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

            transition: $transition;

            &:hover { color: $main_red }
        }
    }
}
</style>
