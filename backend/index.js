// Nama: Aden Kesuma
// Nim: 221111805

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from "cors";
import userRoute from './routes/userRoute.js';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// koneksi ke database mongodb
mongoose.connect('mongodb://127.0.0.1:27017/Backend-m13', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Berhasil terhubung ke mongodb');
}).catch((err) => {
  console.log(`Gagal terhubung ke mongodb ${err}`)
})

app.use(cors());
app.use(express.json());
app.use(userRoute);

app.listen(PORT, () => {
  console.log(`Server berjalan di port http://localhost:${PORT}`);
});
