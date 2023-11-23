import {Sequelize} from "sequelize-typescript";
import {config, dialect} from "../utils/db.config"

class Database {
    public sequelize: Sequelize | undefined
    // this class has a construct that automatically calls the 'connectToDatabse' 
    // method when an instance of 'Database' is created.

    constructor() {
        this.connectToDatabase();
    }

    private async connectToDatabase() {
        this.sequelize = new Sequelize({
            database: config.DB,
            username: config.USER,
            password: config.PASSWORD,
            host: config.HOST,
            pool: {
                max: config.pool.max,
                min: config.pool.min,
                acquire: config.pool.acquire,
                idle: config.pool.idle
            },
            models: [User]
        });

        await this.sequelize
        .authenticate()
        .then(()=>{
            console.log("Connection established successfully");
        }).catch((err)=>{
            console.error("Unable to connect to DB", err)
        })
    }
}

export default Database