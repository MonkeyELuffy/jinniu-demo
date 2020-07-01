<template>
  <div class="title-content">
    <div class="little-title">德源街道</div>
    <div class="line"></div>
    <div class="title">智享社区云平台</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped lang='less'>

  .title-content {
    margin-top: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    .little-title {
      color: #eee;
      font-size: 20px;
    }
    .line {
      width: 160px;
      height: 1.5px;
      margin-top: 12px;
      border-radius: 2px;
      background-image: linear-gradient(to right, #728ca8, #37393b, #728ca8);
    }
    .title {
      padding: 20px;
      color: #eee;
      font-size: 30px;
    }
  }
</style>