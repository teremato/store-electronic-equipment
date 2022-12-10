<template>
    <div class="user__page-list">

        <app-link-title title="Лента" 
            path="feed" />

        <app-reviews-field v-model="form.text"
            placeholder="Расскажите что нового..." 
            rows="7"
            @form:click="submitPost" >
            
            <template v-if="form.photo" #photo>
                <img :src="getPhotoUrl(form.photo)"
                    class="photo_file"
                    alt >
            </template>

            <template #upload>
                <label for="file_upload">

                    <icon icon="image" class="button-upload"/>
                </label>
                <input type="file"
                    id="file_upload"
                    @change="getPhoto" >

            </template>
        </app-reviews-field>
        <div class="user__page-list-content">

            <transition-group name="list" tag="div">

                <template v-for="(item, index) in posts" :key="index">
                    
                    <app-post-item :post="item"
                        @post:like="(event) => { this.changeLike(event, 'posts') }"
                        @post:favorite="(event => { this.changeFavorite(event, 'posts') })"
                        @post:remove="removePost" />

                </template>
            </transition-group>
        </div>
    </div>
</template>

<script>
import appReviewsField from '@components/fields/app-reviews-field.vue'
import appPostItem from '@components/blocks/app-post-item.vue'
import appLinkTitle from '@/components/use/app-link-title.vue'
import likesAndFavorites from '@mixins/likesAndFavorites'
import { CREATE_POST } from '@store/actions/posts-actions'
import { mapGetters } from 'vuex'

export default {
    mixins: [likesAndFavorites],
    props: {
        posts: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            form: {
                text: '',
                photo: null
            }
        }
    },
    methods: {
        getPhoto(event) {
            this.form.photo = event.target.files[0]
        },
        getPhotoUrl(photo) {
            return URL.createObjectURL(photo)
        },
        async submitPost() {
            
            const formData = new FormData();

            formData.append("text", this.form.text)
            formData.append("photo", this.form.photo)

            await this.$store.dispatch(CREATE_POST, formData)

                .then(({ message, post }) => {

                    this.$emit("add:post", post);
                    this.$notify({
                        type: "success",
                        title: message
                    })
                })
                .catch((error) => console.log(error))
                .finally(() => {
                    
                    this.form.text = ""
                    this.form.photo = null
                })
        },
        removePost(event) {
            this.$emit("remove:post", event);
        }
    },
    computed: {
        ...mapGetters({
            userId: "userId"
        })
    },
    components: {
        appReviewsField,
        appPostItem,
        appLinkTitle
    },
}
</script>

<style src="@app-sass/pages/user.scss" 
    lang="scss" 
    scoped >

</style>