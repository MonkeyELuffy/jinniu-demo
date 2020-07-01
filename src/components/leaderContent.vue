<template>
  <div class="leader-content">
    <div class="common-title">管理人员</div>
    <div class="leader-type-list">
      <div
        class="leader-type-item common-border"
        v-for="(item, index) in leaderTypeList"
        :key="index"
      >
        <div class="leader-list-content">
          <div class="leader-list">
            <div
              class="leader-item"
              v-for="(leaderItem, leaderIndex) in item.leaderList"
              :key="leaderIndex"
            >{{leaderItem.name}}</div>
          </div>
        </div>
        <div class="leader-type-name">{{item.type}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leaderTypeList: [
        {
          type: "领导班子",
          leaderList: [
            {
              name: "李奕锦"
            },
            {
              name: "白云"
            }
          ]
        },
        {
          type: "两委成员",
          leaderList: [
            {
              name: "郭莉"
            },
            {
              name: "梁茜"
            },
            {
              name: "王思容"
            },
            {
              name: "李凯"
            },
            {
              name: "李奕锦"
            }
          ]
        },
        {
          type: "居委会成员",
          leaderList: [
            {
              name: "王光怀"
            },
            {
              name: "李忠民"
            },
            {
              name: "毛军"
            },
            {
              name: "毛国根"
            },
            {
              name: "万晓涛"
            },
            {
              name: "陈正清"
            },
            {
              name: "罗才文"
            },
            {
              name: "骆怀东"
            },
            {
              name: "汪志星"
            },
            {
              name: "税涛"
            }
          ]
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang='less'>
.leader-content {
  .leader-type-list {
    // padding: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    .leader-type-item {
      width: 30%;
      background-image: linear-gradient(#1b3857, #091827);
      .leader-list-content {
        height: 80%;
        overflow: scroll;
        .leader-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          .leader-item {
            border: 1px solid #aaa;
            color: #eee;
            border-radius: 2px;
            padding: 2px;
            margin: 2px 6px;
            width: 40%;
            font-size: 14px;
            text-align: center;
            margin-right: auto;
          }
        }
      }
      .leader-type-name {
        height: 20%;
        color: #eee;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>