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
import { GET_USER_MEDIA } from '@store/actions/media-actions';


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
            
            await this.$store.dispatch(GET_USER_MEDIA, {
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

<style src="@app-sass/pages/user.scss" 
    lang="scss" 
    scoped >
</style>