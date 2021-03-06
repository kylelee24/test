module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'users',
      'googleId',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    )
  },
  down: async queryInterface => {
    await queryInterface.removeColumn('users', 'googleId')
  }
}
