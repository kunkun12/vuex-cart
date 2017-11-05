<template>
  <li class="item">
  <div class="ui-box">
    <div :class="['choose',product.sel_status==='1'?'status-1':null,product.sel_status==='0'?'status-0':null]" @click='selectClick' />
    <div class="imgProduct">
      <img :src="product.image_url" />
    </div>
    <div class="info">
      <p class="name">
        <span class="ico_gift" v-if="product.showType==='gift'">赠品</span>
        <span>{{ product.product_name }}</span>
      </p>
      <div class="price">
        <p>
          <span>￥</span>
          <span>{{product.price}}</span>
          <span>小计:￥</span>
          <span>{{product.price*product.num}}</span>
        </p>
      </div>
      <div v-if='product.showType==="buy"' style="display:flex;align-items: center;">
        <InputNumber :add='addClick' :sub='subClick'  :limit='product.buy_limit' :num='product.num'/>
        <span @click='removeClick' class="deleteicon"></span>
      </div>
      
    </div>
  </div>
  </li>
</template>

<script>
import  InputNumber from './inputnumber';
export default {
  name: 'CartItem',
  props:['product'],
  components: {
    InputNumber
  },
  data () {
    return {
    }
  },
  methods:{
    selectClick(){
        this.$emit('selectchange',this.product.goodsId);
    },
    addClick(){
        this.$emit('productAdd',this.product.goodsId);
    },
    subClick(){
        this.$emit('productSub',this.product.goodsId);
    },
    removeClick(){
      this.$emit('removecartItem',this.product.goodsId);
    }
  }
}
</script>

<style scoped>

</style>
