<template>
  <div class="people-content common-border">
    <div class="title">
      当日实时人流量
      <span>（ {{date | formatDate}} ）</span>
    </div>
    <div class="list-content">
      <div
        class="item"
        :class="{'click': item.click}"
        v-for="(item, index) in list"
        :key="index"
        @click.stop="clickAlarm(item)"
      >
        <div class="name">{{item.name}}:</div>
        <div class="value">{{item.value}}人</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      list: [
        {
          name: "监控点一",
          value: 213,
          click: false,
          id: "monitor_1"
        },
        {
          name: "监控点二",
          value: 134,
          click: false,
          id: "monitor_2"
        },
        {
          name: "监控点三",
          value: 337,
          click: false,
          id: "monitor_3"
        }
      ]
    };
  },
  filters: {
    formatDate(value) {
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
      return year + "-" + month + "-" + day;
    }
  },
  mounted() {
    var _this = this;
    this.timer = setInterval(() => {
      _this.date = new Date();
    }, 1000);
  },
  methods: {
    clickAlarm(item) {
      this.list.map(cur => {
        cur.click = false;
        return cur;
      });
      item.click = true;
      this.$emit("handleClickMonitor", item);
    },
    chooseItem(item) {
      this.list.map(cur => {
        cur.click = cur.id === item.id
        return cur
      })
    },
    hiddenMonitor() {
      this.list.map(cur => {
        cur.click = false;
        return cur;
      });
    }
  }
};
</script>

<style scoped lang='less'>
.people-content {
  margin-top: 16px;
  position: relative;
  background-color: #0b1d2e;
  max-height: 35vh;
  overflow: scroll;
}
.list-content {
  padding-top: 50px;
}
.item {
  font-size: 16px;
  padding: 10px;
  display: flex;
  .value {
    padding-left: 10px;
  }
  &.click {
    background-color: #aaa;
  }
  &:hover {
    background-color: #fff;
    color: #999;
  }
}
.title {
  span {
    font-size: 12px;
  }
}
</style>