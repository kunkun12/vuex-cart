import Vue from 'vue';
import Vuex from 'vuex';
import {getCartData} from '../service/getCartData';
import {getShowList,getTotalPrice,getTotalCount} from './utils';
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    productList:[] //原始的数据
  },
  getters:{
    //过滤掉不该显示的商品，比如商品没有勾选，或者删除，则该商品对应的赠品不显示到购物车中
    showList(state){
      return getShowList(state.productList);
    },
    // 有效商品个数(包含赠品)
    count(state,getters){
     return getTotalCount(state.productList);
    },
    //总价格 提取出真正购买的商品 计算价格，排除未勾选以及赠品价格
    totalmoney(state,getters){
      return getTotalPrice(state.productList)
    }
  },
  mutations: {
    itemchecked(state,goodsid) {
     
      var goods = state.productList.find((item) => item.goodsId === goodsid);
      if(goods){
        goods.sel_status = goods.sel_status === '1' ? '0':'1';
      }else{
        console.log('商品不存在')
      }
    },
    itemNumAdd(state,goodsid){
      var goods = state.productList.find((item) => item.goodsId === goodsid);
      if(goods){
        if(goods.num < goods.buy_limit){
            goods.num++;
        }
      }
    },
    itemNumSub(state,goodsid){
      var goods = state.productList.find((item) => item.goodsId === goodsid);
      if(goods){
        if(goods.num > 1){
            goods.num--;
        }
      }
    },
    removeItem(state,goodsid){
      var goods = state.productList.find((item) => item.goodsId === goodsid);
      console.log(goods)
      goods.isdeleted = true; //标记为删除
    },
    receiveData(state,data){
      state.productList = data;
    }
  },
  actions:{
    productchecked(state,goodsid){
        state.commit('itemchecked',goodsid)
    },
    productNumAdd(state,goodsid){
         state.commit('itemNumAdd',goodsid)
    },
    productNumSub(state,goodsid){
         state.commit('itemNumSub',goodsid)
    },
    removeCartItem(state,goodsid){
      state.commit('removeItem',goodsid)
    },
    getData(state){
      getCartData().then(data => state.commit('receiveData',data) )
    }
  }
})

export default store;