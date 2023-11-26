import { Sequelize } from 'sequelize-typescript';
import { config, dialect } from '../utils/db.config';
import User from '../models/user.model';

class Database {
    public sequelize: Sequelize | undefined;
    // this class has a construct that automatically calls the 'connectToDatabse'
    // method when an instance of 'Database' is created.

    constructor() {
        this.sequelize = new Sequelize({
            database: config.DB,
            username: config.USER,
            password: config.PASSWORD,
            host: config.HOST,
            dialect: dialect,
            pool: {
                max: config.pool.max,
                min: config.pool.min,
                acquire: config.pool.acquire,
                idle: config.pool.idle,
            },
            models: [User],
        });
        this.connectToDatabase();

    }

    protected async connectToDatabase():Promise<void> {
        try {
            await this.sequelize?.authenticate();
            console.log('Connection established successfully');
        } catch (error) {
            console.error('Unable to connect to DB', error);
        }
    }
}

export default Database;
