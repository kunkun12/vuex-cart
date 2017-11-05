<template>
 <div  class="inputnumber" >
  <div :class='["inputsub",num>1&&num<=limit?"active":null]' @click="sub" >-</div>
  <div class="inputnum">
      <span>{{num}}</span>
  </div>
  <div :class='["inputadd",num<limit?"active":null]' @click="add">+</div>
</div>
</template>

<script>
/**
* 当 num 大于1 且小于等于 limit的时候 ，“减小”功能 不可用。背景色为浅灰色 ，“增加” 逻辑类似
*/
export default {
  name: 'InputNumber',
  props:['num','limit','add','sub']
}
</script>

<style lang='less'>
  .inputnumber{
    display: inline-block;
    border: 1px solid #eee;
    .inputsub,.inputadd{
      display: inline-block;
      width: .6rem;
      height: .6rem;
      position: relative;
      vertical-align: middle;
      background-color: #fafafa;
      line-height: 0.6rem;
      text-align: center;
      font-size: 0.4rem;
      color: #ddd;
      transition: background-color .3s linear 0s;
    }
    .active{
      background-color: #aaa;
    }
    .inputnum{
      vertical-align: middle;
      display: inline-block;
      min-width: .34rem;
      padding: 0 .12rem;
      height: .6rem;

      line-height: .6rem;
      text-align: center;
    }
}
</style>
