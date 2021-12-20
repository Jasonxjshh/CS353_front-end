<template>
  <div class="Echarts" style="margin-top: -50px">
    <!-- {{ sid }} -->
    <!-- <div
      id="gauge"
      style="
        display: inline-block;
        width: 400px;
        height: 400px;
        margin-left: 50px;
        margin-top: 20px;
      "
    ></div> -->
    <div
      id="lineChart"
      style="
        display: inline-block;
        width: 600px;
        height: 250px;
        margin-left: 50px;
        padding: 40px;
      "
    ></div>
  </div>
</template>
<script>
// import echarts from "echarts";
import * as echarts from "echarts";
export default {
  name: "temperatureComponent",
  props: ["sid"],
  data() {
    return {
      temperature: 0,
      timer: "",
      data1:{
        name: "",
        value: []
      },
    };
  },
  methods: {
    // getAxios() {
    //   // console.log("----------this.sid-----------");
    //   // console.log(this.sid);// sensor name
    //   var that = this;
    //   this.$axios
    //     .get("http://121.199.73.186:8080/sensorData/get/" + that.sid)
    //     .then((res) => {
    //       console.log("--------------res-----------");
    //       console.log(res);
    //       this.temperature = res.data.data.temperature;
    //       this.myEcharts();
    //       // this.myEcharts2();
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
      myEcharts() {
            
      var that = this;
      this.timer = setInterval(function () {
        // const random = +(Math.random() * 60).toFixed(2);
        that.$axios
          // http://121.199.73.186:8080/sensorData/get/SCD30_Jason
          // .get("http://121.199.73.186:8080/sensorData/showAll")
          .get("http://121.199.73.186:8080/sensorData/toGet/" + that.sid + "/temperature")
          .then((res) => {
            console.log("--------------res!-----------");
            console.log(res);
            // console.log(res);
            // that.data = res.data.data;
            // this.ppm = 20;
            // this.ppm = Math.floor(res.data.data[0].ppm * 0.01);
            // that.temperature = res.data.data;
            // that.humidity = res.data.data.humidity;
            // this.ppm = Math.round(res.data.data[1].ppm) / 100;
            // Math.round(num * 100) / 100
            // console.log("*******temperature!******");
            // console.log(that.temperature);
            that.data1.name = new Date(res.data.data.captureDateTime).toString();
            that.data1.value = [
              new Date(res.data.data.captureDateTime),
              res.data.data.data
            ];
            // console.log("-------------------------");
            // console.log(that.data1);
          })
          .catch((err) => {
            
            console.log(err);
          });
        // console.log(that);
        // console.log(that.temperature);
      //   myChart.setOption({
      //     series: [
      //       {
      //         data: [
      //           {
      //             value: that.temperature,
      //           },
      //         ],
      //       },
      //     ],
      //   });
      // }, 2000);
      // for (var i = 0; i < 5; i++) {
    data.shift();
    data.push(finale());
    // console.log(randomData());
    console.log(finale());
    console.log(randomData());
  // }
  myChart.setOption({
    series: [
      {
        data: data
      }
    ]
  });
}, 2000);
function finale() {
  // console.log(that.data1.value[1]);
  return {
    name: that.data1.name.toString(),
    value: [
      that.data1.value[0],
      that.data1.value[1]
    ]  
  }
}
function randomData() {
        now = new Date(+now + 2*onesecond);
        value = value + Math.random() * 21 - 10;
        // console.log(now);
        return {
          name: now.toString(),
          value: [
            now,
            Math.round(value)
          ]
        };
      }
      
      var chartDom = document.getElementById("lineChart");
      var myChart = echarts.init(chartDom);
      var option;
      let data = [];
      // let before = {
      //     name: now.toString(),
      //     value: [
      //       now,
      //       0
      //     ]
      //   };
      
      let onesecond = 1000;
      let now = new Date();
      let value = Math.random() * 1000;
      for (var i = 0; i < 100; i++) {
        data.push(finale());
      }

      option = {
        title: {
          text: 'temperature'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return (
              date.getHours() +
              '/' +
              (date.getMinutes() + 1) +
              '/' +
              date.getSeconds() +
              ' : ' +
              params.value[1]
            );
          },
          axisPointer: {
            animation: false
            }
          },
          xAxis: {
            type: 'time',
            splitLine: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
              show: false
            }
          },
          series: [
            {
              type: 'line',
              showSymbol: false,
              data: data
            }
          ]
        };






      option && myChart.setOption(option);
    },
    // myEcharts2() {
    //   var chartDom = document.getElementById("lineChart");
    //   var myChart = echarts.init(chartDom);
    //   var option;

    //   option = {
    //     xAxis: {
    //       type: "category",
    //       data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    //     },
    //     yAxis: {
    //       type: "value",
    //     },
    //     series: [
    //       {
    //         data: [50, 45, 65, 45, 50, 51, 54],
    //         type: "line",
    //       },
    //     ],
    //   };

      // option && myChart.setOption(option);
    // },
  },
  mounted() {
    this.myEcharts();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

