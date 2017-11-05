/**
  * 判断赠品对应的商品是否被勾选
*/
function isparentChecked(procductlist,parentid){
    var checked = false;
    for(let item of procductlist){
        if(item.goodsId===parentid&&item.isdeleted===false){
            checked = item.sel_status ==='1'?true:false;
            break;
        }
    }
    return checked;
}
/**
* 过滤掉不该显示的商品，比如商品没有勾选，或者删除，则该商品对应的赠品不显示到购物车中
*/
function getShowList(procductlist){
  var showlist=[];
  procductlist.forEach(function(item){
      if(item.showType==='buy'&&item.isdeleted===false){
          showlist.push(item)
      }else if(item.showType==='gift'){
        if(isparentChecked(procductlist,item.parent_id)){
          showlist.push(item)
        }
      }
  })
  return showlist;
}
/**
  * 计算总价格  提取出真正购买的商品并计算价格，排除未勾选以及赠品价格
*/
function getTotalPrice(goodsList){
  var total=0;
  goodsList.forEach(function(item){
    if(item.showType==='buy'&&item.sel_status==='1'&&item.isdeleted===false){
      total+=(+item.price*item.num); //将字符串转为数字累加
    }
  });
  return total;
}
/**
* 有效商品个数(包含赠品)
*/
function getTotalCount(goodsList){
  var count = 0;
  goodsList.forEach(function(item){
    if(item.showType==='buy'&&item.sel_status==='1'&&item.isdeleted===false){
      count = count+item.num;
    }else if(item.showType==='gift'){
      if(isparentChecked(goodsList,item.parent_id)){
         count = count+item.num;
      }
    }
  });
  console.log(count)
  return count;
}
export {
  getShowList,
  isparentChecked,
  getTotalPrice,
  getTotalCount
};