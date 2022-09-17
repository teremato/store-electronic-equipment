<template>

  <header class="header">
    <div class="container">
      <div class="up-header">
        
        <div class="header-logo">vue equipment</div>
        <header-search/>

        <div class="header-controls">
          <BootstrapIcon icon="bag" size="md"/>
          <BootstrapIcon icon="heart" size="md"/>
          <BootstrapIcon icon="person-circle" size="md"/>
        </div>

      </div>

      <div class="bottom-header">
        <button class="header-category_btn">Все категории</button>
        <button class="header-category_btn">Apple</button>
        <button class="header-category_btn">Samsung</button>
        <button class="header-category_btn">Xiaomi</button>
        <button class="header-category_btn">Honor</button>
      </div>
      
    </div>
  </header>

</template>

<script>
import headerSearch from './header-search/header-search.vue'

export default {
    name: 'app-header',
    components: {
      ['header-search']: headerSearch
    }
}

</script>

<style lang="scss" scoped>
  @import "./app-header.scss";
</style>