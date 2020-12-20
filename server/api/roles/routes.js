import express from 'express'
import RolesController from './controller'
const app = express()

app.get('/', RolesController.Fetch);
app.get('/:id', RolesController.FetchOne);
app.post('/', RolesController.Create);
app.delete('/:id', RolesController.Delete);
app.put('/', RolesController.Update);

export default app