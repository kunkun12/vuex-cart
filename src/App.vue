<template>
  <div id="app">
    <Cart/>
  </div>
</template>

<script>
import Cart from './components'

export default {
  name: 'app',
  components: {
    Cart:Cart
  }
}
</script>

<style>
#app {
  margin: 0 auto;
  width: 7.2rem;
}
</style>
