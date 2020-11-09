<template>
  <div id="app">
    <div class="container-fluid p-0">
      <div class="d-flex">
        <Menu />
        <main class="container pt-4">
          <router-view/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style lang="scss">
  main {
    height: 100vh;
    overflow: auto;
    margin-right: 0 !important;
  }

  body {
    color:  rgb(140, 140, 140) !important;
  }
</style>
