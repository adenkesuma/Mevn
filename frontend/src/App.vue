<script>
import axios from 'axios';
import cardUser from './components/CardUser.vue';

export default {
  components: {
    cardUser
  },
  data() {
    return {
      userData: {
        nama: '',
        password: '',
      },
    };
  },
  methods: {
    async tambahUser() {
      try {
        const response = await axios.post('http://localhost:3000/users/tambah', this.userData);

        console.log('Server Response:', response.data);

        this.resetForm();
      } catch (error) {
        console.error('Error posting data to server', error);
      }
    },
    resetForm() {
      this.userData = {
        nama: '',
        password: '',
      };
    },
  },
};

</script>

<template>
  <header>
    <div class="form">
      <h1 class="heading-1 green">Form Tambah User</h1>

      <input 
        v-model="userData.nama"
        id="nama"
        type="text" 
        placeholder="Nama..."
      >

      <input 
        v-model="userData.password"
        id="harga"
        type="password" 
        placeholder="Password..."
      >

      <button id="tambah-user" @click="tambahUser">
        Tambah User
      </button>
    </div>   
    <span class="vue">VUEEEEEE</span>
  </header>

  <main>
    <h2 class="heading-2 green">List Users</h2>
    <cardUser />
  </main>
</template>

<style scoped>
header {
  margin-top: 40px;
  padding: 30px;
  display: flex;
  gap: 40px;
  align-items: center;
}

.form {
  width: 380px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #333;
  border-radius: 16px;
  padding: 20px;
}

input,
select {
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  outline: none;
}

.vue {
  font-weight: 700;
  font-size: 200px;
  font-style: italic;
  color: #222;
}

.heading-1 {
  font-size: 22px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: left;
}

.heading-2 {
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: left;
}

#tambah-user {
  padding: 8px 12px;
  background-color: #00bd7e;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
}

main {
  padding: 30px;
  border-left: 1px solid #333;
  min-height: 100vh;
}
</style>
