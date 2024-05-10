"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);

const models = [_Usuario2.default];

const connection = new (0, _sequelize2.default)(_database2.default); // configs da conexao

models.forEach((model) => model.init(connection)); // inicalizar os modelos presentes no models com o banco de dados, chamando o init do model e passando a connection(config)
