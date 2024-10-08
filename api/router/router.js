// src/routes.js
import { Hono } from 'hono';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController.js';
import { getGalleries, createGallery, updateGallery, deleteGallery } from '../controllers/galleryController.js';

const routes = new Hono();

// User routes
routes.get('/users', getUsers);
routes.post('/users', createUser);
routes.put('/users/:id', updateUser);
routes.delete('/users/:id', deleteUser);

// Gallery routes
routes.get('/galleries', getGalleries);
routes.post('/galleries', createGallery);
routes.put('/galleries/:id', updateGallery);
routes.delete('/galleries/:id', deleteGallery);

export default routes;
