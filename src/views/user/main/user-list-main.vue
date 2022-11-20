<template>
    <div class="user__page-list">

        <h3>Лента</h3>
        <app-reviews-field
            placeholder="Расскажите что нового..." 
            rows="7"
            @change:input="getInput"
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
    </div>
</template>

<script>
import appReviewsField from '@/components/fields/app-reviews-field.vue'


export default {
    data() {
        return {
            form: {
                text: '',
                photo: null
            }
        }
    },
    methods: {
        getInput(event) {
            this.form.text = event
        },
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
        }
    },
    components: {
        appReviewsField
    },
}
</script>

<style lang="scss" scoped>
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
    }
</style>