<template>
  <div class="serve-num">
    <div class="common-title serve-title">已提供服务次数</div>
    <div class="num-content">
      <div class="chartNum">
        <div class="box-item">
          <li
            :class="{'number-item': !isNaN(item), 'mark-item': isNaN(item) }"
            v-for="(item,index) in orderNum"
            :key="index"
          >
            <span v-if="!isNaN(item)">
              <i ref="numberItem">0123456789</i>
            </span>
            <span class="comma" v-else>{{item}}</span>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderNum: ["0", "2", ",", "1", "8", "4", ",", "5", "2", "1"],
      num: 2184521
    };
  },
  mounted() {
    this.increaseNumber();
    let self = this;
    this.timer3 = setInterval(() => {
      self.toOrderNum(self.num++); // 这里输入数字即可调用
    }, 3000);
  },
  methods: {
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    increaseNumber() {
      let self = this;
      this.timer = setInterval(() => {
        self.newNumber = self.newNumber + self.getRandomNumber(1, 100);
        self.setNumberTransform();
      }, 300);
    },
    // 设置文字滚动
    setNumberTransform() {
      const numberItems = this.$refs.numberItem; // 拿到数字的ref，计算元素数量
      const numberArr = this.orderNum.filter(item => !isNaN(item));
      // 结合CSS 对数字字符进行滚动,显示订单数量
      for (let index = 0; index < numberItems.length; index++) {
        const elem = numberItems[index];
        elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`;
      }
    },
    toOrderNum(num) {
      num = num.toString();
      // 把订单数变成字符串
      if (num.length < 8) {
        num = "0" + num; // 如未满八位数，添加"0"补位
        this.toOrderNum(num); // 递归添加"0"补位
      } else if (num.length === 8) {
        // 订单数中加入逗号
        num = num.slice(0, 2) + "," + num.slice(2, 5) + "," + num.slice(5, 8);
        this.orderNum = num.split(""); // 将其便变成数据，渲染至滚动数组
      } else {
        // 订单总量数字超过八位显示异常
        this.$message.warning("订单总量数字过大，显示异常，请联系客服");
      }
    }
  }
};
</script>
<style scoped lang='less'>
.serve-num {
  .serve-title {
    padding: 10px 0;
  }
  .num-content {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
.chartNum {
  width: 100%;
}
.box-item {
  width: 100%;
  position: relative;
  height: 60px;
  font-size: 40px;
  line-height: 60px;
  text-align: center;
  list-style: none;
  color: #eee;
  writing-mode: vertical-lr;
  text-orientation: upright;
  /*文字禁止编辑*/
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.mark-item {
  width: 10px;
  height: 70px;
  margin-right: 5px;
  line-height: 10px;
  font-size: 30px;
  font-weight: 600;
  position: relative;
  & > span {
    position: absolute;
    width: 100%;
    bottom: 0px;
    writing-mode: vertical-rl;
    text-orientation: upright;
  }
}
/*滚动数字设置*/
.number-item {
  width: 11%;
  height: 100%;
  background: #394349;
  list-style: none;
  margin-right: 5px;
  color: #eee;
  border-radius: 4px;
  padding-bottom: 14px;
  font-weight: 600;
  & > span {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    width: 100%;
    height: 100%;
    writing-mode: vertical-rl;
    text-orientation: upright;
    overflow: hidden;
    & > i {
      font-style: normal;
      position: absolute;
      top: 11px;
      left: 50%;
      transform: translate(-50%, 0);
      transition: transform 1s ease-in-out;
      letter-spacing: 10px;
    }
  }
}
.number-item:last-child {
  margin-right: 0;
}
</style>