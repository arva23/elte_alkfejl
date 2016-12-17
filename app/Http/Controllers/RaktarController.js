'use strict'


const Category = use('App/Model/Category')
const Item = use('App/Model/Item')
const Validator = use('Validator')

class RaktarController {
    // main page
    * main(req, res){
        const categories = yield Category.all()

        for(const category of categories){
            const topRecipes = yield category.items().limit(3).fetch()
            category.topRecipes = topRecipes.toJSON()
        }

        yield res.sendView('main', {
            categores: categories.toJSON()
        })
    }


    * browse(req, res){
        const categories = yield Category.all()

        for(const category of categories){
            const allItems = yield category.items().fetch()
            category.allItems = allItems.toJSON()
        }
   
        
        yield res.sendView('browse', {
            categores: categories.toJSON()
        })
     }

    // creating an item
    * itemCreate(req, res){ 
        const categories = yield Category.all()

        yield res.sendView('itemCreate', {
            categories: categories.toJSON()
        })
    }

    * itemDoCreate(req, res){
     const itemDate = req.all()

     const rules = {
         'name' : 'required|min:5',
         'price' : 'required',
         'amount' : 'required',
         'category' : 'required',
         'producer' : 'required'
     }

     const validation = yield Validator.validateAll(itemData, rules)

     if(validation.fails()){
         yield req
            .withAll()
            .andWith({errors: validation.messages})
            .flash()

        res.redirect('/warehouse/itemCreate')
        return
     }

     const item = new Item()
     item.name = itemData.name
     item.price = itemDAta.price
     item.amount = itemData.amount
     item.category_id = itemData.category
     item.producer_id = itemData.producer

     yield item.save()

     res.redirect(`/warehouse/${item.id}`)
    }


    // displaying an item
    * itemShow(req, res){
        const item = yield Item.find(req,param('id'))
        yield item.related('category').load()

        yield res.sendView('item', {
            item: item.toJSON()
        })
    }


    // editing an item
    * itemModify(req, res){
        const item = yield Item.find(req.param('id'))
        const categories = yield Category.all()

        yield res.sendView('itemModify', {
            item: item.toJSON(),
            categories: categories.toJSON()
        })
    }

    * itemDoModify(req, res){
        const item = yield Item.find(req.param('id'))

        if(item === null){
            res.notFound('Item has not found..')
            return
        }

        const itemData = req.all()

        const rules = {
         'name' : 'required|min:5',
         'price' : 'required',
         'amount' : 'required',
         'category' : 'required',
         'producer' : 'required'
     }

     const validation = yield Validator.validateAll(itemData, rules)

     if(validation.fails()){
         yield req
            .withAll()
            .andWith({errors: validation.messages})
            .flash()

        res.redirect(`/warehouse/${item.id}/itemModify`)
        return
     }

     item.name = itemData.name
     item.price = itemDAta.price
     item.amount = itemData.amount
     item.category_id = itemData.category
     item.producer_id = itemData.producer

     yield item.save()

     res.redirect(`/warehouse/${item.id}`)
    }


    // deleting anitem
    * doDelete(req, res){
        const item = yield Item.find(req.param('id'))

        yield item.delete()

        res.redirect('/')
    }
}

module.exports = RaktarController
