const ClientsModel = require('./clients')
const EngineersModel = require('./engineers')
const OfferingsModel = require('./offerings')
const ProposalsModel = require('./proposals')
const SalesEngineersModel = require('./sales-engineers')
const UsersModel = require('./users')
const WizardsModel = require('./wizards')

ClientsModel.hasMany(ProposalsModel)

EngineersModel.belongsTo(UsersModel)

OfferingsModel.hasMany(ProposalsModel)

ProposalsModel.belongsTo(ClientsModel)
ProposalsModel.belongsTo(SalesEngineersModel)
ProposalsModel.belongsTo(OfferingsModel)

SalesEngineersModel.belongsTo(UsersModel)
SalesEngineersModel.hasMany(ProposalsModel)

UsersModel.hasOne(SalesEngineersModel)
UsersModel.hasOne(EngineersModel)
UsersModel.hasOne(WizardsModel)

WizardsModel.belongsTo(UsersModel)

module.exports = {
  ClientsModel,
  EngineersModel,
  OfferingsModel,
  ProposalsModel,
  SalesEngineersModel,
  UsersModel,
  WizardsModel
}
