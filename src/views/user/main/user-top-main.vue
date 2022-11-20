<template>
    <div class="user__page-main-top">
        <div class="main-top-photo">
            <img v-if="!checkUserAvatar" 
                src="@/assets/images/no-user-photo.png"
                alt >

            <img v-else :src="user.avatar" alt>

            <button @click="openChangePhotoModal('avatar')">
                <icon icon="camera"/>
                Обновить фото
            </button>
        </div>
        <div class="main-top-info">
            <div class="main-top-info-name">

                <h2>{{ user.name }}</h2>
                <div class="main-top-info-status">

                    <div v-if="user.status !== null && !isEdit"
                        class="status-default" >

                        <div class="status">
                            {{ user.status }}
                        </div>
                        <button class="status-default-btn"
                            @click="() => { this.isEdit = true }" >

                            Изменить
                        </button>
                    </div>
                    <div v-else class="status-change">

                        <input v-model="status" 
                            placeholder="Напишите ваш статус..."
                            @focus="() => { this.isEdit = true }"
                            @blur="() => { this.isEdit = false }"
                            type="text" >

                        <button class="status-change-btn"
                            @click="changeStatus" >

                            Сохранить
                        </button>
                    </div>
                </div>
            </div>
            <div class="main-top-info-photos">
                <div class="main-top-info-photos-header">

                    <h3>Фотографии</h3>

                    <button @click="openChangePhotoModal('media')">
                        Добавить фото
                    </button>
                </div>
                <div class="main-top-info-photos-list">
                    <template v-for="(item, index) in user.media" :key="index">
                        <img :src="item.image" alt>
                    </template>
                </div>
            </div>
        </div>

        <app-photo-upload-modal v-if="modal"
            :type="type"
            @modal:close="() => { this.modal = ''} "
            @change:avatar="changeAvatar"
            @change:photo="addUserPhoto" />

    </div>
</template>

<script>
import appPhotoUploadModal from "@/components/modals/app-photo-upload-modal.vue"


export default {
    props: {
        user: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            modal: "",
            type: "",
            isEdit: false,
            status: ""
        }
    },
    methods: {
        openChangePhotoModal(type) {
            this.modal = "avatar"
            this.type = type
        },
        changeAvatar(event) {
            this.$emit("upload:avatar", event)
        },
        addUserPhoto(event) {
            this.$emit("upload:photo", event)
        },
        async changeStatus() {

            await this.$store.dispatch("changeStatus", {
                status: this.status
            })
            .then((data) => {
                this.$emit("change:status", data)
            })
        },
    },
    computed: {
        checkUserAvatar() {
            return (this.user.avatar === null) ? false : true
        }
    },
    components: {
        appPhotoUploadModal
    }
}
</script>

<style lang="scss" scoped>
    .user__page-main-top {
        display: flex;
        gap: $sp_20;

        img { @include box-size(200px, 200px); }

        .main-top-photo {
            @include box-shadow-default;

            button {
                @include default-btn(5px, 10px);
                @include box-size(auto, 100%);
                gap: $sp_5;

                .bi { font-size: 25px; }
            }
        }

        .main-top-info {
            @include flex-vertical;
            @include box-size(auto, 100%);
            justify-content: space-between;

            &-status {


                .status-default,
                .status-change {
                    display: flex;
                    align-items: center;
                    gap: $sp_10;

                    input {
                        @include btn-input;
                        width: 100%;
                    }
                    button {
                        @include btn-input;
                        cursor: pointer;
                        transition: $transition;
    
                        &:hover { color: $main_red }
                    }

                    &-btn { display: none; }
                }
                &:hover {
                    .status-change-btn,
                    .status-default-btn {
                        display: block;
                    }
                }
                .status { width: 100%; }
            }

            &-photos {
                &-header {
                    @include flex-default;
                    justify-content: space-between;

                    button {
                        @include btn-input;
                        cursor: pointer;
                        transition: $transition;

                        &:hover { color: $main_red; }
                    }
                }
                &-list {
                    @include box-size(100px, 405px);
                    @include box-shadow-default;
                    display: flex;
                    justify-content: space-between;

                    margin-top: $sp_5;

                    overflow: hidden;

                    img { @include box-size(100px, auto); }
                }
            }
        }
    }
</style>