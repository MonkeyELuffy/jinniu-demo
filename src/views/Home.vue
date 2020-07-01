<template>
  <div class="container">
    <div class="left-container">
      <!-- 标题 -->
      <title-content></title-content>
      <!-- 街道信息 -->
      <street-info :switchData="switchData"></street-info>
      <!-- 居民画像 -->
      <div class="people-info">
        <!-- 年龄分布chart -->
        <age-chart :switchData="switchData" ref="ageChart"></age-chart>
        <!-- 服务热度 -->
        <serve-chart :switchData="switchData" ref="serveChart"></serve-chart>
      </div>
    </div>

    <div class="center-container">
      <!-- 页面菜单 -->
      <menu-list></menu-list>
      <!-- 服务次数 -->
      <num></num>
      <!-- 多级网路 -->
      <div class="svg-container common-border">
        <img
          :src="currentCenterImg"
          :class="{'scale': showScale}"
          class="center-img"
          @click="scale"
        />
      </div>
      <!-- 管理人员 -->
      <leader-content></leader-content>
    </div>
    <div class="right-container">
      <!-- 天气日期 -->
      <weather></weather>
      <!-- 生活配套 -->
      <life-config></life-config>
      <!-- 小区信息 -->
      <community-info></community-info>
    </div>
  </div>
</template>

<script>
import centerImg_1 from "../assets/centerImg_1.png";
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
export default {
  name: "home",
  data() {
    return {
      switchData: false,
      showScale: false,
      currentCenterImg: centerImg_1
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
    Weather
  },
  mounted() {},
  methods: {
    scale() {
      this.showScale = !this.showScale;
      this.switchData = !this.switchData;
      this.$refs.ageChart.handleSwitchData()
      this.$refs.serveChart.handleSwitchData()
    },
    backParent() {}
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
  background: url("../assets/bg6.jpg") no-repeat;
  background-color: #1b3142;
  background-size: 120%;
  background-position: center;
}
.common-title {
  color: #eee;
  font-size: 20px;
  padding-left: 10px;
  padding-bottom: 6px;
  font-weight: 600;
}
.common-border {
  border: 1px solid #999;
  border-radius: 2px;
}
.left-container {
  width: 25vw;
  .people-info {
    .charts-container {
      height: 100%;
    }
    .title {
      position: absolute;
      left: 10px;
      top: 20px;
      color: #eee;
      padding-left: 10px;
      border-left: 4px solid #b34038;
    }
  }
}
.center-container {
  width: 45vw;
}

.right-container {
  width: 25vw;
  color: #eee;
}

.svg-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0 10px;
  overflow: hidden;
  .center-img {
    width: 100%;
    transition: all 0.6s;
    &.scale {
      transform: scale(3);
      translate: 0 10px;
    }
  }
}
.echart-content {
  width: 30vw;
  height: 30vh;
}
</style>
