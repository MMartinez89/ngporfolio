import express from 'express'
import TestimonialsController from './controller'
const app = express()

app.get('/', TestimonialsController.Fetch);
app.get('/:id', TestimonialsController.FetchOne);
app.post('/', TestimonialsController.Create);
app.delete('/:id', TestimonialsController.Delete);
app.put('/', TestimonialsController.Update);

export default app