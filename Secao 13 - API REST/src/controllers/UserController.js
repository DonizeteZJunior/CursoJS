import User from '../models/User';

class UserController {
  // Store = Cadastro
  async store(req, res){
    try {
      const novoUser = await User.create(req.body);
      const { id,nome,email } = novoUser;
      return res.json({id,nome,email});
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
      const users = await User.findAll({attributes: ['id','nome','email']});
      return res.json(users);
    } catch (e) {
      console.log(e);
      res.json(null);
    }
  }

  // Show
  async show(req, res){
    try {
      const user = await User.findByPk(req.params.id);
      const { id,nome,email } = user
      return res.json({id,nome,email});
    } catch (e) {
      console.log(e);
      res.json(null);
    }
  }

  // Update
  async update(req, res){
    try {
      const user = await User.findByPk(req.userId);

      if(!user){
        return res.status(400).json({
          errors: ['Usuário não existe.']
        });
      }

      const novosDados = await user.update(req.body);
      const { id,nome,email } = novosDados;
      return res.json({ id,nome,email });
    } catch (e) {
      console.log(e);
      res.json(null);
    }
  }

  // Delete
  async delete(req, res){
    try {
      const user = await User.findByPk(req.userId);

      if(!user){
        return res.status(400).json({
          errors: ['Usuário não existe.']
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      console.log(e);
      res.json(null);
    }
  }
}

export default new UserController();