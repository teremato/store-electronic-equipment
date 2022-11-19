<template>
    <app-modal-container>
        <form class="login-form"
            :class="{ 'active': isOpen }" >

            <div class="login-form-header">
                <h2>Вход</h2>
                <button @click="closeModal">
                    Закрыть
                    <icon icon="x-lg"/>
                </button>
            </div>
            <div>
                <app-input v-model="form.email"
                    type="email"
                    placeholder="Введите вашу почту"
                    text="Почта" />
    
                <app-input v-model="form.password"
                    type="password"
                    placeholder="Введите пароль"
                    text="Пароль" />
            </div>

            <div class="login-form-actions">
                <div class="login-form-actions-register" 
                    @click="changeModal('app-modal-register')" >
                    
                    Нет аккаунта?Зарегистрируетесь
                </div>
                <button @click.prevent="login">
                    Войти
                </button>
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
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    mounted() {
        this.isOpen = true
    },
    methods: {
        async login() {
            await this.$store.dispatch('userLogin', this.form)
                .then(({ token }) => {
                    
                    localStorage.setItem('token', token)
                    this.closeModal();
                })
                
        }
    },
    components: {
        appModalContainer,
        appInput
    },
}
</script>

<style lang="scss" scoped>

    @include modal-create(0px, 60px);
    .login-form {
        @include box-shadow-default;
        @include box-size(400px, 500px);
        @include flex-vertical;
        justify-content: space-between;

        position: relative;

        padding: $sp_15;
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