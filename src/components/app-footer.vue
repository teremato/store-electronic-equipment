<template>
    <footer>
        <div class="container">

            <div class="media">
                <a href="https://github.com/teremato/store-electronic-equipment">
                    <icon icon="github"/>
                </a>
                <a href="#">
                    <icon icon="mailbox"/>
                </a>
            </div>

            <!-- <div class="description">
                Пет-проект, написанный на Vue3
            </div> -->

        </div>
    </footer>
</template>

<script>

export default {

}

</script>

<style lang="scss" scope>
    footer {
        position: relative;
        bottom: 0;

        width: 100%;
        height: 100px;

        background-color: $black;
        color: $white;

        .container {
            display: flex;
            gap: 10px;

            padding: 10px;
            width: $default_app_container;
            margin: 0 auto;
        }

        .description {
            font-size: $font_size_xs;
        }

        .media {
            display: flex;
            justify-content: flex-end;
            gap: 5px;

            text-transform: uppercase;
            font-size: $font_size_xs;
            color: inherit;

            .bi { 
                font-size: 25px;
                margin-right: 10px;
            }

            a {
                transition: all .3s ease;

                &:hover { color: $main_red; }
            }
        }
        
    }
</style>