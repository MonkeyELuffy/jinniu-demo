<template>
  <div class="about">
    <h1>This is an about page</h1>
    <svg :height="currentHeight" :width="currentWidth" class="svg" :class="{'ease': needEase}" :style="{'opacity': opacity}">
      <polygon
        class="svg-item"
        v-for="(item, index) in currentList" :key="index"
        :points='item.points'
        :style="item.style"
        @click="handleGoChildren(item)"/>
    </svg>
    <div class="load" v-show="isLoading">loading{{loadingPoint}}</div>
    <div class="back" @click="backParent">返回上一级</div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      level_1: {
        height: 500,
        width: 500,
        dataList: [
          {
            points: '0,0 190,0 0,190',
            style: 'fill:lime; stroke:purple; stroke-width:1',
            childrens: {
              height: 1000,
              width: 1000,
              dataList: [
                {
                  points: '0,0 100,0 100,100 0 100',
                  style: 'fill:lime; stroke:purple; stroke-width:1',
                },
                {
                  points: '120,0 380,0 120,120',
                  style: 'fill:lime; stroke:purple; stroke-width:1',
                },
                {
                  points: '0,120 0,380 120,120',
                  style: 'fill:lime; stroke:purple; stroke-width:1',
                },
                {
                  points: '140,140 0,400 400,0',
                  style: 'fill:lime; stroke:purple; stroke-width:1',
                },
              ]
            }
          },
          {
            height: 500,
            width: 500,
            points: '10,200 200,10 200,200',
            style: 'fill:lime; stroke:purple; stroke-width:1',
            childrenList: [
              {
                points: '126,183 10,156 119,126',
                style: 'fill:lime; stroke:purple; stroke-width:1',
              }
            ]
          },
        ]
      },
      currentList: [],
      currentHeight: 500,
      currentWidth: 500,
      loadingPoint: '.',
    }
  },
  mounted() {
    this.currentList = this.level_1.dataList
  },
  methods: {
    clearTimer() {
      const that = this
      clearInterval(that.timer)
    },
    setLoadingPoint() {
      const that = this
        console.log(that.loadingPoint)

      this.timer = setInterval(() => {
        switch(that.loadingPoint) {
          case '.':
            that.loadingPoint = '..'
            break
          case '..':
            that.loadingPoint = '...'
            break
          case '...':
            that.loadingPoint = '.'
            break
        }
      }, 600)
    },
    handleGoChildren(item) {
      if (!item.childrens) {
        return
      }
      this.opacity = 0
      this.needEase = true
      const that = this
      this.currentList = []
      this.isLoading = true
      this.setLoadingPoint()
      setTimeout(() => {
        that.clearTimer()
        that.isLoading = false
        that.needEase = false
        that.opacity = 1
        that.currentList = item.childrens.dataList
        that.currentHeight = item.height
        that.currentWidth = item.width
      }, 2000)
    },
    backParent() {
      this.opacity = 0
      const that = this
      this.currentList = []
      this.isLoading = true
      this.setLoadingPoint()
      setTimeout(() => {
        that.clearTimer()
        that.isLoading = false
        that.needEase = false
        that.opacity = 1
        that.currentList = that.level_1.dataList
        that.currentHeight = that.level_1.height
        that.currentWidth = that.level_1.width
      }, 2000)
    }
  }
}
</script>

<style>
.svg {
  opacity: 1;
  transition: all 2s;
}
.ease {
  opacity: 1;
}
.svg-item:hover {
  transition: all .6s;
  transform: scale(1.1);
}
.load {
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(33, 33, 33, .5);
  transition: all .6s;
  font-size: 30px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
