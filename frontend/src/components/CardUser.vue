<script>
import axios from 'axios';

export default {
  data() {
    return {
      apiData: null,
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    async fetchUser() {
      try {
        const response = await axios.get('http://localhost:3000/users');
        console.log(response.data)
        this.apiData = response.data;
      } catch (error) {
        console.error('Error fetching data from API', error);
      }
    },
    async deleteUser(userId) {
      try {
        const response = await axios.delete(`http://localhost:3000/users/delete/${userId}`);
        console.log('User deleted:', response.data);

        this.fetchUser();
      } catch (error) {
        console.error('Error deleting user', error);
      }
    },
  },
};
</script>

<template>
  <div class="cards">
    <div v-for="(user, index) in apiData" :key="index" class="card">
      <h4>Nama: {{ user.nama }}</h4>
      <p>password: {{ user.password }}</p>
      <button class="button" @click="deleteUser(user._id)">Delete User</button>
    </div>
  </div>
</template>

<style scoped>
.cards {
  margin-top: 10px;
  gap: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.card {
  border: 1px solid #333;
  border-radius: 16px;
  padding: 20px;
}

h4 {
  font-size: 18px;
  font-weight: 600;
  color: white;
}

p {
  font-size: 14px;
}

.button {
  margin-top: 10px;
  background-color: rgb(219, 0, 0);
  color: #fff;
  padding: 8px 18px;
  border-radius: 8px;
  border: none;
  outline: none;
}
</style>
