import { body } from "express-validator";

// Crear las tareas
export const createSchematarea = [
    body('title')
        .isString().withMessage('Debe ser string el título')
        .notEmpty().withMessage('Este campo tiene no tiene que estar vacio'),
    body('query')
        .isString().withMessage('Debe ser string la consulta')
        .notEmpty().withMessage('Este campo no tiene que estar vacio'),
    body('imageUrl')
        .isURL().withMessage('Ingrese una URL válida')
        .notEmpty().withMessage('Este campo no debe estar vacio'),
]

// Para encontrar si tiene el formato correspondiente(String,number,url)
export const editSchematarea = [
    body('title')
        .optional()
        .isString().withMessage('Debe ser string el título')
        .notEmpty().withMessage('Este campo tiene no tiene que estar vacio'),
    body('query')
        .optional()
        .isString().withMessage('Debe ser string la consulta')
        .notEmpty().withMessage('Este campo no tiene que estar vacio'),
    body('imageUrl')
        .optional()
        .isURL().withMessage('Ingrese una URL válida')
        .notEmpty().withMessage('Este campo no debe estar vacio'),
]