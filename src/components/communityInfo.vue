<template>
  <div class="community-info">
    <div class="common-title">小区信息</div>
    <div class="community-info-content common-border">
      <div class="community-item" v-for="(item, index) in communityList" :key="index">
        <div
          class="table-item"
          v-for="(table, tableIndex) in item.table"
          :key="tableIndex"
        >{{table}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      communityList: [
        {
          isHeader: true,
          table: ['「小区名称」', '「户数」', '「监控点位」', '「出入人口」']
        },
        {
          table: ['润色景苑', '278', '6', '618']
        },
        {
          table: ['小隐公寓', '201', '4', '459']
        },
        {
          table: ['怡丽家园', '1094', '30', '4022']
        },
        {
          table: ['弘吉雅居', '431', '11', '882']
        },
        {
          table: ['人才公寓', '212', '8', '1304']
        },
        {
          table: ['滨河湾', '167', '4', '992']
        },
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang='less'>
.community-info-content {
  .community-item {
    display: flex;
    justify-content: space-between;
    &:nth-child(even) {
      background-image: linear-gradient(
        to left,
        rgba(124, 155, 240, 0.288),
        rgba(195, 197, 219, 0.322)
      );
    }
    .table-item {
      // display: inline-block;
      font-size: 14px;
      width: 100px;
      text-align: center;
      padding: 9px 0;
    }
  }
}
</style>