<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>이름</th>
        <th>이메일</th>
        <th>전화번호</th>
        <th>웹사이트</th>
      </tr>
      </thead>
      <tbody>
      <tr :key="i" v-for="(user,i) in userList">
        <!-- <td>{{user.name}}</td>
        <td>{{user.email}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.website}}</td>
      </tr> -->
      </tbody>
    </table>

  </div>
</template>

<script lang="ts">
import axios from "axios";
export default {
  data() {
    return {
      userList: []
    };
  },
  created() {
    // this.getList();
  },
  methods: {
    getList: function() {
      axios.get('https://jsonplaceholder.typicode.com/users/')
        .then((response) => {
          // this.userList = response.data; // Vue 컴포넌트의 this를 사용
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%
}
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>