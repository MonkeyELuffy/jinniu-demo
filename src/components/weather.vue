<template>
  <div class="date-weather">
    <div class="format-date">{{date | formatDate}}</div>
    <div class="weather">
      <div class="week">{{week | formatWeek}}</div>
      <img src="../assets/weather.png" alt class="weather-icon" />
      <div class="temperature">{{temperature}} °C</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      week: new Date(),
      temperature: "22"
    };
  },
  filters: {
    formatDate(value) {
      //这里的Value就是需要过滤的数据
      const date = new Date(value);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
      const hours =
        date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
      const minutes =
        date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
      const seconds =
        date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    },
    formatWeek(value) {
      const date = new Date(value);
      const day = date.getDay();
      switch (day) {
        case 1:
          return "星期一";
        case 2:
          return "星期二";
        case 3:
          return "星期三";
        case 4:
          return "星期四";
        case 5:
          return "星期五";
        case 6:
          return "星期六";
        case 7:
          return "星期日";
      }
    },
    formatIndex(value) {
      return value > 9 ? value : "0" + value;
    }
  },
  mounted() {
    var _this = this;
    this.timer = setInterval(() => {
      _this.date = new Date();
      _this.week = new Date();
    }, 1000);
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  methods: {}
};
</script>

<style scoped lang='less'>
.date-weather {
  font-size: 16px;
  font-weight: 600;
  float: right;
  padding: 10px 20px;
  .format-date {
    padding: 0 10px;
    background-image: linear-gradient(
      to left,
      rgba(177, 60, 60, 0.555),
      rgba(177, 60, 60, 0.192)
    );
  }
  .weather {
    display: flex;
    padding: 0 10px;
    .weather-icon {
      width: 20px;
      height: 18px;
      margin-right: 4px;
    }
    .week {
      padding-right: 4px;
      flex: 1;
    }
  }
}
</style>