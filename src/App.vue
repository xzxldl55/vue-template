<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png">
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import url(../static/style/reset.scss);
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    header {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  }
</style>
