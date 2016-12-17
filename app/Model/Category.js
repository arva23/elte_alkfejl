'use strict'

const Lucid = use('Lucid')

class Category extends Lucid {

  static get createTimestamp () {
    return null
  }

  static get updateTimestamp () {
    return null
  }

  managers () {
    return this.belongsToMany('App/Model/User')
  }

  items () {
      return this.hasMany('App/Model/Item')
  }

}

module.exports = Category
