import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import express from 'express';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';

class App {
  // Executa tudo no constructor sempre que uma nova instância é criada
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
  }

  routes(){
    this.app.use('/users', userRoutes);
    this.app.use('/tokens', tokenRoutes);
  }
}

export default new App().app;