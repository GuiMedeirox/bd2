// models/index.js
const Projeto = sequelize.define('Projeto', {
  codigo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: DataTypes.STRING,
  descricao: DataTypes.STRING,
  responsavel: DataTypes.INTEGER,
  depto: DataTypes.INTEGER,
  data_inicio: DataTypes.DATE,
  data_fim: DataTypes.DATE
}, {
  tableName: 'projeto',
  timestamps: false
});

const Atividade = sequelize.define('Atividade', {
  codigo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descricao: DataTypes.STRING,
  projeto: DataTypes.INTEGER,
  data_inicio: DataTypes.DATE,
  data_fim: DataTypes.DATE
}, {
  tableName: 'atividade',
  timestamps: false
});

// Associações
Projeto.hasMany(Atividade, { foreignKey: 'projeto' });
Atividade.belongsTo(Projeto, { foreignKey: 'projeto' });
