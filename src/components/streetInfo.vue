<template>
  <div class="street-info">
    <div class="common-title">街道信息</div>
    <div class="info-content">
      <div
        class="info-item"
        :class="item.iconClass"
        v-for="(item, index) in currentInfo"
        :key="index"
      >
        <div class="value">{{item.value}}</div>
        <div class="key">{{item.key}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import icon_1 from "../assets/icon_1.png";
import icon_2 from "../assets/icon_2.png";
import icon_3 from "../assets/icon_3.png";
import icon_4 from "../assets/icon_4.png";
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
      streetInfo1: [
        {
          key: "面积",
          value: "4 KM²",
          icon: icon_1,
          iconClass: "icon-1"
        },
        {
          key: "服务数量",
          value: "16",
          icon: icon_4,
          iconClass: "icon-4"
        },
        {
          key: "小区",
          value: "6",
          icon: icon_3,
          iconClass: "icon-3"
        },
        {
          key: "公共空间",
          value: "4",
          icon: icon_4,
          iconClass: "icon-4"
        },
        {
          key: "总人口",
          value: "10091",
          icon: icon_2,
          iconClass: "icon-2"
        },
        {
          key: "户数",
          value: "2004",
          icon: icon_3,
          iconClass: "icon-3"
        }
      ],
      streetInfo2: [
        {
          key: "面积",
          value: "2193 M²",
          icon: icon_1,
          iconClass: "icon-1"
        },
        {
          key: "服务数量",
          value: "16",
          icon: icon_4,
          iconClass: "icon-4"
        },
        {
          key: "小区",
          value: "1",
          icon: icon_3,
          iconClass: "icon-3"
        },
        {
          key: "公共空间",
          value: "2",
          icon: icon_4,
          iconClass: "icon-4"
        },
        {
          key: "总人口",
          value: "2283",
          icon: icon_2,
          iconClass: "icon-2"
        },
        {
          key: "户数",
          value: "1387",
          icon: icon_3,
          iconClass: "icon-3"
        }
      ]
    };
  },
  computed: {
    currentInfo() {
      const currentInfo = this.switchData ? this.streetInfo2 : this.streetInfo1;
      return currentInfo;
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang='less'>
.street-info {
  .info-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .info-item {
      color: #eee;
      padding: 4px;
      width: 28%;
      font-size: 12px;
      text-align: right;
      margin: 6px 0px;
      border-radius: 2px;
      &.icon-1 {
        background: url("../assets/icon_1.png") no-repeat;
        background-color: #2c3945;
        background-size: 40%;
        background-position: 10px 4px;
      }
      &.icon-2 {
        background: url("../assets/icon_2.png") no-repeat;
        background-color: #2c3945;
        background-size: 40%;
        background-position: 10px 4px;
      }
      &.icon-3 {
        background: url("../assets/icon_3.png") no-repeat;
        background-color: #2c3945;
        background-size: 40%;
        background-position: 10px 4px;
      }
      &.icon-4 {
        background: url("../assets/icon_4.png") no-repeat;
        background-color: #2c3945;
        background-size: 40%;
        background-position: 10px 4px;
      }
      .value {
        font-weight: 600;
        font-size: 14px;
      }
    }
  }
}
</style>