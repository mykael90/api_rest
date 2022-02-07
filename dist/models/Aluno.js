"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({

      nome: {
        type: _sequelize2.default.STRING,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome deve ter entre 3 e 255 caracteres',
          },
        },
      },

      sobrenome: {
        type: _sequelize2.default.STRING,
      },

      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'O email cadastrado já existe',
        },
      },

      idade: {
        type: _sequelize2.default.INTEGER,
      },

      peso: {
        type: _sequelize2.default.FLOAT,
      },

      altura: {
        type: _sequelize2.default.FLOAT,
      },

    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
