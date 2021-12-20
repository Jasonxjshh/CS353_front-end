<template>
  <div class="all">
    <div class="header">
      <img src="../assets/criWhite.png" alt="CRI logo" />
      <router-link to="/" class="button">return</router-link>
    </div>
    <div class="content">
      <div class="topBox">
        <table>
          <thead>
            <td>Sensor number</td>
          </thead>
          <tbody>
            <td>
              <svg
                t="1637572175398"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1634"
                width="50"
                height="50"
              >
                <path
                  d="M756.0704 948.224H269.824c-107.264 0-194.2016-86.9376-194.2016-194.2016V267.7248c0-107.264 86.9376-194.2016 194.2016-194.2016h486.2464c107.264 0 194.2016 86.9376 194.2016 194.2016v486.2464c0 107.3152-86.9376 194.2528-194.2016 194.2528z"
                  fill="#6FA7FF"
                  p-id="1635"
                ></path>
                <path
                  d="M716.9536 735.5904H314.7776c-69.12 0-125.3888-56.2688-125.3888-125.3888v-266.24c0-69.12 56.2688-125.3888 125.3888-125.3888h402.176c69.12 0 125.3888 56.2688 125.3888 125.3888v104.3456c0 14.1312-11.4688 25.6-25.6 25.6s-25.6-11.4688-25.6-25.6V344.0128c0-40.9088-33.28-74.1888-74.1888-74.1888H314.7776c-40.9088 0-74.1888 33.28-74.1888 74.1888v266.24c0 40.9088 33.28 74.1888 74.1888 74.1888h402.176c40.9088 0 74.1888-33.28 74.1888-74.1888 0-14.1312 11.4688-25.6 25.6-25.6s25.6 11.4688 25.6 25.6c0 69.12-56.2688 125.3376-125.3888 125.3376zM692.5824 820.5824H339.1488c-14.1312 0-25.6-11.4688-25.6-25.6s11.4688-25.6 25.6-25.6h353.4336c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6z"
                  fill="#F7F8F8"
                  p-id="1636"
                ></path>
                <path
                  d="M371.8656 552.8576a25.60512 25.60512 0 0 1-18.2784-43.52l84.992-86.7328c17.6128-17.9712 46.592-18.2784 64.6144-0.6656l66.4064 65.0752 71.9872-73.1648a25.62048 25.62048 0 0 1 36.1984-0.3072c10.0864 9.9328 10.24 26.112 0.3072 36.1984l-75.8272 77.1072c-17.6128 17.92-46.592 18.176-64.5632 0.6144L471.296 462.3872l-81.1008 82.7904c-5.0176 5.12-11.6736 7.68-18.3296 7.68z"
                  fill="#F7F8F8"
                  p-id="1637"
                ></path>
              </svg>
              <span>{{ AllSensorNum }}</span>
            </td>
          </tbody>
        </table>
        <table>
          <thead>
            <td>Working sensor</td>
          </thead>
          <tbody>
            <td>
              <svg
                t="1637572448048"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1774"
                width="50"
                height="50"
              >
                <path
                  d="M759.9616 948.224H273.7152c-107.264 0-194.2016-86.9376-194.2016-194.2016V267.7248c0-107.264 86.9376-194.2016 194.2016-194.2016h486.2464c107.264 0 194.2016 86.9376 194.2016 194.2016v486.2464c0.0512 107.3152-86.9376 194.2528-194.2016 194.2528z"
                  fill="#A46FFF"
                  p-id="1775"
                ></path>
                <path
                  d="M714.1888 805.8368H319.5392c-71.8848 0-130.3552-61.184-130.3552-136.3968v-315.904c0-75.2128 58.4704-136.3968 130.3552-136.3968h394.6496c71.8848 0 130.3552 61.184 130.3552 136.3968v166.8096c0 13.9264-11.3152 25.2416-25.2416 25.2416-13.9264 0-25.2416-11.3152-25.2416-25.2416V353.536c0-47.36-35.84-85.9136-79.9232-85.9136H319.5392c-44.032 0-79.9232 38.5536-79.9232 85.9136v315.904c0 47.36 35.84 85.9136 79.9232 85.9136h394.6496c44.032 0 79.9232-38.5536 79.9232-85.9136 0-13.9264 11.3152-25.2416 25.2416-25.2416 13.9264 0 25.2416 11.3152 25.2416 25.2416-0.0512 75.2128-58.5216 136.3968-130.4064 136.3968z"
                  fill="#F7F8F8"
                  p-id="1776"
                ></path>
                <path
                  d="M386.5088 678.912c-13.9264 0-25.2416-11.3152-25.2416-25.2416V551.936c0-13.9264 11.3152-25.2416 25.2416-25.2416s25.2416 11.3152 25.2416 25.2416v101.7344c0 13.9264-11.264 25.2416-25.2416 25.2416zM516.864 678.912c-13.9264 0-25.2416-11.3152-25.2416-25.2416V368.8448c0-13.9264 11.3152-25.2416 25.2416-25.2416s25.2416 11.3152 25.2416 25.2416v284.8256c0 13.9264-11.3152 25.2416-25.2416 25.2416zM646.144 678.912c-13.9264 0-25.2416-11.3152-25.2416-25.2416V448.9728c0-13.9264 11.3152-25.2416 25.2416-25.2416 13.9264 0 25.2416 11.3152 25.2416 25.2416v204.6976c0 13.9264-11.3152 25.2416-25.2416 25.2416z"
                  fill="#F7F8F8"
                  p-id="1777"
                ></path>
              </svg>
              <span>{{ ActiveSensorNum }}</span>
            </td>
          </tbody>
        </table>
      </div>
      <!-- <div class="topBox2"></div> -->
      <table class="gridtable">
        <thead>
          <tr>
            <th>sensor name</th>
            <th>isWorking</th>
            <th>start</th>
            <th>stop</th>
            <th>co<sub>2</sub></th>
            <th>temperature</th>
            <th>humidity</th>
            <th>view</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(info, index) in dataShow" :key="info.id">
            <td v-text="info.sensorName"></td>
            <td><div :class="info.status == 200 ? 'green' : 'red'"></div></td>
            <td>
              <!-- <router-link :to="{ name: 'axiosTest' }"> -->
              <button
                class="startButton"
                @click="startButton(info.sensorName, index)"
              ></button>
              <!-- </router-link> -->
            </td>
            <td>
              <button
                class="stopButton"
                @click="stopButton(info.sensorName, index)"
              ></button>
            </td>
            <td>{{ info.ppm }} ppm</td>
            <td>{{ info.temperature }}°C</td>
            <td>{{ info.humidity }}%</td>
            <td>
              <!-- <router-link to="{name:'Thedetails',query:{sensorId:1}}"> -->
              <!-- <router-link to="{name:'Thedetails',params:{id:1}}"> -->
              <router-link
                :to="{
                  name: 'Thedetails',
                  params: { sensorId: info.sensorName },
                }"
                class="viewMore"
              >
                <!-- <router-link to="/details"> -->
                details
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="buttonPage">
        <br />
        <button @click="prePage" class="pageButton">←</button>
        <button @click="nextPage" class="pageButton">→</button>
      </div>
    </div>
  </div>
