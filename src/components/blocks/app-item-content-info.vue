<template>
    <div class="shop-item-content-info">

        <div class="info-status">
            <h3>Статус</h3>
            <ul class="info-status-container">
                <li>
                    <span>Дата выхода</span> 10 декабря 2021г.
                </li>
                <li>
                    <span>Наличие</span> есть.
                </li>
            </ul>
        </div>

        <div class="info-genres">
            <h3>Жанр</h3>
            <div class="info-genres-container">
                <button>
                    RPG
                </button>
                <button>
                    ACTION
                </button>
            </div>
        </div>
        
        <div class="info-settings">
            <h3>Системные требования</h3>

            <div class="info-settings-container">
                
                <div class="info-settings-item">
                    <div class="info-settings-item-title">
                        Операционная система
                    </div>
                    <div class="info-settings-item-value">Windows</div>
                </div>
                
                <div class="info-settings-item">
                    <div class="info-settings-item-title">Процессеор</div>
                    <div class="info-settings-item-value">AMD Ryzen 3 1200 / Intel Core i5-7500</div>
                </div>
    
                <div class="info-settings-item">
                    <div class="info-settings-item-title">Оперативная память</div>
                    <div class="info-settings-item-value">8 GB ОЗУ</div>
                </div>
    
                <div class="info-settings-item">
                    <div class="info-settings-item-title">Видеокарта</div>
                    <div class="info-settings-item-value">AMD Radeon RX 560 with 4GB VRAM / NVIDIA GeForce GTX 1050 Ti with 4GB VRAM</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'app-item-content-info'
}
</script>

<style lang="scss" scoped>
    .shop-item-content-info {

        h3 {
            font-size: $font_size_m;
            font-weight: 600;

            margin: $sp_10 0;
        }

        .info-genres {
            &-container {
                @include flex-default;
                flex-wrap: wrap;
                gap: $sp_5;

            }

            button { @include default-btn(30px, 10px); }
        }
        .info-status {
            &-container {
                @include list-style(column, $sp_5);
                padding: $sp_15;

                color: $white;
                background-color: $black;

                span {
                    color: $main_red;
                }
            }
        }
        .info-settings {
            &-container {

                padding: $sp_15;

                color: $white;
                background-color: $black;

                .info-settings-item {
                    &-title {
                        margin-bottom: $sp_5;

                        text-transform: uppercase;
                        color: $main_red;
                    }
                    &-value {
                        margin-bottom: $sp_10;
                    }
                }
            }
        }
    }
</style>