<template>
  <div class="serve common-border">
    <div class="serve-content">
      <div class="title">服务热度</div>
      <div class="charts-container">
        <div id="myChart_2" class="echart-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    switchData: {
      default: false,
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      barData1: [
        { value: 135, name: "智慧门禁" },
        { value: 102, name: "生活缴费" },
        { value: 91, name: "问卷调查" },
        { value: 65, name: "今日菜价" },
        { value: 55, name: "邻里交流" },
        { value: 49, name: "参加活动" },
        { value: 48, name: "生鲜配送" },
        { value: 31, name: "智慧物业" },
        { value: 27, name: "社区党建" },
        { value: 12, name: "法律服务" }
      ],
      barData2: [
        { value: 35, name: "智慧门禁" },
        { value: 32, name: "生活缴费" },
        { value: 29, name: "问卷调查" },
        { value: 28, name: "今日菜价" },
        { value: 22, name: "邻里交流" },
        { value: 20, name: "参加活动" },
        { value: 16, name: "生鲜配送" },
        { value: 11, name: "智慧物业" },
        { value: 8, name: "社区党建" },
        { value: 2, name: "法律服务" }
      ],
    };
  },
  mounted() {
    this.barData = this.barData1
    this.drawLine_2();
  },
  methods: {
    handleSwitchData() {
      this.barData = this.switchData ? this.barData1 : this.barData2
      this.drawLine_2()
    },
    drawLine_2() {
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 10,
          top: 10,
          height: 260,
          textStyle: {
            color: "#eee",
            fontSize: 10
          },
          itemHeight: 12,
          data: [
            "智慧门禁",
            "生活缴费",
            "问卷调查",
            "今日菜价",
            "邻里交流",
            "参加活动",
            "生鲜配送",
            "智慧物业",
            "社区党建",
            "法律服务"
          ]
        },
        series: [
          {
            name: "服务热度",
            type: "pie",
            radius: ["40%", "65%"],
            label: {
              show: false
            },
            right: 0,
            data: this.barData
          }
        ]
      };
      let myChart_2 = this.$echarts.init(document.getElementById("myChart_2"));
      myChart_2.setOption(option, true);
      setTimeout(function() {
        window.onresize = function() {
          myChart_2.resize();
        };
      }, 200);
    }
  }
};
</script>

<style scoped lang='less'>
.serve {
  margin-top: 10px;
  width: 25vw;
  height: 290px;
  position: relative;
  .charts-container {
    margin-top: 50px;
  }
}
</style>