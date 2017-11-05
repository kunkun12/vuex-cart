import mockdata from './mockData';



//模拟异步返回
function getCartData(){
  return new Promise(function(resolve,reject){
    //模拟异步请求
    setTimeout(function(){
      resolve(mockdata)
    },200)
  })
}

export {getCartData}