<template>
    <div class="user__page-main-top">
        <img src="" alt>
        <div class="main-top-info">
            <div class="main-top-info-name">
                <h2>{{ user.name }}</h2>
                <div>{{ user.email }}</div>
            </div>
            <div class="main-top-info-photos">
                <h3>Фотографии</h3>
                <div class="main-top-info-photos-list">

                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        user: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style lang="scss" scoped>
    .user__page-main-top {
        display: flex;
        gap: $sp_20;

        img { @include box-size(200px, 200px); }

        .main-top-info {
            @include flex-vertical;
            @include box-size(auto, 100%);
            justify-content: space-between;

            &-photos {
                &-list {
                    @include box-size(100px, 100%);
                    margin-top: $sp_5;
                    background-color: $black;
                }
            }
        }
    }
</style>