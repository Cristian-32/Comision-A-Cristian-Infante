import { Sequelize } from 'sequelize'

export const dataBase = new Sequelize('foro_db', 'root','',{
    host: 'localhost',
    dialect: 'mysql'
})

export const dbStart = async () => {
    try {
        await dataBase.authenticate();
        //await database.sync({force:true}); //para borrar todos los datos cargados
        await dataBase.sync();
        console.log('Conexión establecida correctamente');
    } catch (error) {
        conosole.error('Imposible conectarse a la base de datos',error);
    }
}
