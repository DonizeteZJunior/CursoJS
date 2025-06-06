import Aluno from '../models/Aluno'

class AlunoController {
  async index(req,res){
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Miranda',
      email: 'maria@gmail.com',
      idade: 23,
      peso: 59,
      altura: 1.66
    });

    res.json(novoAluno)
  }
}

export default new AlunoController();