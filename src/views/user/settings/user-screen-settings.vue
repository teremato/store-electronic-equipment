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
            await this.$store.dispatch("getUserSettings")
                .then(({ data }) => {
                    this.form = data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        async changeUserSettings() {

            if(this.form.name !== '') {

                await this.$store.dispatch("updateUserSettings", this.form)
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

<style lang="scss" scoped>
    .user__page-settings {
        @include box-size(auto, 100%);

        h2 { margin-bottom: $sp_20; }
        &-fields {
            @include box-size(auto, 50%);
        }
        &-controller {
            @include flex-default;
            gap: $sp_10;

            button {
                @include default-btn(10px, 10px);
            }
        }
    }
</style>