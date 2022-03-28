<template>
  <div id="main"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import * as echarts from "../../node_modules/echarts";
// import '../../node_modules/echarts-leaflet/dist/echarts-leaflet';
// import '../../node_modules/echarts/lib/chart/scatter';
import "leaflet/dist/leaflet.css";
export default defineComponent({
  name: "testUI",
  setup() {
    onMounted(() => {
      let myChart = echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {
          trigger: 'item'
        },
        leaflet: {
          center: [121, 24],
          zoom: 7,
          roam: true,
          tiles: [{
            label: 'OpenStreetMap',
            urlTemplate: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            options: {
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
            }
          }]
        },
        series: [{
          name: 'pm2.5',
          type: 'scatter',
          coordinateSystem: 'leaflet',
          data: "121, 24",
          symbolSize: function () {
            return 10;
          },
        }
        ],
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    });

    return {};
  },
});
</script>
<style scoped>
#main {
  width: 600px;
  height: 400px;
  margin: 0;
}
</style>