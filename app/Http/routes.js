'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')
/*
Route.on('/').render('welcome')
Route.get('/warehouse/browse', 'RaktarController.browse')
Route.post('/warehouse/itemCreate', 'RaktarController.itemCreate')
Route.post('/warehouse/itemModify', 'RaktarController.itemModify')
Route.post('warehouse/itemDelete', 'RaktarController.itemDelete')
*/
Route.get('/', 'RaktarController.main')
Route.get('/warehouse/browse', 'RaktarController.browse')
Route.get('/warehouse/itemCreate', 'RaktarController.itemCreate').middleware('auth')
Route.post('/warehouse/itemCreate', 'RaktarController.itemDoCreate').middleware('auth')

Route.get('/warehouse/:id', 'RaktarController.show')
Route.get('/warehouse/:id/modify', 'RaktarController.itemModify')
Route.post('/warehouse/:id/modify', 'RaktarController.itemDoModify')
Route.post('/warehouse/:id/delete', 'RaktarController.itemDoDelete')

Route.get('/register', 'UserController.register')
Route.post('/register', 'UserController.doRegister')

Route.get('/login', 'UserController.login')
Route.post('/login', 'UserController.doLogin')
Route.get('/logout', 'UserController.doLogout')