'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for dif'auth'ferent URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/',"UserController.get").middleware(['auth']);
Route.get('users/:id',"UserController.getid");
Route.get('me',"UserController.getuser");
Route.post('users/store',"UserController.store");
Route.post('login',"UserController.login");
Route.put('users/update/:id',"UserController.update");
Route.delete('users/delete/:id',"UserController.destroy");
