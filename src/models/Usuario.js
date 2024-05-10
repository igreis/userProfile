import Sequelize, { Model } from 'sequelize';

export default class Usuario extends Model {
    static init(sequelize) {
        super.init({ // super = classe pai, esta chamando o init da classe pai
            nome: {
                type: Sequelize.STRING,
                defaultValue: '', // caso nao coloque o nome o valor dafault é vazio
                validate: { // campo onde faz as validaçoes
                    len: { // tamanho do campo
                        args: [3, 255], // min e max caracteres
                        msg: 'O nome deve ter entre 3 e 255 caracteres',
                    },
                },
            },
            idade: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    isInt: {
                        msg: 'Idade precisa ser um número inteiro',
                    },
                },
            },
            rua: {
                type: Sequelize.STRING,
                defaultValue: '', // caso nao coloque o nome o valor dafault é vazio
                validate: { // campo onde faz as validaçoes
                    len: { // tamanho do campo
                        args: [3, 255], // min e max caracteres
                        msg: 'A rua deve ter entre 3 e 255 caracteres',
                    },
                },
            },
            bairro: {
                type: Sequelize.STRING,
                defaultValue: '', // caso nao coloque o nome o valor dafault é vazio
                validate: { // campo onde faz as validaçoes
                    len: { // tamanho do campo
                        args: [3, 255], // min e max caracteres
                        msg: 'O bairro deve ter entre 3 e 255 caracteres',
                    },
                },
            },
            estado: {
                type: Sequelize.STRING,
                defaultValue: '', // caso nao coloque o nome o valor dafault é vazio
                validate: { // campo onde faz as validaçoes
                    len: { // tamanho do campo
                        args: [3, 255], // min e max caracteres
                        msg: 'O estado deve ter entre 3 e 255 caracteres',
                    },
                },
            },
            biografia: {
                type: Sequelize.STRING,
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
}
