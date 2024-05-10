import usuario from '../models/Usuario'


class UserController {
  async store(req, res) {
    try {
      const imageUrl = 'http://localhost:3000/' + req.file.path; // URL da imagem no servidor
      const userNovo = await usuario.create(
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
      const user = await usuario.findOne();
      return res.json(user);
    } catch (e) {
      res.status(400).json(null)
    }
  }

  async update(req, res) {
    try {
      const user = await usuario.findByPk(req.params.id);
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

export default new UserController();