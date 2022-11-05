<template>
    <header class="header" ref="header">
        <div class="container">

            <router-link to="/">
                <h1 class="header-logo">VUESHOP</h1>
            </router-link>

            <div class="header-controller">
                <form class="header-controller-form"
                    :class="{ 'active': focus }" >

                    <input @focus="handleFocus"
                        placeholder="Поиск..." />

                    <button>
                        <icon icon="search"/>
                    </button>

                    <app-search-dropdown
                        :trigger="focus"
                        @modal:close="handleBlur" />

                </form>

                <div class="controller-buttons">
                    <button @click="() => this.$refs.userOption.open()"
                        class="user_profile"
                    >
                        <icon icon="person-circle"/>
                    </button>

                    <app-dropdown-modal ref="userOption"
                        :items="noAuthOption" />

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
import AppDropdownModal from "@components/modals/app-dropdown-modal";
import AppSearchDropdown from "@components/modals/app-search-dropdown";

export default {
    data() {
        return {
            focus: false,
            scrollArrow: false,
            noAuthOption: [
                { name: "Войти", icon: "box-arrow-in-right" },
                { name: "Зарегистрироваться", icon: "person-plus" }
            ],
            authOption: []

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
            this.focus = true;
        },
        handleBlur(event) {
            this.focus = event
        }
    },
    components: {
        AppSearchDropdown,
        AppDropdownModal,
        AppScroll
    },
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

                width: 250px;
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

        .controller-buttons { position: relative; }

        button {
            @include btn-input;
            cursor: pointer;

            color: $white;
            transition: $transition;

            &:hover { color: $main_red }
            &:focus { color: $main_red }
        }
    }
    .header-logo {
        transition: $transition;

        &:hover {
            color: $main_red;
        }
    }
}
</style>
