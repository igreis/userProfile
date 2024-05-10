"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);


class UserController {
  async store(req, res) {
    try {
      const imageUrl = 'http://localhost:3000/' + req.file.path; // URL da imagem no servidor
      const userNovo = await _Usuario2.default.create(
        req.body,
      );
      return res.json(userNovo);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message), // colocar em json ({}) para checar os erros
      });
    }
  }
  async index(req, res) {
    try {
      const user = await _Usuario2.default.findOne();
      return res.json(user);
    } catch (e) {
      res.status(400).json(null)
    }
  }

  async update(req, res) {
    try {
      const user = await _Usuario2.default.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ['Usúario não existe'],
        });
      }
      console.log(req.body)
      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController();