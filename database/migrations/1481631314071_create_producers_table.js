'use strict'

const Schema = use('Schema')

class ProducersTableSchema extends Schema {

  up () {
    this.create('producers', (table) => {
      table.increments()
      table.string('name', 50).notNullable().unique()
    })
  }

  down () {
    this.drop('producers')
  }

}

module.exports = ProducersTableSchema
