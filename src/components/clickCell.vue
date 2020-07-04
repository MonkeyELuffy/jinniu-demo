<template>
  <div class="content common-border">
    <div class="title">事件预警纪录</div>
    <div class="list-item" :class="{'click': item.click}" v-for="(item, index) in list" :key="index" @click.stop="clickAlarm(item)">
      <div class="date">{{item.date}}</div>
      <div class="des">{{item.des}}</div>
      <div class="status">处理状态: <span>{{item.status}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          date: "2020.07.02",
          des: "居民丙报告地下水井盖四发生松动",
          status: "暂未处理",
          id: "Alarm_1",
          click: false,
        },
        {
          date: "2020.07.02",
          des: "居民乙报告地下水井盖五发生松动",
          status: "暂未处理",
          id: "Alarm_2",
          click: false,
        },
        {
          date: "2020.07.01",
          des: "居民甲报告地下水井盖一发生松动",
          status: "暂未处理",
          id: "Alarm_3",
          click: false,
        },
        {
          date: "2020.06.30",
          des: "居民甲报告地下水井盖五发生松动",
          status: "暂未处理",
          id: "Alarm_2",
          click: false,
        }
      ]
    };
  },
  mounted() {
  },
  methods: {
    clickAlarm(item) {
      this.list.map(cur => {
        cur.click = false
        return cur
      })
      item.click = true
      this.$emit("handleClickAlarm", item);
    },
    chooseItem(item) {
      this.list.map(cur => {
        cur.click = cur.id === item.id
        return cur
      })
    },
    hiddenAlarm() {
      this.list.map(cur => {
        cur.click = false
        return cur
      })
    }
  }
};
</script>

<style scoped lang='less'>
.content {
  margin-top: 10px;
  width: 45vw;
  position: relative;
  background-color: #030f1d;
  padding-top: 50px;
  .list-item {
    font-size: 14px;
    display: flex;
    color: #eee;
    justify-content: space-between;
    padding: 10px;
    border-top: 1px solid #aaa;
    cursor: pointer;
    &.click {
      background-color: #aaa;
    }
    &:hover {
      background-color: #fff;
      color: #999;
    }
    .des {
      flex: 1;
      padding-left: 40px;
    }
    .status {
      span {
        color: #cc234d;
      }
    }
  }
}
</style>