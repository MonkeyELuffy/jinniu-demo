<template>
    <div class="page-menu">
        <div class="menu-item" :class="{'checked': item.checked}" v-for="(item, index) in menuList" :key="index">{{item.value}}</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          checked: true,
          value: '首页',
        },
        {
          checked: false,
          value: '智慧治理',
        },
        {
          checked: false,
          value: '智慧服务',
        },
      ],
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped lang='less'>
    .page-menu {
      border-bottom: 2px solid #eee;
      border-image: linear-gradient(to right, #051322, #fff, #263744) 60 20;
      padding: 10px 20px;
      color: #eee;
      font-size: 30px;
      display: flex;
      justify-content: space-between;
      .menu-item {
        cursor: pointer;
        &.checked {
          color: rgb(104, 133, 202);
        }
      }
    }
</style>