import express from 'express';
import TeamController from './controller';
import mdw from '../../middlewares/authentication';
const app = express();

app.get('/', TeamController.Fetch);
// app.get('/nested', TeamController.FetchNested);

app.get('/:id', TeamController.FetchOne);
//app.post('/', [mdw.verifyToken],  TeamController.Create);
app.post('/', TeamController.Create);
app.put('/', TeamController.Update);
app.delete('/:id', TeamController.Delete);

export default app;