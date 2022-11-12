<template>
    <app-modal-container>
        <form class="register-form"
            :class="{ 'active': isOpen }" >

            <div class="register-form-header">
                <h2>Регистрация</h2>
                <button @click="closeModal">
                    Закрыть
                    <icon icon="x-lg"/>
                </button>
            </div>
            <div>
                <app-input type="name"
                    placeholder="Придумайте имя"
                    text="Имя" />

                <app-input type="email"
                    placeholder="Ваша почта"
                    text="Почта" />

                <app-input type="password"
                    placeholder="Придумайте пароль"
                    text="Пароль" />
            </div>
            <div class="register-form-actions">
                <div class="register-form-actions-register"
                    @click="changeModal('app-modal-login')" >

                    Есть аккаунт?Войдите
                </div>
                <button>Зарегистрироваться</button>
            </div>
        </form>
    </app-modal-container>
</template>

<script>
import appModalContainer from '@components/use/app-modal-container.vue';
import appInput from '@components/fields/app-input.vue';
import modal from '@mixins/modal.js'

export default {
    mixins: [modal],
    mounted() {
        this.isOpen = true
    },
    components: {
        appModalContainer,
        appInput
    }
}
</script>

<style lang="scss" scoped>

    @include modal-create(0px, 60px);
    .register-form {
        @include box-shadow-default;
        @include box-size(450px, 500px);
        @include flex-vertical;
        justify-content: space-between;

        position: relative;

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
            button { @include default-btn(40px, 10px); }
        }
    }
    .active { animation: modal-create .5s forwards; }

</style>