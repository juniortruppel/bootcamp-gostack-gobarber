require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // Garante uma coluna do createdAt e updatedAt em cada tabela do banco.
    underscored: true, // Padrão underscored (caixa baixa sem espaços/com _) nos nomes das tabelas e colunas underscored
    underscoredAll: true, // Padrão pras colunas e relacionamentos
  },
};
