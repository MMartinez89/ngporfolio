import express from 'express'
import TeamController from './controller'
const app = express()

app.get('/', TeamController.Fetch);
app.get('/:id', TeamController.FetchOne);
app.post('/', TeamController.Create);
app.delete('/:id', TeamController.Delete);
app.put('/', TeamController.Update);

export default app