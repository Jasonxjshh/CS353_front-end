<template>
  <div class="all1">
    <div class="Echarts">
      <div class="twoGraph">
        <div id="gauge"></div>
        <div id="gauge3"></div>
      </div>
      <div id="humidityGraph"></div>
    </div>
  </div>
</template>
<script>
// import echarts from "echarts";
import "echarts-liquidfill";
import * as echarts from "echarts";
export default {
  name: "gauge",
  props: ["sid"],
  data() {
    return {
      ppm: 0,
      humidity: 0,
      timer: "",
      timer2: "",
      temperature: 0,
      timer3: "",
      charts: "",
    };
  },
  methods: {
    myEcharts() {
      // console.log("****myechart-ppm****");
      // console.log(this.ppm);
      // 基于准备好的dom，初始化echarts实例
      // var myChart = this.$echarts.init(document.getElementById("gauge"));

      // import * as echarts from "echarts";
      // var chartDom = document.getElementById("gauge");
      // var myChart = this.$echarts.init(document.getElementById("gauge"));
      var myChart = echarts.init(document.getElementById("gauge"));
      var option;

      option = {
        splitNumber: 5,
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "co2",
            type: "gauge",
            min: 1000,
            max: 5000,
            splitNumber: 8,
            progress: {
              show: true,
            },
            detail: {
              valueAnimation: true,
              formatter: "{value}",
              offsetCenter: [0, "30%"],
              color: "#99C6C7",
              fontSize: 20,
              textStyle: {
                fontSize: 15,
              },
            },
            data: [
              {
                value: 0,
                name: "",
              },
            ],
            axisLine: {
              lineStyle: {
                width: 5,
              },
            },
            axisTick: {
              // color: "#fff",
              length: 3,
            },
            lineStyle: {
              color: "#fff",
            },
            axisLabel: {
              textStyle: {
                color: "#999",
                distance: 20,
                fontSize: 10,
              },
            },
            splitLine: {
              length: 10,
              lineStyle: {
                width: 1,
              },
            },
            pointer: {
              length: "50%",
              width: 5,
            },
            itemStyle: {
              color: "#3F999C",
            },
          },
        ],
      };
      var that = this;
      this.timer = setInterval(function () {
        // const random = +(Math.random() * 60).toFixed(2);
        // console.log("****that*****");
        // console.log(that);
        // console.log("****that-ppm*****");
        // console.log(that.ppm);
        // this.getAxios();
        // var that = this;
        that.$axios
          // http://121.199.73.186:8080/sensorData/get/SCD30_Jason
          // .get("http://121.199.73.186:8080/sensorData/showAll")
          .get("http://121.199.73.186:8080/sensorData/get/" + that.sid)
          .then((res) => {
            // console.log("--------------res!-----------");
            // console.log(res);
            // that.data = res.data.data;
            // this.ppm = 20;
            // this.ppm = Math.floor(res.data.data[0].ppm * 0.01);
            that.ppm = res.data.data.ppm;
            // that.humidity = res.data.data.humidity;
            // this.ppm = Math.round(res.data.data[1].ppm) / 100;
            // Math.round(num * 100) / 100
            // console.log("*******ppm!******");
            // console.log(that.ppm);
          })
          .catch((err) => {
            console.log(err);
          });
        myChart.setOption({
          series: [
            {
              data: [
                {
                  value: that.ppm,
                },
              ],
            },
            {
              data: [
                {
                  value: that.ppm,
                },
              ],
            },
          ],
        });
      }, 2000);

      option && myChart.setOption(option);
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    myEcharts2() {
      var chartDom = document.getElementById("gauge2");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        series: [
          {
            type: "gauge",
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 100,
            splitNumber: 10,
            itemStyle: {
              color: "#5470C6",
            },
            progress: {
              show: true,
              width: 30,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                width: 30,
              },
            },
            axisTick: {
              distance: -45,
              splitNumber: 5,
              lineStyle: {
                width: 2,
                color: "#999",
              },
            },
            splitLine: {
              distance: -52,
              length: 14,
              lineStyle: {
                width: 3,
                color: "#999",
              },
            },
            axisLabel: {
              distance: -10,
              color: "#999",
              fontSize: 15,
            },
            anchor: {
              show: false,
            },
            title: {
              show: false,
            },
            detail: {
              valueAnimation: true,
              width: "60%",
              lineHeight: 30,
              borderRadius: 8,
              offsetCenter: [0, "-15%"],
              fontSize: 22,
              fontWeight: "bolder",
              formatter: "{value} %",
              color: "auto",
            },
            data: [
              {
                value: 0,
              },
            ],
          },
          {
            type: "gauge",
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 100,
            itemStyle: {
              color: "#",
            },
            progress: {
              show: true,
              width: 8,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            detail: {
              show: false,
            },
            data: [
              {
                value: 0,
              },
            ],
          },
        ],
      };
      var that = this;
      this.timer2 = setInterval(function () {
        that.$axios
          .get("http://121.199.73.186:8080/sensorData/get/" + that.sid)
          .then((res) => {
            that.humidity = res.data.data.humidity;
          })
          .catch((err) => {
            console.log(err);
          });
        myChart.setOption({
          series: [
            {
              data: [
                {
                  value: that.humidity,
                },
              ],
            },
            {
              data: [
                {
                  value: that.humidity,
                },
              ],
            },
          ],
        });
      }, 2000);

      option && myChart.setOption(option);
    },
    getAxios() {
      var that = this;
      this.$axios
        .get("http://121.199.73.186:8080/sensorData/get/" + that.sid)
        .then((res) => {
          // console.log("--------------res-----------");
          // console.log(res);
          this.humidity = res.data.data.humidity;
          this.init("humidityGraph");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    init(id) {
      var charts = echarts.init(document.getElementById(id));
      // var that = this;
      let value = this.humidity * 0.01;
      let data = [value, value, value];
      let option = {
        title: {
          text: (value * 100).toFixed(0) + "{a|%}",
          textStyle: {
            fontSize: 42,
            fontFamily: "Montserrat,Microsoft Yahei",
            fontWeight: "400",
            color: "#fff",
            rich: {
              a: {
                fontSize: 28,
              },
            },
          },
          x: "center",
          y: "35%",
        },
        graphic: [
          {
            type: "group",
            left: "center",
            top: "64%",
            children: [
              {
                type: "text",
                z: 100,
                left: "10",
                top: "middle",
                style: {
                  fill: "#F2F2F2",
                  text: "humidity",
                  font: "12px Montserrat,Microsoft YaHei",
                },
              },
            ],
          },
        ],
        series: [
          {
            type: "liquidFill",
            radius: "80%",
            center: ["50%", "50%"],
            //  shape: 'roundRect',
            data: data,
            backgroundStyle: {
              color: {
                type: "linear",
                x: 1,
                y: 0,
                x2: 0.5,
                y2: 1,
                colorStops: [
                  {
                    offset: 1,
                    color: "rgba(68, 145, 253, 0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(68, 145, 253, .25)",
                  },
                  {
                    offset: 0,
                    color: "rgba(68, 145, 253, 1)",
                  },
                ],
                globalCoord: false,
              },
            },
            outline: {
              borderDistance: 0,
              itemStyle: {
                borderWidth: 20,
                borderColor: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  // framework
                  y2: 1,
                  colorStops: [
                    // {
                    //   offset: 0,
                    //   color: "rgba(153,198,199, 1)",
                    // },
                    // {
                    //   offset: 0.5,
                    //   color: "rgba(153,198,199, 1)",
                    // },
                    {
                      offset: 1,
                      color: "rgba(247,247,247, .9)",
                    },
                  ],
                  // globalCoord: false,
                },
                // shadowBlur: 10,
                // shadowColor: "#000",
              },
            },
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  // wave
                  {
                    offset: 1,
                    color: "rgba(58, 71, 212, 0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(31, 222, 225, .2)",
                  },
                  {
                    offset: 0,
                    color: "rgba(31, 222, 225, 1)",
                  },
                ],
                globalCoord: false,
              },
            },
            label: {
              normal: {
                formatter: "",
              },
            },
          },
        ],
      };
      // this.timer2 = setInterval(function () {
      //   that.$axios
      //     .get("http://121.199.73.186:8080/sensorData/get/" + that.sid)
      //     .then((res) => {
      //       that.humidity = res.data.data.humidity;
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      //   this.value = that.humidity;
      //   charts.setOption({
      //     series: [
      //       {
      //         data: [
      //           {
      //             value: that.humidity,
      //           },
      //         ],
      //       },
      //       {
      //         data: [
      //           {
      //             value: that.humidity,
      //           },
      //         ],
      //       },
      //     ],
      //   });
      // }, 2000);
      // 使用刚指定的配置项和数据显示图表。
      // charts.setOption(option);
      option && charts.setOption(option);
    },
    myEcharts3() {
      var chartDom = document.getElementById("gauge3");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        series: [
          {
            type: "gauge",
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            splitNumber: 10,
            itemStyle: {
              color: "#3F999C",
            },
            progress: {
              show: true,
              width: 20,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                width: 20,
              },
            },
            axisTick: {
              distance: -35,
              splitNumber: 5,
              lineStyle: {
                width: 1,
                color: "#2B686A",
              },
            },
            splitLine: {
              distance: -30,
              length: 7,
              lineStyle: {
                width: 1,
                color: "#999",
              },
            },
            axisLabel: {
              distance: -10,
              color: "#999",
              fontSize: 10,
            },
            anchor: {
              show: false,
            },
            title: {
              show: false,
            },
            detail: {
              valueAnimation: true,
              width: "60%",
              lineHeight: 30,
              borderRadius: 8,
              offsetCenter: [0, "-15%"],
              fontSize: 18,
              fontWeight: "bolder",
              formatter: "{value} °C",
              color: "#99C6C7",
            },
            data: [
              {
                value: 0,
              },
            ],
          },
          {
            type: "gauge",
            center: ["50%", "60%"],
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 60,
            itemStyle: {
              color: "#99C6C7",
            },
            progress: {
              show: true,
              width: 8,
            },
            pointer: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            detail: {
              show: false,
            },
            data: [
              {
                value: 0,
              },
            ],
          },
        ],
      };
      var that = this;
      this.timer3 = setInterval(function () {
        that.$axios
          .get("http://121.199.73.186:8080/sensorData/get/" + that.sid)
          .then((res) => {
            that.temperature = res.data.data.temperature;
          })
          .catch((err) => {
            console.log(err);
          });
        myChart.setOption({
          series: [
            {
              data: [
                {
                  value: that.temperature,
                },
              ],
            },
            {
              data: [
                {
                  value: that.temperature,
                },
              ],
            },
          ],
        });
      }, 2000);

      option && myChart.setOption(option);
    },
  },

  mounted() {
    this.myEcharts();
    // this.myEcharts2();
    this.myEcharts3();
    // this.init("humidityGraph");
    // this.getAxios();
    this.timer2 = setInterval(this.getAxios, 2000);
    // this.getAxios();
    // console.log("3242434324242");
    // console.log(this.$route.matched[0]);
    // console.log(this.$route.params.sensorId);
    // console.log($attrs.sid);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    clearInterval(this.timer2);
    clearInterval(this.timer3);
  },
};
</script>
<style scoped>
.all1 {
  width: fit-content;
  height: fit-content;
  background-image: none;
}
.Echarts {
  display: block;
  text-align: center;
  margin-left: 70px;
  margin-top: 20px;
  height: 320px;
  width: 900px;
  cursor: default;
}
#gauge {
  width: 310px;
  height: 310px;
  position: relative;
}
#gauge3 {
  /* padding-left: 350px; */
  position: relative;
  width: 300px;
  height: 280px;
  top: -300px;
  left: 320px;
}
#humidityGraph {
  /* padding-left: 350px; */
  position: relative;
  top: -550px;
  left: 680px;
  width: 210px;
  height: 210px;
}
</style>

