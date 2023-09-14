import { Router } from 'express'
import { ctrlGetForo, ctrlCreateForo, ctrlUpdateForo,ctrlDeleteForo } from '../controllers/controllers.js';

const foroRouter = Router();

// Direccion de una API para traer todas las tareas
foroRouter.get('/api/foro', ctrlGetForo)

// Direccion de una API para crear una tarea
foroRouter.post('/api/foro', ctrlCreateForo)

// Direccion de una API para actualizar una tarea
foroRouter.put('/api/foro/:id', ctrlUpdateForo)

// Direccion de una API para eliminar una tarea
foroRouter.delete('/api/foro/:id', ctrlDeleteForo)

export{foroRouter};