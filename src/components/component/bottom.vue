<template>
  <div class="bottom">
    <p>
        <span>共 {{count}}件</span>
        <span>&nbsp&nbsp 总金额:<span class="price">{{totalmoney}}</span>元</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props:['count','totalmoney']
}
</script>

<style lang='less' scoped>
    .bottom{
      height: 1rem;
      background-color: #F4F4F4;
      position: fixed;
      bottom: 0;
      width: 7.2rem;
      padding-left: 0.3rem;
      font-size: 0.2rem;
      p{
        margin-top: 0.25rem
      }
    }
    .price{
      font-size: .4rem;
      color: #FF5722;
      margin-right: .2em;
    }
</style>
