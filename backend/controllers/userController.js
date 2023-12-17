import User from "../models/user.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil data user' })
  }
};

export const postUser = async (req, res) => {
  const { nama, password } = req.body;

  if (typeof nama !== 'undefined' && nama !== '' && typeof password !== 'undefined' && password !== '') {
    const newUser = new User({ nama, password });
    const savedUser = await newUser.save();    

    res.status(201).json({ 
      message: 'User berhasil ditambahkan',
      data: savedUser
    });
  } else {
    res.status(400).json({ message: 'Permintaan tidak valid' });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByIdAndDelete(userId);

    if (user) {
      res.status(204).send({
        message: 'User berhasil dihapus'
      })
    } else {
      res.status(404).json({
        err: 'User tidak ditemukan'
      })
    }
  } catch (err) {
    res.status(500).json({
      erro: 'Gagal menghapus user'
    })
  }
};
