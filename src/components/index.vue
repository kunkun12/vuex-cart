<template>
  <div class="cart-container">
    <ul>
      <CartItem
            v-for='product in showList'
            @selectchange='selectchange'
            :key='product.goodsId'
            :product='product' 
            @productAdd='productNumAdd'
            @productSub='productNumSub'
            @removecartItem='removeCartItem'
            />
    </ul>
    <Bottom :count='count' :totalmoney='totalmoney'/>
  </div>
</template>

<script>
import CartItem from './component/cartItem';
import Bottom from './component/bottom';
import { mapState,mapGetters } from 'vuex';
import  "./cart.less";
/**
*  product 数据个字段含义
*{
*    "buy_limit", 商品能购买的最大限制
*    "goodsId", 商品唯一id
*    "image_url", 图片链接
*    "num": 1,  购买个数
*    "price", 价格
*    "product_name" 商品名称
*    "sel_status", 选中状态: 0-未选中, 1:选中 
*    "showType" 购买类型：buy-正常商品， gift-赠品
*    "parent_id" 只有赠品具有这个字段，该赠品对应正常购买的商品 goodsId
*}
*/
export default {
  name: 'Cart',
  data () {
    return {
    }
  },
  components: { CartItem,Bottom },
  computed:{
    ...mapState(
      ['productList']
    ),
    ...mapGetters(['showList','count','totalmoney'])
  },
  created(){
      this.$store.dispatch('getData')
   },
  methods:{
    selectchange(id){
       this.$store.dispatch('productchecked',id)
    },
    productNumSub(id){
       this.$store.dispatch('productNumSub',id)
     },
    productNumAdd(id){
       this.$store.dispatch('productNumAdd',id)
    },
    removeCartItem(id){
       this.$store.dispatch('removeCartItem',id)
    }
  }
}
</script>

<style >

</style>
