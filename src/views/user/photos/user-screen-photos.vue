<template>
    <div class="user__page-photos">

        <div class="user__page-photos-container">

            <div class="user__page-photos-header">
                <h2>Фото</h2>
                <span>Фотографии: {{ photos.length }}</span>
            </div>
            <div class="user__page-photos-list">

                <template v-for="(item, index) in photos" 
                    :key="index" >

                    <div class="photo-item">
                        <img :src="item.image" alt>
                    </div>
                </template>
            </div>
        </div>
        <div ref="observer"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
    data() {
        return {
            photos: []
        }
    },
    created() {
        this.getUserPhotos();
    },
    methods: {
        async getUserPhotos() {
            await this.$store.dispatch("getUserMedia", {
                id: this.$route.params.id
            })
            .then(({ data }) => {

                this.photos = data
            }).catch((error) => console.log(error))
        }
    },
    computed: {
        ...mapGetters({
            userId: "userId"
        })
    }
}
</script>

<style lang="scss" scoped>
    .user__page-photos {
        @include box-size(auto, 100%);

        &-header {
            @include flex-default;
            justify-content: space-between;
            margin-bottom: $sp_20;

            span {
                font-size: $font_size_xs;
                color: gray;
            }
        }
        &-list {
            display: grid;
            grid-template-columns: auto auto auto;
            grid-template-rows: auto auto auto;

            row-gap: $sp_10;
            column-gap: $sp_10;

            .photo-item {
                @include box-size(150px, auto);
                @include flex-default;
                justify-content: center;

                cursor: pointer;
                overflow: hidden;
                background-color: $black;

                img { @include box-size(inherit, auto); }
            }
        }
    }
</style>