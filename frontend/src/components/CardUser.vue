<script>
import axios from 'axios';

export default {
  data() {
    return {
      apiData: null,
    };
  },
  created() {
    this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await axios.get('http://localhost:3000/users');
        console.log(response.data)
        this.apiData = response.data;
      } catch (error) {
        console.error('Error fetching data from API', error);
      }
    },
  },
};
</script>

<template>
  <div class="cards">
    <div v-for="(product, index) in apiData" :key="index" class="card">
      <h4>Nama: {{ product.nama }}</h4>
      <p>password: {{ product.password }}</p>
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
</style>
