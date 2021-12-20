<template>
  <div class="all">
    <div class="header">
      <img src="../assets/criWhite.png" alt="CRI logo" />
      <router-link to="/Start" class="button">return</router-link>
    </div>
    <div class="leftComponent">
      <div class="content">
        <h1>{{ sid }}</h1>
        <p></p>
        <router-link
          :to="{
            name: 'gauge',
          }"
          class="detailsButton"
        >
          gauge
        </router-link>
        <router-link
          :to="{
            name: 'analysize',
          }"
          class="detailsButton"
        >
          analysize
        </router-link>
      </div>
    </div>
    <!-- <detail-right-component :sid = "sid"/> -->
    <keep-alive>
      <router-view :sid="this.sid" />
    </keep-alive>
  </div>
</template>
<script>
import DetailRightComponent from "./detailRightComponent.vue";
export default {
  components: { DetailRightComponent },
  /*声明 用于对外输出本模块*/
  name: "Thedetails",
  data() {
    return {
      msg: "我是details组件",
      sid: 0,
    };
  },
  mounted() {
    this.sid = this.$route.params.sensorId;
    console.log(this.sid);
    // console.log(this.$route.params.sensorId);
  },
  // props: ["sid"],
};
</script>
<style scoped>
.all {
  background-image: url(../assets/bgi.jpg);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-size: 100%;
  /* overflow: hidden; */
}
.header {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: #99c6c7;
  z-index: 2;
}
.all .header img {
  position: absolute;
  left: 20px;
  top: 13px;
  width: 50px;
}
.all .header .button {
  font-family: sans-serif;
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
.leftComponent {
  position: absolute;
  background-color: #fff;
  width: 250px;
  height: 100%;
  z-index: 0;
}
.leftComponent .content {
  margin-top: 70px;
}
.leftComponent .content h1 {
  margin-top: 130px;
  font-size: 20px;
  color: #3c9194;
  font-family: Montserrat, sans-serif;
}
.detailsButton {
  width: 150px;
  position: relative;
  left: 30%;
  /* left: 90%; */
  margin-top: 15px;
  margin-left: 60px;
  transform: translateX(-50%);
  display: block;
  text-decoration: none;
  line-height: 17px;
  white-space: nowrap;
  cursor: pointer;
  background: rgb(63, 153, 156);
  border: 1px solid #dcdfe6;
  color: #fff;
  font-weight: 700;
  -webkit-appearance: none;
  text-align: center;
  outline: none;
  transition: 0.1s;
  padding: 9px 20px;
  font-size: 17px;
  border-radius: 12px;
}
.detailsButton:hover {
  background-color: #fff;
  color: rgb(63, 153, 156);
}
</style>