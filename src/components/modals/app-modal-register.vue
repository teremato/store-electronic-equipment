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
                <app-input v-model="form.name"
                    type="name"
                    placeholder="Придумайте имя"
                    text="Имя" />

                <app-input v-model="form.email"
                    type="email"
                    placeholder="Ваша почта"
                    text="Почта" />

                <app-input v-model="form.password"
                    type="password"
                    placeholder="Придумайте пароль"
                    text="Пароль" />
            </div>
            <div class="register-form-actions">
                <div class="register-form-actions-register"
                    @click="changeModal('app-modal-login')" >

                    Есть аккаунт?Войдите
                </div>
                <button @click.prevent="register">
                    Зарегистрироваться
                </button>
            </div>
        </form>
    </app-modal-container>
</template>

<script>
import appModalContainer from '@components/use/app-modal-container.vue';
import appInput from '@components/fields/app-input.vue';
import modal from '@mixins/modal.js'
import { USER_REGISTER } from '@store/actions/auth-actions';

export default {
    mixins: [modal],
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    mounted() {
        this.isOpen = true
    },
    methods: {
        async register() {
            await this.$store.dispatch(USER_REGISTER, this.form)
                .then(({ token }) => {

                    localStorage.setItem('token', token)
                    this.closeModal();
                })
        }
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