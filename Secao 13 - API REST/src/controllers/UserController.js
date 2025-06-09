import User from '../models/User';

class UserController {
  // Store = Cadastro
  async store(req, res){
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: error.errors.map(err => err.message)
      });
    }
  }

  // Index
  async index(req, res){
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      console.log(e);
      res.json(null);
    }
  }

  // Show
  async show(req, res){
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (e) {
      console.log(e);
      res.json(null);
    }
  }

  // Update
  async update(req, res){
    try {
      if(!req.params.id){
        return res.status(400).json({
          errors: ['ID não enviado.']
        });
      }

      const user = await User.findByPk(req.params.id);

      if(!user){
        return res.status(400).json({
          errors: ['Usuário não existe.']
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      console.log(e);
      res.json(null);
    }
  }

  // Delete
  async delete(req, res){
    try {
      if(!req.params.id){
        return res.status(400).json({
          errors: ['ID não enviado.']
        });
      }

      const user = await User.findByPk(req.params.id);

      if(!user){
        return res.status(400).json({
          errors: ['Usuário não existe.']
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (e) {
      console.log(e);
      res.json(null);
    }
  }
}

export default new UserController();