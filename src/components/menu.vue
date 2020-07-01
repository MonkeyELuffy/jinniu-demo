<template>
  <div class="page-menu">
    <div
      class="menu-item"
      :class="{'checked': item.checked}"
      v-for="(item, index) in menuList"
      :key="index"
      @click="goPage(item)"
    >{{item.value}}</div>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      default: 0,
      required: true,
      type: Number
    }
  },
  data() {
    return {
      menuList: [
        {
          checked: true,
          value: "首页",
          page: "/"
        },
        {
          checked: false,
          value: "智慧治理",
          page: "/Page2"
        },
        {
          checked: false,
          value: "智慧服务"
        }
      ]
    };
  },
  mounted() {
    this.menuList.map((item, index) => {
      item.checked = index === this.currentPage;
      return item;
    });
  },
  methods: {
    goPage(item) {
      this.$router.push({ path: item.page });
    }
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
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
    &.checked {
      color: rgb(104, 133, 202);
    }
  }
}
</style>