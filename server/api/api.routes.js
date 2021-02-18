import express from 'express';
import authRoutes from './auth/routes'
import roleRoutes from './roles/routes'
import userRoutes from './user/routes'
import skillRoutes from './skills/routes'
import testimonialsRoutes from './testimonials/routes'
import teamRoutes from './teams/routes'

const app = express();
app.use('/auth', authRoutes);
app.use('/role', roleRoutes);
app.use('/user', userRoutes);
app.use('/skill', skillRoutes);
app.use('/testimonials', testimonialsRoutes);
app.use('/team', teamRoutes);


export default app;