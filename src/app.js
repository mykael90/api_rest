import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express';
import homeRoutes from './routes/homeRoutes';
import userRoutes, { userOpenedRouter as userOpenedRoutes } from './routes/userRoutes';
import alunoRoutes from './routes/alunoRoutes';
import tokenRoutes from './routes/tokenRoutes';
import fotoRoutes from './routes/fotoRoutes';
import loginRequired from './middlewares/loginRequired';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    // Rotas abertas
    this.app.use('/', homeRoutes);
    this.app.use('/tokens/', tokenRoutes);
    // this.app.use('/users/', userOpenedRoutes);

    // Middleware de autenticação
    this.app.use(loginRequired);

    // Rotas fechadas
    this.app.use('/users/', userOpenedRoutes); // fechar por enquanto
    this.app.use('/users/', userRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
