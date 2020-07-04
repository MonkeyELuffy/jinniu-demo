<template>
  <div class="container">
    <div class="left-container front">
      <!-- 标题 -->
      <title-content></title-content>
      <!-- 街道信息 -->
      <street-info :switchData="switchData"></street-info>
      <!-- 居民画像 -->
      <!-- <div class="people-info"> -->
      <!-- 年龄分布chart -->
      <age-chart :switchData="switchData" ref="ageChart"></age-chart>
      <!-- 服务热度 -->
      <serve-chart :switchData="switchData" ref="serveChart"></serve-chart>
      <!-- </div> -->
    </div>

    <div class="center-container front">
      <!-- 页面菜单 -->
      <menu-list :currentPage="currentPage" class="front" @switchPage="switchPage"></menu-list>
      <!-- 服务次数 -->
      <num :numTitle="numTitle" :numTotal="numTotal" class="front"></num>
      <!-- 模型 -->
      <model-content ref="modelContent" @closeModel="closeModel"></model-content>

      <!-- 管理人员 -->
      <!-- <leader-content class="front"></leader-content> -->
    </div>

    <div class="svg-container">
      <b-map @chooseMapItem="chooseMapItem"></b-map>
    </div>

    <div class="right-container front">
      <!-- 天气日期 -->
      <weather></weather>
      <!-- 生活配套 -->
      <life-config ref="lifeConfig" @chooseModel="chooseModel"></life-config>
      <!-- 小区信息 -->
      <community-info></community-info>
    </div>
  </div>
</template>

<script>
import Num from "../components/num.vue";
import MenuList from "../components/menu.vue";
import LifeConfig from "../components/lifeConfig.vue";
import CommunityInfo from "../components/communityInfo.vue";
import LeaderContent from "../components/leaderContent.vue";
import StreetInfo from "../components/streetInfo.vue";
import AgeChart from "../components/ageChart.vue";
import ServeChart from "../components/serveChart.vue";
import TitleContent from "../components/titleContent.vue";
import Weather from "../components/weather.vue";
import BMap from "../components/bMap.vue";
import ModelContent from "../components/modelContent.vue";
export default {
  name: "home",
  data() {
    return {
      switchData: false,
      showScale: false,
      numTitle: "已提供服务次数",
      numTotal: 2184521,
      currentPage: 0,
    };
  },
  components: {
    Num,
    MenuList,
    LifeConfig,
    CommunityInfo,
    LeaderContent,
    StreetInfo,
    AgeChart,
    ServeChart,
    TitleContent,
    Weather,
    BMap,
    ModelContent
  },
  mounted() {},
  beforeDestroy() {
    console.log('beforeDestroy====')
  },
  methods: {
    scale() {
      this.showScale = !this.showScale;
      this.switchData = !this.switchData;
      this.$refs.ageChart.handleSwitchData();
      this.$refs.serveChart.handleSwitchData();
    },
    chooseMapItem(id) {
      this.$refs.lifeConfig.chooseItem(id);
    },
    chooseModel(id) {
      this.$refs.modelContent.chooseItem(id);
    },
    closeModel() {
      this.$refs.lifeConfig.cancelItem()
    },
    switchPage() {
      this.$refs.modelContent.close();
    },
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  // background: url("../assets/bg6.jpg") no-repeat;
  // background-color: #1b3142;
  // background-size: 120%;
  // background-position: center;
}
.common-title {
  font-size: 20px;
  padding-left: 10px;
  padding-bottom: 6px;
  font-weight: 600;
  color: #ccc;
}
.common-border {
  border: 1px solid rgba(153, 153, 153, 0);
  border-radius: 2px;
}
.left-container {
  width: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 140px;
  .charts-container {
    height: 100%;
  }
  .title {
    position: absolute;
    left: 10px;
    top: 20px;
    padding-left: 10px;
    border-left: 4px solid #b34038;
    z-index: 11;
    font-weight: 600;
    color: #eb6471;
  }
}
.center-container {
  width: 45vw;
  height: 200px;
  .close-content {
    text-align: center;
    padding-top: 50px;
    .close-icon {
      width: 50px;
    }
  }
}

.right-container {
  width: 25vw;
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 40px;
  padding-top: 20px;
}

.svg-container {
  width: 100vw;
  height: 100vh;
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
}
.front {
  z-index: 11;
}
.echart-content {
  background-image: linear-gradient(to right, #3943499f, #39434900);
}
</style>
