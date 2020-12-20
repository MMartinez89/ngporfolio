import express from 'express'
import UsersController from './controller'
const app = express()

app.get('/', UsersController.Fetch);
app.get('/:id', UsersController.FetchOne);
app.post('/', UsersController.Create);
app.put('/', UsersController.Update);
app.delete('/:id', UsersController.Delete)

export default app