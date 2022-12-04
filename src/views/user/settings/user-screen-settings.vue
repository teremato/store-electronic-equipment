<template>
    <div class="user__page-settings">

        <div class="user__page-settings-container">

            <h2>Настройки</h2>
            <div class="user__page-settings-fields">

                <app-input v-model="form.name"
                    text="Имя"
                    placeholder="Напишите ваше имя..." />

                <app-input v-model="form.nickname"
                    text="Никнейм"
                    placeholder="Напишите ваш никнейм..." />

                <app-input v-model="form.country"
                    text="Страна"
                    placeholder="Укажите вашу страну..." />

                <app-input v-model="form.favorite_game"
                    text="Игра" 
                    placeholder="Укажите вашу любимую игру..." />
                    
            </div>
            <div class="user__page-settings-controller">

                <button>Отмена</button>
                <button @click="changeUserSettings">
                    Сохранить
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import appInput from '@components/fields/app-input.vue';
import {
    GET_USER_SETTINGS,
    UPDATE_USER_SETTINGS
} from '@store/actions/user-actions';

export default {
    data() {
        return {
            form: {
                name: '',
                username: '',
                country: '',
                favorite_game: '',
            }
        }
    },
    created() {
        this.getUserSettings();
    },
    methods: {
        async getUserSettings() {
            await this.$store.dispatch(GET_USER_SETTINGS)
                .then(({ data }) => {
                    this.form = data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        async changeUserSettings() {

            if(this.form.name !== '') {

                await this.$store.dispatch(UPDATE_USER_SETTINGS, this.form)
                    .then(() => {})
                    .catch((error) => console.log(error))
            }
        }
    },
    components: {
        appInput
    }
}
</script>

<style src="@app-sass/pages/user.scss"
    lang="scss" 
    scoped >
</style>