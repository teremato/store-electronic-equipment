<template>
    <div class="app__error-wrapper">
        <div class="app__error">
            <div class="app__error-title">
                <h5>Ошибка</h5>
            </div>
            <div class="app__error-status">
                <h1>404</h1>
            </div>
            <div class="app__error-text">
                <p>
                    Страница не найдена
                </p>
                <div class="app__error-text-btn">
                    <router-link to="/">
                        Вернуться на главную
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-error"
}
</script>

<style lang="scss" scoped>
    .app__error-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        height: 75vh;
    }
    .app__error {
        @include flex-vertical;

        &-title {
            text-align: center;
            font-size: $font-size_l;
        }
        &-status {
            text-align: center;
            font-size: 60px;
        }
        &-text {
            text-align: center;

            p { margin-bottom: $sp_10; }
            &-btn {
                @include box-size(100%, 100%);
                padding: $sp_10;

                color: $white;
                background-color: $black;

                a { transition: $transition; }
                a:hover {
                    color: $main_red;
                }
            }
        }
    }
</style>
