module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', // addColumn on users table
      'avatar_id', // Column name
      {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' }, // The new column 'avatar_id' on users table will reference the id on files table
        onUpdate: 'CASCADE', // If the id is changed on files table, the same value must be replaced on 'avatar_id'
        onDelete: 'SET NULL', // Set the avatar_id as NULL if his id on files table be deleted
        allowNull: true,
      }
    );
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
