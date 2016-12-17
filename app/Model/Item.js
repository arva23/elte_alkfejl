'use strict'

const Lucid = use('Lucid')

class Item extends Lucid {

  producer () {
      return this.belongsTo('App/Model/Producer', 'id', 'producer_id')
  }

  category () {
      return this.belongsTo('App/Model/Category', 'id', 'category_id')
  }
}

module.exports = Item
