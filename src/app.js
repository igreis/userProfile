import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

import './database'; // chama o arquivo apenas importando

import express from 'express';
import userRoutes from './routes/usuario';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("uploads")); // Pasta onde as imagens serão armazenadas
  },
  filename: function (req, file, cb) {
    cb(null, 'imagem.jpg');
  }
});

const upload = multer({ storage: storage })

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true })); // Middleware para fazer o parsing dos dados enviados por formulários HTML.
    this.app.use(express.json()); // Middleware para fazer o parsing de dados JSON enviados no corpo das requisições.
    this.app.use("/uploads", express.static('uploads'));
  }

  routes() {
    /*this.app.use('/', homeRoutes);*/
    this.app.use('/atualizar/', userRoutes);
    this.app.post('/upload/', upload.single('imagem'), (req, res) => {
      const imageUrl = 'http://localhost:3000/' + req.file.path // URL da imagem no servidor
      res.json({ url: imageUrl });
    });
  }
}

export default new App().app; // exporta o express ja configurado
