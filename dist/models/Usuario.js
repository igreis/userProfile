"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Usuario extends _sequelize.Model {
    static init(sequelize) {
        super.init({ // super = classe pai, esta chamando o init da classe pai
            nome: {
                type: _sequelize2.default.STRING,
                defaultValue: '', // caso nao coloque o nome o valor dafault é vazio
                validate: { // campo onde faz as validaçoes
                    len: { // tamanho do campo
                        args: [3, 255], // min e max caracteres
                        msg: 'O nome deve ter entre 3 e 255 caracteres',
                    },
                },
            },
            idade: {
                type: _sequelize2.default.INTEGER,
                defaultValue: '',
                validate: {
                    isInt: {
                        msg: 'Idade precisa ser um número inteiro',
                    },
                },
            },
            rua: {
                type: _sequelize2.default.STRING,
                defaultValue: '', // caso nao coloque o nome o valor dafault é vazio
                validate: { // campo onde faz as validaçoes
                    len: { // tamanho do campo
                        args: [3, 255], // min e max caracteres
                        msg: 'A rua deve ter entre 3 e 255 caracteres',
                    },
                },
            },
            bairro: {
                type: _sequelize2.default.STRING,
                defaultValue: '', // caso nao coloque o nome o valor dafault é vazio
                validate: { // campo onde faz as validaçoes
                    len: { // tamanho do campo
                        args: [3, 255], // min e max caracteres
                        msg: 'O bairro deve ter entre 3 e 255 caracteres',
                    },
                },
            },
            estado: {
                type: _sequelize2.default.STRING,
                defaultValue: '', // caso nao coloque o nome o valor dafault é vazio
                validate: { // campo onde faz as validaçoes
                    len: { // tamanho do campo
                        args: [3, 255], // min e max caracteres
                        msg: 'O estado deve ter entre 3 e 255 caracteres',
                    },
                },
            },
            biografia: {
                type: _sequelize2.default.STRING,
                defaultValue: '', // caso nao coloque o nome o valor dafault é vazio
                validate: { // campo onde faz as validaçoes
                    len: { // tamanho do campo
                        args: [3, 500], // min e max caracteres
                        msg: 'A biografia deve ter entre 3 e 500 caracteres',
                    },
                },
            },
        }, {
            sequelize, // instancia que contem a config para o modelo
        });

        return this; // permite encadear chamadas de métodos da classe User
    }
} exports.default = Usuario;
