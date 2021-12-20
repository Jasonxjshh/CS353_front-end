<template>
  <div class="rightComponent">
    <keep-alive>
      <gauge :sid="this.sid" />
    </keep-alive>
    <div class="linechart">
      <!-- 体现折线图 -->
      <div style="float: left">
        <keep-alive>
          <router-view :sid="this.sid"></router-view>
        </keep-alive>
      </div>
      <div style="float: left">
        <router-link
          :to="{
            name: 'co2Component',
          }"
          class="detailsButton"
        >
          co<sub>2</sub>
        </router-link>
        <!-- params: { sensorId: this.$route.params.sensorId }, -->
        <router-link
          :to="{
            name: 'temperatureComponent',
          }"
          class="detailsButton"
        >
          temperature
        </router-link>
        <!-- v-bind="$attrs" -->
        <router-link
          :to="{
            name: 'humidityComponent',
          }"
          class="detailsButton"
        >
          humidity
        </router-link>
      </div>
      .
    </div>
  </div>
</template>

<script>
import gauge from "./gauge.vue";
export default {
  components: { gauge },
  name: "rightComponent",
  props: ["sid"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.linechart {
  padding-top: 10px;
  margin-top: -30px;
  margin-left: 20px;
}
.rightComponent .linechart .detailsButton {
  width: 150px;
  /* position: relative;
  left: 90%; */
  margin-top: 15px;
  margin-left: 60px;
  transform: translateX(-50%);
  display: block;
  text-decoration: none;
  line-height: 17px;
  white-space: nowrap;
  cursor: pointer;
  background: rgb(95, 177, 156);
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
.rightComponent .linechart .detailsButton:hover {
  background-color: rgb(228, 228, 228);
  color: rgb(19, 111, 114);
}
.rightComponent {
  position: absolute;
  left: 300px;
  padding-top: 70px;
}
</style>