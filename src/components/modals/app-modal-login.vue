<template>
    <app-modal-container>
        <form class="login-form">

            <div class="login-form-header">
                <h2>Вход</h2>
                <button>
                    Закрыть
                    <icon icon="x-lg"/>
                </button>
            </div>

            <div>

                <app-input type="email"
                    placeholder="Введите вашу почту"
                    text="Почта" />
    
                <app-input type="password"
                    placeholder="Введите пароль"
                    text="Пароль" />
            </div>

            <div class="login-form-actions">
                <div class="login-form-actions-register">
                    Нет аккаунта?Зарегистрируетесь
                </div>
                <button>Войти</button>
            </div>
        </form>
    </app-modal-container>
</template>

<script>
import appModalContainer from '@components/use/app-modal-container.vue';
import appInput from '@components/use/app-input.vue' 

export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        openModal() {
            this.isOpen = true
        },
        closeModal() {
            this.isOpen = false
        }
    },
    components: {
        appModalContainer,
        appInput
    },
}
</script>

<style lang="scss" scoped>
    .login-form {
        @include box-shadow-default;
        @include box-size(400px, 500px);
        @include flex-vertical;
        justify-content: space-between;

        padding: 15px;
        background-color: white;

        &-header {
            @include flex-default;
            justify-content: space-between;

            button {
                @include btn-input;
                cursor: pointer;
                transition: $transition;

                .bi { font-size: 22px }
                &:hover { color: $main_red; }
            }
        }
        &-actions {
            @include flex-default;
            justify-content: space-between;

            &-register {
                cursor: pointer;
                font-size: $font_size_xs;
                transition: $transition;

                &:hover { color: $main_red; }
            } 
            button {
                @include default-btn(40px, 10px);
            }
        }
    }
</style>