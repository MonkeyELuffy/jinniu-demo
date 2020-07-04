<template>
  <div class="content">
    <div class="select-content">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in selectList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="list-content">
      <el-tree :data="data" :props="defaultProps" node-key="id" :default-expanded-keys="[5]"></el-tree>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      value: "",
      list: [
        {
          name: "创客公园区域"
        },
        {
          name: "红房子区域"
        },
        {
          name: "随锐科技区域",
          child: ["怡丽佳苑", "菁蓉湖社区党群服务中心"]
        },
        {
          name: "望丛书院区域"
        },
        {
          name: "国际会展中心区域"
        }
      ],
      selectList: [
        {
          value: "菁蓉湖社区",
          label: "菁蓉湖社区"
        },
        {
          value: "大禹社区",
          label: "大禹社区"
        },
        {
          value: "德安社区",
          label: "德安社区"
        },
        {
          value: "馨美社区",
          label: "馨美社区"
        },
        {
          value: "东林村",
          label: "东林村"
        },
        {
          value: "平成村",
          label: "平成村"
        }
      ],
      data: [
        {
          label: "创客公园区域",
          id: 1
        },
        {
          label: "红房子区域",
          id: 2
        },
        {
          label: "望丛书院区域",
          id: 3
        },
        {
          label: "国际会展中心区域",
          id: 4
        },
        {
          label: "随锐科技区域",
          id: 5,
          children: [
            {
              label: "怡丽佳苑",
              id: 6
            },
            {
              label: "菁蓉湖社区党群服务中心",
              id: 7
            }
          ]
        },
        {
          label: "随锐科技区域",
          id: 5,
          children: [
            {
              label: "怡丽佳苑"
            },
            {
              label: "菁蓉湖社区党群服务中心"
            }
          ]
        },
        {
          label: "随锐科技区域",
          id: 5,
          children: [
            {
              label: "怡丽佳苑"
            },
            {
              label: "菁蓉湖社区党群服务中心"
            }
          ]
        },
        {
          label: "随锐科技区域",
          id: 5,
          children: [
            {
              label: "怡丽佳苑"
            },
            {
              label: "菁蓉湖社区党群服务中心"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
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
      return year + "-" + month + "-" + day;
    }
  },
  mounted() {
    var _this = this;
    this.timer = setInterval(() => {
      _this.date = new Date();
    }, 1000);
  },
  methods: {}
};
</script>

<style scoped lang='less'>
.content {
  width: 100%;
  margin-top: 40px;
  .select-content {
    width: 100%;
    .el-select {
      width: 100%;
    }
  }
  .list-content {
    margin-top: 40px;
    border-radius: 2px;
    height: 500px;
    color: #333;
    font-size: 16px;
    overflow: scroll;
    .el-tree {
      background-color: rgba(28, 53, 83, 0.418);
      // background-color: rgba(128, 174, 233, 0.568);
      width: 100%;
      padding: 16px;
      box-sizing: border-box;
      color: #eee;
      .el-tree-node.is-current > .el-tree-node__content {
        background-color: #7bb2f179 !important;
        color: red;
      }
      .el-checkbox__input.is-checked + .el-checkbox__label {
        color: red;
      }
      .el-tree-node:focus > .el-tree-node__content {
        background-color: red !important;
      }
    }
    .list-item {
      padding: 10px 0;
    }
  }
}
.el-tree /deep/ .el-tree-node .el-tree-node__content {
  width: 200px;
  height: 43px;
  background: #7bb2f179;
  margin: 1px 0;
  color: #eee;
}
.el-tree /deep/ .is-current > .el-tree-node__content {
  background: #7bb2f179 !important;
  color: #eee !important;
}
.el-tree /deep/ .el-tree-node__label {
  display: inline-block;
  width: 72%;
}
.el-tree /deep/ .el-tree-node__children .el-tree-node__content {
  width: 200px;
  height: 34px;
  margin-left: 20px;
  padding-left: 10px !important;
  margin-bottom: 6px;
  background: #7bb2f179 !important;
}
.el-tree /deep/ .el-tree-node__children .is-current .el-tree-node__content {
  margin-bottom: 6px;
  background: #7bb2f179 !important;
  color: #eee !important;
}
.el-tree /deep/ .el-tree-node__children .el-tree-node__content {
  color: #eee !important;
}
.el-tree .el-tree-node__expand-icon {
  color: #fff !important;
}
.el-tree-node__expand-icon.is-leaf {
  color: transparent !important;
}
</style>