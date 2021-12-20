<template>
  <div class="begin">
    <div id="holder">
      <div>
        <div class="bgillu">
          <div class="bg">
            <p class="cri">
              <img src="../assets/cri.png" alt="CRI logo" />{{ cri }}
            </p>
            <h4>{{ msg }}</h4>
            <p>{{ cridetail }}</p>
            <router-link to="/Start" id="aboutButton">start</router-link>
          </div>
          <!-- src='../assets/illustration4.png' @mouseover="changeImg" 
          v-bind:src="
              illushow
                ? '../assets/illustration4.png'
                : '../assets/illustration2.png'
            "-->
          <div class="twoImg">
            <img class="illu" src="../assets/illustration2.png" alt="" />
            <img class="illu2" src="../assets/illustration4.png" alt="" />
          </div>
        </div>
        <div class="firSec">
          <div class="firstBox"><p v-html="desc" class="text1"></p></div>
          <div class="secBox"><p v-html="teamdesc" class="text2"></p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeginningPage",
  data() {
    return {
      cri: "Climate Response Ireland",
      msg: "Pollution Intensity Monitoring System for Residential Heating",
      cridetail:
        "CRI will initiate nationwide action within communities to provide visibility on our environmental challenges by accelerating citizen science based research, building community knowledge and awareness, creating change through data production, analytics, communication and active engagement in policy-making and planning.",
      teamdesc:
        "○ Developed by eighteenth team.<br/>○ Members are Jiasheng Xu, Yinxuan Feng, Zixi Chen, Deyin Huang, Hui Yang, and Yilin Xu.",
      desc: "○ Team 18",
    };
  },
  mounted() {},
  beforeDestroy() {},
  methods: {},
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.begin {
  background-image: url(../assets/bgi.jpg);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-size: 100%;
  background-repeat: repeat;
  /* overflow-x: hidden; */
  overflow-y: scroll;
}
.begin::-webkit-scrollbar {
  display: none;
}
.bg {
  float: left;
  /* display: inline-block; */
  margin: 0px;
  margin-top: 3.25rem;
  margin-left: 10.25rem;
  /* overflow-x: hidden; */
  /* overflow: auto; */
  /* white-space: nowrap; */
}
.twoImg {
  float: left;
  /* position: absolute; */
  /* display: inline-block; */
  margin-left: -9.8rem;
  margin-top: 6.2rem;
  /* margin-right: 6.25rem; */
  transition: all 0.5s;
}
.illu {
  position: relative;
  left: 0;
  top: 0;
  opacity: 1;
  transition: all 0.5s;
}
.illu2 {
  transform: translateX(-468px);
  position: relative;
  left: 0;
  top: 0;
  opacity: 0;
  transition: all 0.5s;
}
.illu:hover {
  opacity: 0;
}
.illu2:hover {
  opacity: 1;
}
.bgillu {
  width: 106rem;
}
.cri {
  margin-left: -2rem;
  color: #2fa047;
  font-size: 1.25rem;
}
.cri img {
  width: 1.5rem;
  margin-right: 0.5rem;
}
h4 {
  font-family: Montserrat, sans-serif, Arial;
  text-align: left;
  margin-top: 1.25rem;
  margin-left: 0rem;
  width: 47rem;
  font-size: 2.3rem;
  font-weight: 1000;
  line-height: 3.3rem;
}
p {
  font-family: Montserrat, sans-serif;
  text-align: left;
  margin-top: 1.6rem;
  margin-left: 2rem;
  width: 33.75rem;
  font-size: 0.9rem;
  line-height: 1.25rem;
  color: #707575;
}
#aboutButton {
  font-size: 17px;
  color: rgb(255, 255, 255);
  background-color: #3f999c;
  font-family: Montserrat, sans-serif, Arial;
  margin-top: 2.4rem;
  text-align: center;
  text-decoration: none;
  display: block;
  width: 10.625rem;
  height: 2.5rem;
  line-height: 2.5rem;
  border-radius: 1.25rem;
  outline: none;
  box-shadow: -6px 6px 6px rgba(143, 173, 173, 0.25);
  /* box-shadow: 6px 6px 6px rgba(148, 140, 140, 0.25),
    -6px -6px 6px rgba(243, 241, 241, 0.9),
    inset 2px 2px 5px rgba(136, 132, 132, 0.1),
    inset 2px -2px 5px rgba(161, 161, 161, 0.94); */
  margin-left: 12.5rem;
  transition: all 1s;
}
#aboutButton:hover {
  background-color: #5187cf;
}
.firSec {
  width: 100rem;
  height: 10rem;
  float: left;
  margin-top: 2.4rem;
  overflow: hidden;
}
.firstBox {
  float: left;
  margin-left: 7.25rem;
  background-color: #fff;
  width: 12.5rem;
  height: 100%;
  box-shadow: -6px 6px 6px rgba(143, 173, 173, 0.1);
}
.secBox {
  float: left;
  margin-left: 2.5rem;
  background-color: rgba(63, 153, 156, 0.5);
  width: 57rem;
  height: 100%;
  box-shadow: -6px 6px 6px rgba(143, 173, 173, 0.1);
}
.text2 {
  color: #fff;
  margin-left: 3rem;
  width: 55rem;
  font-size: 0.6rem;
  font-weight: 200;
}
.text1 {
  /* color: #fff; */
  margin-left: 3rem;
  width: 8rem;
  font-size: 0.6rem;
  font-weight: 200;
}
</style>
