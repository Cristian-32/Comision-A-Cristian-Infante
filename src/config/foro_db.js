import { Sequelize } from 'sequelize'

export const database = new Sequelize('foro_db', 'root','',{
    host: 'localhost',
    dialect: 'mysql'
})

export const dbStart = async () => {
    try {
        await database.authenticate();
        //await database.sync({force:true}); //para borrar todos los datos cargados
        await database.sync();
        console.log('Conexión establecida correctamente');
    } catch (error) {
        conosole.error('Imposible conectarse a la base de datos',error);
    }
}
