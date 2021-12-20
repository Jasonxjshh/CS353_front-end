<template>
  <div>
    <button @click="whenClick">接收</button>
  </div>
</template>
<script>
export default {
  /*声明 用于对外输出本模块*/
  name: "axiosTest",

  data() {
    return {};
  },
  mounted() {},
  methods: {
    //   测试网址：https://autumnfish.cn/api/joke/
    //   http://xjs.free.idcfengye.com/get
    whenClick() {
      this.$axios
        .get("https://autumnfish.cn/api/joke/")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
