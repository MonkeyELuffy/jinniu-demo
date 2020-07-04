<template>
  <div v-show="isShowModel" class="content">
    <img v-show="isShowClose" @click="close" src="../assets/close.png" class="close-icon" />
    <iframe :src="cuttentModel.url" frameborder="0" width="100%" height="100%"></iframe>
    <div class="serve-list">
      <div class="title">服务类目 / 预约状态</div>
      <div class="list-content">
        <div class="item" v-for="(item, index) in serveList" :key="index">
          <div class="text">
            {{item.name}}
            <span>{{item.num}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 2356,
          url: "http://www.4dage.com/SuperPanoramic/index4.html?m=238"
        },
        {
          id: 2223,
          url: "https://www.4dkankan.com/other/4dkankanGe/showApp.html?m=X99yIvTq&app=&from=singlemessage&isappinstalled=0"
        },
        {
          id: 2368,
          url: "https://www.4dkankan.com/showProPC.html?m=5xsiy68N"
        },
        {
          id: 2264,
          url: "https://www.4dkankan.com/showProPC.html?m=SuoDdK2Zn"
        },
        {
          id: 2265,
          url: "https://www.4dkankan.com/showPC.html?m=qQMKVSwu"
        },
        {
          id: 2288,
          url: "https://www.4dkankan.com/showPC.html?m=x2kIkoCB"
        },
        {
          id: 3139,
          url: "https://www.4dkankan.com/showProPC.html?m=vroMUXdx"
        }
      ],
      serveList: [
        {
          name: "社会保险相关",
          num: "08/10"
        },
        {
          name: "小微企业相关",
          num: "01/10"
        },
        {
          name: "争议协调相关",
          num: "02/10"
        },
        {
          name: "争议协调相关",
          num: "03/10"
        },
        {
          name: "用人单位相关",
          num: "03/10"
        },
        {
          name: "公共空间预约",
          num: "05/10"
        },
      ],
      cuttentModel: {},
      isShowClose: false,
      isShowModel: false
    };
  },
  mounted() {},
  methods: {
    chooseItem(id) {
      this.cuttentModel = this.list.find(item => item.id === id) || "";
      if (this.cuttentModel === "") {
        return;
      }
      this.isShowModel = true;
      const that = this;
      setTimeout(() => {
        that.isShowClose = true;
      }, 2000);
    },
    close() {
      this.cuttentModel = {};
      this.isShowClose = false;
      this.isShowModel = false;
      this.$emit("closeModel");
    }
  }
};
</script>

<style scoped lang='less'>
.content {
  margin-top: 50px;
  border-radius: 6px;
  // overflow: hidden;
  width: 45vw;
  height: 50vh;
  position: relative;
  background-color: #030f1d;
  transition: all 1s;
  text-align: center;
  // padding-top: 50px;
  .close-icon {
    width: 50px;
    position: absolute;
    right: -15px;
    top: -15px;
  }
  .serve-list {
    border-radius: 0 0 4px 4px;
    background-color: rgba(28, 53, 83, 0.829);
    color: #bbb;
    .title {
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      padding-top: 20px;
      width: 33%;
    }
    .list-content {
      display: flex;
      align-items: center;
      text-align: left;
      flex-wrap: wrap;
      padding: 10px 0;
      .item {
        width: 33%;
        text-align: center;
        margin-bottom: 10px;
        box-sizing: border-box;
      }
    }
  }
}
</style>