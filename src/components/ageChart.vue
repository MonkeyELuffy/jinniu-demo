<template>
  <div class="age-chart">
    <div class="title">居民年龄分布</div>
    <div class="charts-container">
      <div id="myChart_1" class="echart-content"></div>
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
      barData1: [1208, 2211, 3950, 1080, 970],
      barData2: [308, 311, 450, 380, 270]
    };
  },
  mounted() {
    this.barData = this.barData1
    this.drawLine_1();
  },
  methods: {
    handleSwitchData() {
      this.barData = this.switchData ? this.barData1 : this.barData2
      this.drawLine_1();
    },
    drawLine_1() {
      var category = ["10岁以下", "10-20岁", "20-45岁", "45-60岁", "60岁以上"];
      var option = {
        height: 60,
        width: 280,
        backgroundColor: "rgba(0,0,0,0)",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: "#ccc"
            }
          }
        },
        yAxis: {
          show: false
        },
        series: [
          {
            name: "人数",
            type: "bar",
            barWidth: 20,
            itemStyle: {
              barBorderRadius: 5
            },
            data: this.barData
          }
        ]
      };
      let myChart_1 = this.$echarts.init(document.getElementById("myChart_1"));
      myChart_1.setOption(option, true);
      setTimeout(function() {
        window.onresize = function() {
          myChart_1.resize();
        };
      }, 200);
    }
  }
};
</script>

<style scoped lang='less'>
.age-chart {
  width: 25vw;
  height: 140px;
  position: relative;
  margin-bottom: 30px;
}
</style>