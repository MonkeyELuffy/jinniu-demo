<template>
  <div class="life-config">
    <div class="common-title">生活配套</div>
    <div class="life-config-content">
      <div class="life-item" :class="{'click': item.click}" v-for="(item, index) in lifeConfigList" :key="index">
        <div class="value" :class="{'last-child': index === lifeConfigList.length - 1}">
          {{item.name}}
          <span class="num">{{item.num}}</span>
          <div class="line"></div>
        </div>
        <div class="yuyue" v-show="item.canUse" @click="chooseItem(item.id)">预约</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      lifeConfigList: [
        {
          name: '国际网球中心',
          num: '60/80',
          canUse: true,
          id: 2356,
          click: false,
        },
        {
          name: '悦众户外运动体验馆',
          num: '60/80',
          canUse: true,
          id: 2223,
          click: false,
        },
        {
          name: 'UME星空餐厅',
          num: '60/80',
          canUse: true,
          id: 2368,
          click: false,
        },
        {
          name: '云水涧舌尖文化体验馆',
          num: '60/80',
          canUse: true,
          id: 2264,
          click: false,
        },
        {
          name: '望丛诗书画苑',
          num: '60/80',
          canUse: true,
          id: 2265,
          click: false,
        },
        {
          name: '喜来登五星级酒店',
          num: '60/80',
          canUse: true,
          id: 2288,
          click: false,
        },
        {
          name: '国家健身中心',
          num: '60/80',
          canUse: true,
          id: 3139,
          click: false,
        },
        {
          name: '国际会展中心',
          num: '60/80',
          canUse: false,
          id: 2273,
          click: false,
        },
      ],
    };
  },
  mounted() {
  },
  methods: {
    chooseItem(id) {
      this.lifeConfigList.map(item => {
        item.click = item.id === id
        return item
      })
      this.$emit('chooseModel', id)
    },
    cancelItem() {
      this.lifeConfigList.map(item => {
        item.click = false
        return item
      })
    },
  }
};
</script>

<style scoped lang='less'>
  .life-config {
    // margin-top: 80px;
    // height: 40vh;
  background-image: linear-gradient(to left, #3943499f, #39434900);
    .life-config-content {
      // background-color: #3943497a;
      color: #eee;
      margin: 12px 0;
      border: 1px solid rgba(153, 153, 153, 0);
      border-radius: 2px;
      .life-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 10px;
        position: relative;
        &.click {
          background-color: #92a2b3;
        }
        .num {
          display: inline-block;
          padding-left: 20px;
        }
        &:hover {
          background-color: #92a2b3;
        }
        .value {
          border-bottom: 1px solid #aaa;
          padding-bottom: 4px;
          &.last-child {
            border-bottom-width: 0px;
          }
        }
        .yuyue {
          border: 1px solid #fff;
          padding: 4px 10px;
          border-radius: 4px;
          background-color: #6f9fa7;
          cursor: pointer;
          &:hover {
            background-color: #fff;
            color: #6f9fa7;
          }
        }
      }
    }
  }
</style>