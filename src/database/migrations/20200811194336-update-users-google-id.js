module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('users', 'googleId', {
      type: Sequelize.STRING,
      allowNull: false
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('users', 'googleId', {
      type: Sequelize.STRING,
      allowNull: true
    })
  }
}
