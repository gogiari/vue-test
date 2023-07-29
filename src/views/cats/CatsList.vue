<template>
  <div>
    <h1>catslist</h1>
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>breed</th>
      </tr>
      <tr v-for="cat in cats" :key="cat._id">
        <td>{{ cat.id }}</td>
        <td>{{ cat.name }}</td>
        <td>{{ cat.age }}</td>
        <td>{{ cat.breed }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import axios from "axios";

// Cats 인터페이스 정의
interface Cat {
  _id: string;
  id: string;
  name: string;
  age: number;
  breed: string;
}
export default {
  data() {
    return {
      cats: [] as Cat[],
    }
  },
  created() {
    this.getList();
  },
  methods: {
    getList: function(){
      axios.get("http://localhost:3000/cats")
      .then((response) => {
        this.cats = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>
