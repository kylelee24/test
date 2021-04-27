module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn('users', 'middleName')
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'users',
      'middleName',
      {
        type: Sequelize.STRING
      }
    )
  }
}
