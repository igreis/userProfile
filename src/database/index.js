import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Usuario from '../models/Usuario';

const models = [Usuario];

const connection = new Sequelize(databaseConfig); // configs da conexao

models.forEach((model) => model.init(connection)); // inicalizar os modelos presentes no models com o banco de dados, chamando o init do model e passando a connection(config)
