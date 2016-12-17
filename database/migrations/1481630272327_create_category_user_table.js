'use strict'

const Schema = use('Schema')

class CategoryUserTableSchema extends Schema {

  up () {
    this.create('category_user', (table) => {
      table.integer('category_id').unsigned().references('id').inTable('categories')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.primary(['category_id', 'user_id'])
    })
  }

  down () {
    this.drop('category_user')
  }

}

module.exports = CategoryUserTableSchema
