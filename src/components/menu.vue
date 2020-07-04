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
        // {
        //   checked: false,
        //   value: "智慧服务"
        // }
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
      this.$emit('switchPage')
      this.$router.push({ path: item.page });
    }
  }
};
</script>

<style scoped lang='less'>
.page-menu {
  border-bottom: 2px solid #eee;
  border-image: linear-gradient(to right, #051322, #fff, #263744) 60 20;
  padding: 10px 0px;
  color: #999;
  font-size: 30px;
  display: flex;
  justify-content: space-around;
  font-weight: 600;
  .menu-item {
    cursor: pointer;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
    padding: 0 20px;
    &.checked {
      color: rgb(88, 125, 209);
      // background-image: linear-gradient(to top, rgba(86, 111, 235, 0.616), rgba(96, 113, 202, 0.178));
    }
  }
}
</style>