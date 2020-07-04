<template>
  <div class="title-content">
    <div class="little-title">德源街道</div>
    <div class="line"></div>
    <div class="big-title">智享社区云平台</div>
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
      color: #ccc;
      font-weight: 600;
  background-color: rgba(28, 53, 83, 0.418);
  border-radius: 4px;
  padding-top: 10px;
    .little-title {
      font-size: 20px;
    }
    .line {
      width: 160px;
      height: 1.5px;
      margin-top: 12px;
      border-radius: 2px;
      background-image: linear-gradient(to right, #728ca8, #37393b, #728ca8);
    }
    .big-title {
      padding: 20px;
      font-size: 30px;
    }
  }
</style>