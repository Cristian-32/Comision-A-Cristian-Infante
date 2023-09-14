import { Router } from 'express'

const router = Router();

// Direccion de una API para traer todas las tareas

router.get('/api/foro', ctrlGetForo)

// Direccion de una API para crear una tarea

router.post('/api/foro', ctrlCreateForo)

// Direccion de una API para actualizar una tarea

router.put('/api/foro/:id', ctrlUpdateForo)

// Direccion de una API para eliminar una tarea

router.delete('/api/foro/:id', ctrlDeleteForo)

export{router};