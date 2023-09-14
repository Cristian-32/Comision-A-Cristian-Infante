import { DataTypes } from "sequelize";
import { dataBase } from "../config/foro_db.js";

export const tareasModelo = dataBase.define('Tarea',{
    title:{
        type: DataTypes.STRING,
        allownull: true
    },
    query:{
        type: DataTypes.STRING,
        allownull: true
    },
    imageUrl:{
        type: DataTypes.STRING,
        allownull: true
    }
},{
    timestamps: true
})