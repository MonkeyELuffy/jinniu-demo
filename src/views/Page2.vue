<template>
  <div class="container" @click="hiddenAlarm">
    <div class="left-container">
      <!-- 标题 -->
      <title-content></title-content>

      <select-content></select-content>
    </div>

    <div class="center-container">
      <!-- 页面菜单 -->
      <menu-list :currentPage="currentPage"></menu-list>
      <!-- 服务次数 -->
      <num :numTitle="numTitle" :numTotal="numTotal"></num>
      <!-- 多级网路 -->
      <div class="svg-container_2 common-border">
        <img src="../assets/centerImg_1.png" class="center-img" />
        <div
          class="jinggai-item"
          v-for="(item, index) in jinggaiList"
          :key="index"
          :style="{'left': item.left, 'top': item.top}"
        >
          <img src="../assets/jinggai.png" alt class="jinggai" @click.stop="clickJingGai(item)" />
          <img v-show="item.hasAlarm" src="../assets/alarm.png" alt class="alarm has-annimate" />
        </div>
        <div
          class="monitor-item"
          v-for="(item, index) in monitorList"
          :key="index"
          :style="{'left': item.left, 'top': item.top}"
        >
          <img src="../assets/monitor.png" alt class="monitor" :class="{'has-annimate': item.click}" @click.stop="clickMonitor(item)" />
        </div>
      </div>
      <click-cell ref="clickCell" @handleClickAlarm="handleClickAlarm"></click-cell>
    </div>

    <div class="right-container">
      <!-- 天气日期 -->
      <weather></weather>
      <div class="monitor-list">
        <monitor :img="monitor1" title="监控画面1" little-title="怡丽佳苑出入口"></monitor>
        <monitor :img="monitor2" title="监控画面2" little-title="菁蓉湖社区党群服务中心停车场"></monitor>
      </div>
      <people ref="people" @handleClickMonitor="handleClickMonitor"></people>
    </div>
  </div>
</template>

<script>
import monitor1 from "../assets/monitor1.gif";
import monitor2 from "../assets/monitor2.gif";
import gif1 from "../assets/gif1.gif";

import Num from "../components/num.vue";
import Monitor from "../components/monitor.vue";
import MenuList from "../components/menu.vue";
import TitleContent from "../components/titleContent.vue";
import Weather from "../components/weather.vue";
import ClickCell from "../components/clickCell.vue";
import People from "../components/people.vue";
import SelectContent from "../components/selectContent.vue";
export default {
  name: "home",
  data() {
    return {
      numTitle: "事件报警次数",
      numTotal: 3245,
      currentPage: 1,
      monitor1: gif1,
      monitor2,
      jinggaiList: [
        {
          left: "20px",
          top: "20px"
        },
        {
          left: "320px",
          top: "220px",
          id: "Alarm_1",
          hasAlarm: false
        },
        {
          left: "140px",
          top: "220px"
        },
        {
          left: "130px",
          top: "80px",
          id: "Alarm_2",
          hasAlarm: false
        },
        {
          left: "380px",
          top: "120px",
          id: "Alarm_3",
          hasAlarm: false
        },
        {
          left: "250px",
          top: "60px"
        }
      ],
      monitorList: [
        {
          left: "240px",
          top: "30px",
          id: "monitor_2",
          click: false,
        },
        {
          left: "280px",
          top: "67px",
          id: "monitor_1",
          click: false,
        },
        {
          left: "310px",
          top: "120px",
          id: "monitor_3",
          click: false,
        }
      ]
    };
  },
  components: {
    Num,
    MenuList,
    TitleContent,
    Weather,
    Monitor,
    ClickCell,
    People,
    SelectContent
  },
  mounted() {},
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {
    handleClickAlarm(item) {
      this.jinggaiList.map(cur => {
        cur.hasAlarm = cur.id === item.id;
        return cur;
      });
    },
    clickJingGai(item) {
      this.jinggaiList.map(cur => {
        cur.hasAlarm = item.id !== undefined && cur.id === item.id;
        return cur;
      });
      this.$refs.clickCell.chooseItem(item);
    },
    handleClickMonitor(item) {
      this.monitorList.map(cur => {
        cur.click = cur.id === item.id;
        return cur;
      });
    },
    clickMonitor(item) {
      this.monitorList.map(cur => {
        cur.click = item.id !== undefined && cur.id === item.id;
        return cur;
      });
      this.$refs.people.chooseItem(item);
    },
    hiddenAlarm() {
      this.jinggaiList.map(cur => {
        cur.hasAlarm = false;
        return cur;
      });
      this.monitorList.map(cur => {
        cur.click = false;
        return cur;
      });
      this.$refs.people.hiddenMonitor();
      this.$refs.clickCell.hiddenAlarm();
    }
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

.title {
  position: absolute;
  left: 10px;
  top: 20px;
  color: #eee;
  padding-left: 10px;
  border-left: 4px solid #b34038;
}

.left-container {
  width: 25vw;
  display: block;
}

.center-container {
  width: 45vw;
}

.right-container {
  width: 25vw;
  color: #eee;
  padding-bottom: 20px;
  .monitor-list {
    margin-top: 10px;
  }
}

.svg-container_2 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0 10px;
  overflow: hidden;
  position: relative;
  .center-img {
    width: 100%;
    transition: all 0.6s;
  }
  .monitor-item {
    position: absolute;
    z-index: 1;
    .monitor {
      width: 20px;
      transition: all 0.3s;
      transform-origin: 50% 50% 0;
      &.has-annimate {
        animation: big 1s infinite linear;
      }
      @keyframes big {
        50% {
          transform: scale(1.8);
        }
      }
    }
  }
  .jinggai-item {
    position: absolute;
    z-index: 1;
    .jinggai {
      width: 20px;
    }
    .alarm {
      width: 20px;
      position: absolute;
      left: 0px;
      top: -10px;
      z-index: 2;
      transition: all 0.3s;
      transform-origin: 50% 50% 0;
      &.has-annimate {
        animation: jump 1s infinite linear;
      }
      @keyframes jump {
        0% {
          // top: -10px;
        }
        50% {
          // top: 0px;
          transform: scale(1.8);
        }
        100% {
          // top: -10px;
        }
      }
    }
  }
}
</style>
