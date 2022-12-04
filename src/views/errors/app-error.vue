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

<style src="@app-sass/pages/error.scss"
    lang="scss"
    scoped >

</style>
