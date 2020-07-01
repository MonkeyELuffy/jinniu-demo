<template>
  <div class="life-config">
    <div class="common-title">生活配套</div>
    <div class="life-config-content common-border">
      <div class="life-item" v-for="(item, index) in lifeConfigList" :key="index">
        <div class="value" :class="{'last-child': index === lifeConfigList.length - 1}">
          {{item.name}}
          <span class="num">{{item.num}}</span>
          <div class="line"></div>
        </div>
        <div class="yuyue" v-show="item.canUse">预约</div>
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
        },
        {
          name: '悦众户外运动体验馆',
          num: '60/80',
          canUse: true,
        },
        {
          name: 'UME星空餐厅',
          num: '60/80',
          canUse: false,
        },
        {
          name: '云水涧舌尖文化体验馆',
          num: '60/80',
          canUse: true,
        },
        {
          name: '望丛诗书画苑',
          num: '60/80',
          canUse: true,
        },
        {
          name: '喜来登五星级酒店',
          num: '60/80',
          canUse: false,
        },
        {
          name: '国家健身中心',
          num: '60/80',
          canUse: true,
        },
        {
          name: '国际会展中心',
          num: '60/80',
          canUse: false,
        },
      ],
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped lang='less'>
  .life-config {
    margin-top: 80px;
    .life-config-content {
      background-color: #162b3d;
      color: #eee;
      margin: 12px 0;
      .life-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 10px;
        position: relative;
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