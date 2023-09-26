import { tareasModelo } from "../models/tareas.js"

// Controlador para traer las tareas
export const ctrlGetForo = async (req,res) =>{
    try{
        const foro = await tareasModelo.findAll();
        if(!foro) return res.status(404)
        return res.status(200).json(foro)
    } catch(error){
        console.error(error)
        return res.status(500).json({
            message:'Error Server'
        })
    }
}

// Controlador para crear una tarea
export const ctrlCreateForo = async (req,res) => {
    try {
        const newForo = await tareasModelo.create(req.body)
        return res.status(201).json(newForo)
    } catch (error){
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
        
    }
}

// Controlador para actualizar una tarea
export const ctrlUpdateForo = async(req,res) => {
    const {id} = req.params
    try {
        const foro = await tareasModelo.findByPk(id)
        if(!foro){
            return res.status(404).json({
                message:'Consulta no encontrada'
            })
        }
        foro.update(req.body)
        
        return res.status(200).json(foro)
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

export const ctrlDeleteForo = async (req,res) => {
    const {id} = req.params
    try {
        const foroDeleted = await tareasModelo.destroy({
            where:{
                id:id
            }
        })
        if(!foroDeleted){
            return res.status(404).json({
                message:'Consulta no encontrada'
            })
        }
        return res.status(200).json({
            message:'Consulta eliminada'
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            message: 'Error Server'
        })
    }
}

// Controlador para mostrar la vista
export const ctrlView = async (req, res) => {

    try{
        const foros = await tareasModelo.findAll();
        if(!foros) return res.status(404)
        return res.status(200).render('foro.ejs', {foros})
    } catch(error){
        console.error(error)
        return res.status(500).json({
            message:'Error Server'
        })
    }
}