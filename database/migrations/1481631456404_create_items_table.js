'use strict'

const Schema = use('Schema')

class ItemsTableSchema extends Schema {

  up () {
    this.create('items', (table) => {
      table.increments()
      table.string('name', 100).notNullable()
      table.integer('price').notNullable().defaultTo(0)
      table.integer('amount').notNullable().defaultTo(0)
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.integer('producer_id').unsigned().references('id').inTable('producers')
      table.timestamps()
    })
  }

  down () {
    this.drop('items')
  }

}

module.exports = ItemsTableSchema
