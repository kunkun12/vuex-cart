<template>
  <div class="bottom">
   <span>共 {{count}}件</span>
   <span>&nbsp&nbsp 总金额:<span class="price">{{totalmoney}}</span>元</span>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props:['count','totalmoney']
}
</script>

<style scoped>
    .bottom{
      height: 1rem;
      background-color: #F4F4F4;
      position: fixed;
      bottom: 0;
      width: 7.2rem;
      display: flex;
      align-items: center;
      padding: 0.2rem
    }
    .price{
      font-size: .4rem;
      color: #FF5722;
      margin-right: .2em;
    }
</style>
