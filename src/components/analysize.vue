<template>
  <div class="all">
    <div class="block">
      <el-date-picker
        v-model="value"
        type="datetimerange"
        start-placeholder="Start date"
        end-placeholder="End date"
        :default-time="['12:00:00']"
        class="time"
        value-format="yyyy-MM-dd HH:mm:ss"
      >
      </el-date-picker>
      <button @click="getdata()" class="subbutton">submit</button>
    </div>
    <table>
      <thead>
        <tr>
          <th colspan="3">evn</th>
          <th colspan="3">post</th>
          <th colspan="3">pre</th>
          <th rowspan="2">delete</th>
        </tr>
        <tr>
          <th>CO2</th>
          <th>temperature</th>
          <th>humidity</th>
          <th>CO2</th>
          <th>temperature</th>
          <th>humidity</th>
          <th>CO2</th>
          <th>temperature</th>
          <th>humidity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <!-- <button @click="deletedata()"></button> -->
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "analysize",
  props: ["sid"],
  data() {
    return {
      value: [],
    };
  },
  methods: {
    getdata() {
      console.log(this.value);
      this.axios({
        url: "http://121.199.73.186:8080/sensorData/toAnalyze/" + this.sid,
        method: "post",
        params: {
          starttime: this.value[0],
          endtime: this.value[1],
        },
      }).then((res) => {
        console.log(res);
        var tbody = document.querySelector("tbody");
        var tr = document.createElement("tr");
        for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 3; j++) {
            var td = document.createElement("td");
            if (i == 0) {
              if (res.data.data.evn[j] == 0) {
                td.innerHTML = "-";
              } else {
                td.innerHTML = parseFloat(res.data.data.evn[j]).toFixed(2);
              }
            }
            if (i == 1) {
              if (res.data.data.post[j] == 0) {
                td.innerHTML = "-";
              } else {
                td.innerHTML = parseFloat(res.data.data.post[j]).toFixed(2);
              }
            }
            if (i == 2) {
              if (res.data.data.pre[j] == 0) {
                td.innerHTML = "-";
              } else {
                td.innerHTML = parseFloat(res.data.data.pre[j]).toFixed(2);
              }
            }
            td.style = `width: 30px;
                        height: 25px;
                        padding: 10px 22px 10px 22px;
                        background-color: #ffffff;`;
            tr.appendChild(td);
          }
        }
        var td = document.createElement("td");
        td.style = `width: 30px;
                    height: 25px;
                    padding: 10px 22px 10px 22px;
                    background-color: #ffffff;`;
        td.innerHTML = '<button @click="this.deletedata()">delete</button>';
        tr.appendChild(td);
        tbody.removeChild(tbody.children[7]);
        tbody.insertBefore(tr, tbody.children[0]);
        var button = document.querySelectorAll("button");
        button[1].onclick = function () {
          var tbody = document.querySelector("tbody");
          tbody.removeChild(this.parentNode.parentNode);
          var tr = document.createElement("tr");
          for (var i = 0; i < 10; i++) {
            var td = document.createElement("td");
            td.style = `width: 30px;
                    height: 25px;
                    padding: 10px 22px 10px 22px;
                    background-color: #ffffff;`;
            tr.appendChild(td);
          }
          tbody.appendChild(tr);
        };
      });
    },
    deletedata() {},
  },
};
</script>

<style scoped>
.all {
  position: absolute;
  left: 250px;
  padding-top: 70px;
}
.time {
  margin-top: 50px;
  width: 65%;
}
.subbutton {
  font-family: sans-serif;
  border: none;
  text-decoration: none;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  background: #70babb;
  color: #fff;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  font-weight: 800;
  padding: 9px 20px;
  font-size: 12px;
  border-radius: 30px;
}
table {
  margin: 0 auto;
  margin-top: 30px;
  font-family: Montserrat, sans-serif;
  font-size: 15px;
  color: #333333;
  border: 0;
}
table th {
  width: 30px;
  height: 25px;
  padding: 5px 10px 5px 10px;
  background-color: #dedede;
}
table td {
  width: 30px;
  height: 25px;
  padding: 5px 10px 5px 10px;
  background-color: #ffffff;
}
table thead tr:first-child th:first-child {
  border-top-left-radius: 30px;
}
table thead tr:first-child th:last-child {
  border-top-right-radius: 30px;
}
table tbody tr:last-child td:first-child {
  border-bottom-left-radius: 30px;
}
table tbody tr:last-child td:last-child {
  border-bottom-right-radius: 30px;
}
</style>