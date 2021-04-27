'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'clients',
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      }
    )

    await queryInterface.createTable(
      'offerings',
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        cost: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        sprints: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      }
    )

    await queryInterface.createTable(
      'proposals',
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true
        },
        background: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        cost: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        sprints: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        salesEngineerId: {
          type: Sequelize.UUID,
          references: {
            model: 'salesEngineers',
            key: 'id'
          },
          allowNull: false
        },
        clientId: {
          type: Sequelize.UUID,
          references: {
            model: 'clients',
            key: 'id'
          },
          allowNull: false
        },
        offeringId: {
          type: Sequelize.UUID,
          references: {
            model: 'offerings',
            key: 'id'
          },
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      }
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('proposals')
    await queryInterface.dropTable('clients')
    await queryInterface.dropTable('offerings')
  }
}
