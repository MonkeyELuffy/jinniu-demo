<template>
  <div class="monitor-content">
    <div class="common-title">{{title}}</div>
    <img :src="img" alt class="monitor-img common-border" />
    <div class="little-title">{{littleTitle}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "监控画面",
      required: true,
      type: String
    },
    littleTitle: {
      default: "",
      required: true,
      type: String
    },
    img: {
      default: "",
      required: true,
      type: String
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang='less'>
.monitor-content {
  position: relative;
  .monitor-img {
    width: 25vw;
    height: 25vh;
  }
  .little-title {
      position: absolute;
      padding: 0 10px 0 40px;
      right: 0px;
      bottom: 10px;
      background-image: linear-gradient(to left, rgba(12, 11, 11, 0.63), rgba(29, 24, 24, 0.397), rgba(161, 154, 154, 0))
  }
}
</style>