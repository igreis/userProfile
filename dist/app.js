"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

_dotenv2.default.config();

require('./database'); // chama o arquivo apenas importando

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _usuario = require('./routes/usuario'); var _usuario2 = _interopRequireDefault(_usuario);
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);

const storage = _multer2.default.diskStorage({
  destination: function (req, file, cb) {
    cb(null, _path2.default.resolve("uploads")); // Pasta onde as imagens serão armazenadas
  },
  filename: function (req, file, cb) {
    cb(null, 'imagem.jpg');
  }
});

const upload = _multer2.default.call(void 0, { storage: storage })

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({ extended: true })); // Middleware para fazer o parsing dos dados enviados por formulários HTML.
    this.app.use(_express2.default.json()); // Middleware para fazer o parsing de dados JSON enviados no corpo das requisições.
    this.app.use("/uploads", _express2.default.static('uploads'));
  }

  routes() {
    /*this.app.use('/', homeRoutes);*/
    this.app.use('/atualizar/', _usuario2.default);
    this.app.post('/upload/', upload.single('imagem'), (req, res) => {
      const imageUrl = 'http://localhost:3000/' + req.file.path // URL da imagem no servidor
      res.json({ url: imageUrl });
    });
  }
}

exports. default = new App().app; // exporta o express ja configurado
