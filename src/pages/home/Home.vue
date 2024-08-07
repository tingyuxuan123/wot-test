<template>
  <view class="home">
    {{ isShow }}
    <wd-table :data="dataList">
      <wd-table-col prop="name" label="姓名" align="center"></wd-table-col>
      <wd-table-col prop="school" label="求学之所" align="center"></wd-table-col>
      <wd-table-col prop="major" label="专业" align="center"></wd-table-col>

      <wd-table-col prop="gender" label="性别" align="center"></wd-table-col>
      <wd-table-col prop="graduation" label="学成时间" align="center"></wd-table-col>
      <wd-table-col v-if="isShow" :width="160" prop="grade" label="成绩" align="center"></wd-table-col>
      <wd-table-col v-if="isShow" :width="160" prop="compare" label="比较" align="center"></wd-table-col>
      <wd-table-col prop="hobby" label="爱好"></wd-table-col>
    </wd-table>
  </view>
</template>

<script lang="ts" setup>
const dataList = ref<Record<string, any>[]>([
  {
    name: '张飞',
    school: '武汉市阳逻杀猪学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 56,
    compare: '10%',
    hobby: '燕人张飞在此！'
  },
  {
    name: '关羽',
    school: '武汉市阳逻绿豆学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 66,
    compare: '11%',
    hobby: '颜良文丑，以吾观之，如土鸡瓦犬耳。'
  },
  {
    name: '刘备',
    school: '武汉市阳逻编织学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 45,
    compare: '1%',
    hobby: '我得空明，如鱼得水也'
  },
  {
    name: '赵云',
    school: '武汉市阳逻妇幼保健学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 69,
    compare: '14%',
    hobby: '子龙，子龙，世无双'
  },
  {
    name: '孔明',
    school: '武汉市阳逻卧龙学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 88,
    compare: '21%',
    hobby: '兴汉讨贼，克复中原'
  },
  {
    name: '姜维',
    school: '武汉市阳逻停水停电技术学院',
    major: '计算机科学与技术专业',
    gender: '男',
    graduation: '2022年1月12日',
    grade: 87,
    compare: '32%',
    hobby: '我计不成，乃天命也！'
  }
])

const isShow = ref(false)

setTimeout(() => {
  isShow.value = true
}, 500)
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
