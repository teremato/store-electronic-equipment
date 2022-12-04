<template>
    <div class="user__page-main-top">
        <div class="main-top-photo">
            <img v-if="!checkUserAvatar" 
                src="@/assets/images/no-user-photo.png"
                alt >

            <img v-else :src="user.avatar" alt>

            <button v-if="checkIsUserPage"
                @click="openChangePhotoModal('avatar')" >

                <icon icon="camera"/>
                Обновить фото
            </button>

            <div v-else class="main-top-photo-another-user">

                <button v-if="!user.is_friend" @click="addFriend">
                    <icon icon="person-plus"/>
                </button>
                    <button v-else @click="removeFriend">
                        <icon icon="person-x" />
                    </button>

                <button>
                    <icon icon="chat-right-text"/>
                </button>
            </div>
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
                        <button v-if="checkIsUserPage" 
                            class="status-default-btn"
                            @click="() => { this.isEdit = true }" >

                            Изменить
                        </button>
                    </div>
                    <div v-else-if="isEdit && checkIsUserPage"
                        class="status-change" >

                        <input v-model="status" 
                            placeholder="Напишите ваш статус..."
                            type="text" >

                        <button class="status-change-btn"
                            @click="changeStatus" >

                            Сохранить
                        </button>
                    </div>
                </div>
                <div class="main-top-info-bio">
                    <div v-if="user.country" >

                        <span>Страна:</span>
                        {{ user.country }}
                    </div>
                    <div v-if="user.favorite_game" >

                        <span>Любимая игра:</span>
                        {{ user.favorite_game }}
                    </div>
                </div>
            </div>
            <div class="main-top-info-photos">
                <div class="main-top-info-photos-header">

                    <h3>Фотографии</h3>
                    <button v-if="checkIsUserPage"
                        @click="openChangePhotoModal('media')" >

                        Добавить фото
                    </button>

                </div>
                <div v-if="user.media" 
                    class="main-top-info-photos-list"
                    :class="userPhotosClass" >

                    <template v-for="(item, index) in user.media" :key="index">
                        <div class="photo__item">

                            <img :src="item.image" alt>
                        </div>
                    </template>
                </div>
                <div v-else>
                    <app-empty-block label="У вас пока нету фотографий :(" />
                </div>
            </div>
        </div>

        <app-photo-upload-modal v-if="modal"
            :type="type"
            :user-id="userId"
            @modal:close="() => { this.modal = ''} "
            @change:avatar="changeAvatar"
            @change:photo="addUserPhoto" />

    </div>
</template>

<script>
import appPhotoUploadModal from "@/components/modals/app-photo-upload-modal.vue"
import appEmptyBlock from "@components/blocks/app-empty-block.vue" 
import { mapGetters } from 'vuex';


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
            
            if(this.user.media.length < 4) {
                this.$emit("upload:photo", event)
            }
        },
        async changeStatus() {

            await this.$store.dispatch("changeStatus", {
                status: this.status
            })
            .then(({ status }) => {

                this.$emit("change:status", status);
                this.isEdit = false;
            })
        },
        async addFriend() {

            await this.$store.dispatch("addFriend", { id: this.user.id })
                .then(() => {
                    this.$emit("user:add");
                })
                .catch((error) => { console.log(error) })
        },
        async removeFriend() {
            this.$emit("user:remove");
        }
    },
    computed: {
        ...mapGetters({
            userId: 'userId',
        }),
        userPhotosClass() {
            
            if(this.user.media) {
                
                let mediaLength = this.user.media.length
    
                switch(mediaLength) {
                    case 1:
                        return 'list_one'
                    case 2:
                        return 'list_two'
                    case 3: 
                        return 'list_three'
                    default:
                        return ''
                }
            }
            return '';
        },
        checkIsUserPage() {
            return (this.userId == this.$route.params.id) ? true : false
        },
        checkUserAvatar() {
            return (this.user.avatar === null) ? false : true
        }
    },
    components: {
        appPhotoUploadModal,
        appEmptyBlock
    }
}
</script>

<style lang="scss" scoped>
    .user__page-main-top {
        display: flex;
        gap: $sp_20;

        img { 
            @include box-size(200px, 200px);
            @include box-shadow-default;
        }

        .main-top-photo {

            button {
                @include default-btn(5px, 10px);
                @include box-size(auto, 100%);
                @include icon(25px);
                gap: $sp_5;
            }

            &-another-user {
                @include flex-default;
                justify-content: space-between;
                gap: $sp_10;

                button { @include default-btn(5px, 10px); }
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
                    .status-default-btn { display: block; }
                }
                .status {
                    font-size: $font_size_xs;
                    color: gray;
                    width: 100%; 
                }
            }

            &-bio {
                margin-top: $sp_10;
                font-size: $font_size_xs;
                
                span { color: gray }
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
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;

                    gap: $sp_5;
                    margin-top: $sp_5;
                    overflow: hidden;
                    .photo__item {
                        @include box-size(100px, auto);
                        cursor: pointer;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        overflow: hidden;
                        background-color: $black;
                        
                        img { @include box-size(135px, max-content); }
                    }
                }

                .list_one {
                    grid-template-columns: 1fr;
                    .photo__item {
                        @include box-size(300px, 100%);
                        img { @include box-size(auto, 100%); }
                    }
                }
                .list_two {
                    grid-template-columns: 1fr 1fr;
                }
                .list_three {
                    grid-template-columns: 1fr 1fr 1fr;
                }
            }
        }
    }
</style>