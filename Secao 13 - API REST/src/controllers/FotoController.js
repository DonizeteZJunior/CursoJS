import multer from 'multer';
import multerConfig from '../config/multer';

import Foto from '../models/Foto';

const uploads = multer(multerConfig).single('foto');

class FotoController {
  store(req, res){
    return uploads(req, res, async (error) => {
      if(error){
        return res.status(400).json({
            errors: [error.code],
        })
      }

      try{
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const foto = await Foto.create({originalname, filename, aluno_id});

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        })
      }
    });
  }
}

export default new FotoController();