module.exports = {
  // Editando uma coluna que já existe em alguma tabela(alunos). Que coluna
  // estou modificando? email.
  up: (queryInterface, Sequelize) => queryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true, // Tem que ser único.
    },
  ),

  down: () => {},
};
