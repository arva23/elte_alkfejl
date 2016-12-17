'use strict'

const Lucid = use('Lucid')

class Producer extends Lucid {

  static get createTimestamp () {
    return null
  }

  static get updateTimestamp () {
    return null
  }

  items () {
      return this.hasMany('App/Model/Item')
  }

}

module.exports = Producer
