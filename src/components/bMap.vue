<template>
  <baidu-map id="allmap" class="map"></baidu-map>
</template>

<script>
import geoJson from "../assets/data/mapData.js";
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {};
  },
  mounted() {
    this.setMap();
  },
  methods: {
    setMap() {
      const that = this;
      var map = new BMapGL.Map("allmap"); // 创建Map实例
      map.centerAndZoom(new BMapGL.Point(106.548851, 29.565689), 16); // 初始化地图,设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
      map.setHeading(64.5);
      map.setTilt(60);
      map.setMapStyleV2({
        styleId: "b33dab53343b4f490f605547e3d82f54"
      });
      var point = new BMapGL.Point(106.548851, 29.565689);
      map.setHeading(30);

      var view = new mapvgl.View({
        map: map
      });

      // var grid = new mapvgl.SparkLayer({
      //   color: "rgba(200, 50, 50, 1)",
      //   height: 200,
      //   data: [
      //     {
      //       geometry: {
      //         type: "POINT",
      //         coordinates: [103.858978, 30.782089]
      //       }
      //     }
      //   ]
      // });
      // view.addLayer(grid);

      var sparkData1 = [];
      var sparkData2 = [];
      var sparkData3 = [];
      var randomNum = 40;
      // 随机生成点的偏移尺度，勿修改变量名
      var RANDOM_SIZE = 0.01;

      for (var i = 0; i < randomNum; i++) {
        var coord = [
          point.lng + RANDOM_SIZE * Math.random() - RANDOM_SIZE / 2,
          point.lat + RANDOM_SIZE * Math.random() - RANDOM_SIZE / 2
        ];
        sparkData1.push({
          geometry: {
            type: "Point",
            coordinates: coord
          },
          properties: {
            height: parseInt(600 * Math.random(), 10)
          }
        });
      }

      for (var i = 0; i < randomNum; i++) {
        var coord = [
          point.lng + RANDOM_SIZE * Math.random() - RANDOM_SIZE / 2,
          point.lat + RANDOM_SIZE * Math.random() - RANDOM_SIZE / 2
        ];
        sparkData2.push({
          geometry: {
            type: "Point",
            coordinates: coord
          },
          properties: {
            height: parseInt(600 * Math.random(), 10)
          }
        });
      }

      for (var i = 0; i < randomNum; i++) {
        var coord = [
          point.lng + RANDOM_SIZE * Math.random() - RANDOM_SIZE / 2,
          point.lat + RANDOM_SIZE * Math.random() - RANDOM_SIZE / 2
        ];
        sparkData3.push({
          geometry: {
            type: "Point",
            coordinates: coord
          },
          properties: {
            height: parseInt(600 * Math.random(), 10)
          }
        });
      }

      var sparkLayer1 = new mapvgl.SparkLayer({
        height: function(data) {
          return data.properties.height;
        },
        step: 0.1,
        startTime: 1,
        endTime: 12,
        color: "rgb(255, 153, 51)"
      });
      view.addLayer(sparkLayer1);

      var sparkLayer2 = new mapvgl.SparkLayer({
        height: function(data) {
          return data.properties.height;
        },
        color: "rgb(255, 0, 255)"
      });
      view.addLayer(sparkLayer2);

      var sparkLayer3 = new mapvgl.SparkLayer({
        height: function(data) {
          return data.properties.height;
        },
        step: 0.1,
        startTime: 2,
        endTime: 10,
        color: "rgb(0, 204, 255)"
      });
      view.addLayer(sparkLayer3);

      sparkLayer1.setData(sparkData1);
      sparkLayer2.setData(sparkData2);
      sparkLayer3.setData(sparkData3);

      var data = geoJson;
      var polygons = [];
      var len = data.length;
      for (var i = 0; i < len; i++) {
        var line = data[i];
        var polygon = [];
        var pt = [line[1] * 512, line[2] * 512];
        for (var j = 3; j < line.length; j += 2) {
          pt[0] += line[j] / 100 / 2;
          pt[1] += line[j + 1] / 100 / 2;
          polygon.push([pt[0], pt[1]]);
        }
        polygons.push({
          geometry: {
            type: "Polygon",
            coordinates: [polygon]
          },
          properties: {
            height: line[0] / 2
          }
        });
      }

      var shapeLayer = new mapvgl.ShapeLayer({
        color: [36 / 255, 44 / 255, 60 / 255, 1],
        enablePicked: true, // 是否可以拾取
        selectedIndex: -1, // 选中项
        selectedColor: "#6f9fa7", // 选中项颜色
        autoSelect: true, // 根据鼠标位置来自动设置选中项
        onClick: e => {
          // 点击事件
          console.log(e);
          that.$emit("chooseMapItem", e.dataIndex);
        },
        onMousemove: e => {
          // console.log(e);
        }
      });

      view.addLayer(shapeLayer);
      shapeLayer.setData(polygons);
      map.setDefaultCursor("pointer");
    },
    setYanHua() {}
  }
};
</script>
<style>
.map {
  width: 100vw;
  height: 100vh;
}
</style>