<template>
    <app-modal-container>
        <div class="upload__form"
            :class="{'active' : isOpen}" >

            <div class="upload__form-header">
                <h2>Обновить фото профиля</h2>
                <button @click="closeModal">
                    Закрыть
                    <icon icon="x-lg"/>
                </button>
            </div>

            <div v-if="photo === null" class="upload__form-loader">
                <label for="file_upload">
                    <icon icon="image"/>
                </label>

                <input @change="getPhoto" type="file" id="file_upload">
            </div>

            <div v-else class="upload__form-photo">
                <div class="upload__form-photo-image">
                    <img :src="imageUrl(photo)" alt>
                </div>
                <div class="upload__form-photo-bottom">
                    <button @click="changePhoto">
                        Отменить
                    </button>
                    <button @click="uploadType">
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    </app-modal-container>
</template>

<script>
import appModalContainer from '@components/use/app-modal-container.vue';
import modal from '@/mixins/modal';
import { CHANGE_AVATAR } from '@store/actions/user-actions';
import { ADD_USER_MEDIA } from '@store/actions/media-actions';


export default {
    mixins: [modal],
    props: {
        type: {
            type: String,
            default: ""
        },
        userId: {
            type: [String, Number],
            default: ''
        }
    },
    data() {
        return {
            photo: null,
        }
    },
    mounted() {
        this.isOpen = true;
    },
    methods: {
        getPhoto(event) {
            this.photo = event.target.files[0]
        },
        imageUrl(photo) {
            return URL.createObjectURL(photo)
        },
        changePhoto() {
            this.photo = null
        },
        uploadType() {

            switch(this.type) {
                case "avatar":
                    this.confirmChangeImage();
                        break;
                case "media":
                    this.addMedia();
                        break;
            }
        },
        async confirmChangeImage() {

            const formData = new FormData();
            formData.append("photo", this.photo);

            await this.$store.dispatch(CHANGE_AVATAR, formData)
                .then((data) => {

                    this.$emit("change:avatar", data)
                })
                .finally(() => this.closeModal())
        },
        async addMedia() {

            const formData = new FormData();
            formData.append("photo", this.photo);

            await this.$store.dispatch(ADD_USER_MEDIA, {
                id: this.userId,
                photo: formData
            })
            .then(({ photo }) => {
                this.$emit("change:photo", photo)
            })
            .finally(() => this.closeModal())
        }
    },
    components: {
        appModalContainer
    }
}
</script>

<style lang="scss" scoped>

    @include modal-create(0px, 60px);
    .upload__form {
        @include box-size(500px, 600px);

        padding: $sp_15;
        background-color: $white;

        position: relative;
        overflow: hidden;

        &-header {
            @include flex-default;
            justify-content: space-between;
            margin-bottom: $sp_20;

            button {
                @include btn-input;
                cursor: pointer;
                transition: $transition;

                .bi { font-size: 22px }
                &:hover { color: $main_red; }
            }
        }
        &-loader {
            @include box-size(90%, 100%);

            label {
                @include box-size(100%, 100%);
                display: flex;
                align-items: center;
                justify-content: center;

                .bi {
                    cursor: pointer;
                    font-size: 100px;

                    transition: $transition;
                    &:hover { color: $main_red; }
                }
            }
            
            #file_upload { display: none; }
        }
        &-photo {
            @include box-size(420px, 100%);
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            &-image {
                display: flex;
                align-items: center;
                justify-content: center;

                overflow: hidden;
                img { @include box-size(350px, auto); }
            }
            &-bottom {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: $sp_10;
                
                button {
                    @include default-btn(20px, 5px);
                    font-size: $font_size_xs;
                }
            }
        }
    }
    .active { animation: modal-create .3s forwards; }
</style>