</template>
<script>
import package1 from "./package1.json";
export default {
  /*声明 用于对外输出本模块*/
  name: "Start",
  data() {
    return {
      data: [],
      // 所有页面的数据
      totalPage: [],
      // 每页显示数量
      pageSize: 7,
      // 共几页
      pageNum: 2,
      // 当前显示的数据
      dataShow: [
        {
          sensorName: "sensor",
          status: "400",
          ppm: "--",
          temperature: "--",
          humidity: "--",
        },
      ],
      // 默认当前显示第一页
      currentPage: 0,
      timer: "",
      value: 0,
      AllSensorNum: 0,
      ActiveSensorNum: 0,
    };
  },
  mounted() {
    this.start();
    this.timer = setInterval(this.start, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  props: [],
  methods: {
    startButton(sn, index) {
      console.log(sn, "start");
      let postData = this.$qs.stringify({
        sensorName: sn,
        postCode: 1,
      });
      // this.$axios({
      //   method: "post",
      //   url: "/",
      //   data: postData,
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      //     Authorization: "Bearer " + token,
      //   },
      // }).then((res) => {});
      this.$axios
        .post(
          "http://121.199.73.186:8080/sensorData/changeState/" + sn,
          postData
        )
        .then((rsp) => {});
      // this.$set(this.dataShow, "200", this.dataShow[index].status);
      // this.dataShow[index] = {
      //   sensorName: "sensor",
      //   status: "200",
      //   ppm: "--",
      //   temperature: "--",
      //   humidity: "--",
      // };
    },
    stopButton(sn, index) {
      console.log(sn, "stop");
      let postData = this.$qs.stringify({
        sensorName: sn,
        postCode: 2,
      });
      this.$axios
        .post(
          "http://121.199.73.186:8080/sensorData/changeState/" + sn,
          postData
        )
        .then((rsp) => {});
    },
    start() {
      // console.log("Start button had been clicked!");
      // http://121.199.73.186:8080/sensorData/get
      // http://xjs.free.idcfengye.com/get
      this.$axios
        .get("http://121.199.73.186:8080/sensorData/showAll")
        .then((res) => {
          // console.log(res);
          this.data = res.data.data;
          this.AllSensorNum = res.data.msg[3];
          this.ActiveSensorNum = res.data.msg[1];
          // console.log("******start-data*******");
          // console.log(this.data);
          // 请求的获取会比较慢，所以要让fanye方法紧随其后
          this.fanye();
          // this.totalPage = res.data.data;
        })
        .catch((err) => {
          console.log("!!!!!!!");
          console.log(err);
        });
    },
    fanye() {
      // console.log("******fanye-data-length*******");
      // console.log(this.data.length);
      // 根据后台数据的条数和每页显示数量算出一共几页,得0时设为1 ;
      this.pageNum = Math.ceil(this.data.length / this.pageSize) || 1;
      for (let i = 0; i < this.pageNum; i++) {
        // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
        // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为5， 则第一页是1-5条，即slice(0,5)，第二页是6-10条，即slice(5,10)...
        this.totalPage[i] = this.data.slice(
          this.pageSize * i,
          this.pageSize * (i + 1)
        );
      }
      // 获取到数据后显示第一页内容
      this.dataShow = this.totalPage[this.currentPage];
      // console.log("******fanye-dataShow*******");
      // console.log(this.dataShow);
      // console.log("******fanye-data*******");
      // console.log(this.data);
    },
    // 下一页
    nextPage() {
      if (this.currentPage === this.pageNum - 1) return;
      this.dataShow = this.totalPage[++this.currentPage];
    },
    // 上一页
    prePage() {
      if (this.currentPage === 0) return;
      this.dataShow = this.totalPage[--this.currentPage];
    },
  },
};
</script>
<style scoped>
/* * {
  margin: 0;
  padding: 0;
} */
.all {
  background-image: url(../assets/bgi.jpg);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-size: 100%;
}
.header {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 70px;
  /* background-color: rgba(63, 153, 156, 0.5); */
  background-color: #99c6c7;
}
.all .header img {
  position: absolute;
  left: 20px;
  top: 13px;
  width: 50px;
}
.all .header .button {
  font-family: Montserrat, sans-serif;
  position: absolute;
  top: 17px;
  right: 20px;
  text-decoration: none;
  display: inline-block;
  line-height: 17px;
  white-space: nowrap;
  cursor: pointer;
  background: #3f999c;
  color: #fff;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  font-weight: 800;
  padding: 9px 20px;
  font-size: 14px;
  border-radius: 30px;
}
.topBox {
  display: inline-block;
  margin-top: 20px;
  width: 325px;
  padding: 10px;
  font-family: Montserrat, sans-serif;
  font-size: 17px;
  color: #80a095;
  border: 0;
  border-radius: 15px;
  /* background-color: rgb(255, 255, 255); */
}
.topBox2 {
  display: inline-block;
  height: 100px;
  width: 300px;
}
.topBox table {
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
}
.topBox table:first-child {
  border-right: 2px solid #d8d6d6;
}
.topBox table span {
  display: inline-block;
  margin-left: 0;
  font-size: 30px;
  color: #3f999c;
}
.content {
  margin-top: 70px;
}
table.gridtable {
  margin: 0 auto;
  margin-top: 10px;
  font-family: Montserrat, sans-serif;
  font-size: 17px;
  /* change */
  color: #333333;
  border: 0;
  /* border-collapse: collapse; */
}
table.gridtable th {
  padding: 10px 22px 10px 22px;
  background-color: #dedede;
}
table.gridtable td {
  padding: 10px 22px 10px 22px;
  background-color: #ffffff;
}
table.gridtable thead tr th:first-child {
  border-top-left-radius: 30px;
}
table.gridtable thead tr th:last-child {
  border-top-right-radius: 30px;
}
table.gridtable tbody tr:last-child td:first-child {
  border-bottom-left-radius: 30px;
}
table.gridtable tbody tr:last-child td:last-child {
  border-bottom-right-radius: 30px;
}
.red {
  /* already stop */
  display: block;
  position: relative;
  left: 50%;
  margin-left: -10px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 0;
  outline: none;
  background-color: #b81e19;
}
.green {
  /* is running */
  display: block;
  position: relative;
  left: 50%;
  margin-left: -10px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #3f999c;
  border: 0;
  outline: none;
}
.startButton {
  /* click to start */
  display: block;
  position: relative;
  left: 50%;
  margin-left: -10px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 3px solid rgb(35, 126, 35);
  outline: none;
}

.stopButton {
  /* click to stop */
  display: block;
  position: relative;
  left: 50%;
  margin-left: -10px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 3px solid rgb(126, 35, 35);
  outline: none;
}

.viewMore {
  text-decoration: none;
  color: #fff;
  background-color: #3f999c;
  border-radius: 30px;
  font-size: 13px;
  padding: 3px 10px 3px 10px;
  width: 50px;
}
.pageButton {
  border: 0;
  background-color: #fff;
  border-radius: 5px;
  font-family: Montserrat, sans-serif;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  background: #99c6c7;
  color: #fff;
  -webkit-appearance: none;
  outline: none;
  font-weight: 800;
  padding: 3px 10px 3px 10px;
  font-size: 14px;
}
</style>
