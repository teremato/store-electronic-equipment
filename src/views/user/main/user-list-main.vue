<template>
    <div class="user__page-list">

        <h3>Лента</h3>
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
                    <app-post-item :post="item" />
                </template>
            </transition-group>
        </div>
    </div>
</template>

<script>
import appReviewsField from '@/components/fields/app-reviews-field.vue'
import appPostItem from '@/components/blocks/app-post-item.vue'

export default {
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

            await this.$store.dispatch("createPost", formData)

                .then(({ post }) => {
                    this.$emit("add:post", post);
                })
                .catch((error) => console.log(error))
                .finally(() => {
                    
                    this.form.text = ""
                    this.form.photo = null
                })
        }
    },
    components: {
        appReviewsField,
        appPostItem
    },
}
</script>

<style lang="scss" scoped>

    .list-enter-active,
    .list-leave-active {
        transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }
    .user__page-list {
        width: 65%;

        h3 { margin-bottom: $sp_20; }

        .button-upload {
            @include btn-input;
            cursor: pointer;

            font-size: 30px;
            margin-right: $sp_10;
            transition: $transition;

            &:hover { color: $main_red; }
        }
        .photo_file {
            @include box-size(200px, auto);
        }
        #file_upload { display: none }

        &-content {
            margin-top: $sp_10;
        }
    }
</style>