import express from 'express'
import SkillController from './controller'
import mdw from '../../middlewares/authentication'
const app = express()

app.get('/', SkillController.Fetch);
app.get('/:id', SkillController.FetchOne);
app.post('/', [mdw.verifyToken], SkillController.Create);
app.delete('/:id', SkillController.Delete);
app.put('/', SkillController.Update);

export default app