<template>
  <page-wraper>
    <!-- 当input 的值为0是不展示 -->
    <view class="home">
      <view>值为0时不展示</view>
      <wd-form ref="form" :model="test">
        <wd-cell-group border>
          <wd-input prop="" v-model="test.num" label="数量" label-width="227rpx"></wd-input>
          <view>数量的值: {{ test.num }}</view>
        </wd-cell-group>
      </wd-form>

      <view class="py10">不为0才有值</view>

      <wd-form ref="form" :model="test1">
        <wd-cell-group border>
          <wd-input prop="" v-model="test1.num" label="数量" label-width="227rpx"></wd-input>
          <view>数量的值: {{ test1.num }}</view>
        </wd-cell-group>
      </wd-form>
    </view>
  </page-wraper>
</template>

<script lang="ts" setup>
const test = ref({})
setTimeout(() => {
  test.value = { num: 0 }
}, 100)

const test1 = ref({})
setTimeout(() => {
  test1.value = { num: 1 }
}, 100)
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  box-sizing: border-box;
  background: #fff;

  .home-header {
    .search {
      margin-bottom: 20rpx;
      :deep(.custom-search) {
        padding: 0;
      }
    }
  }
}
</style>
