import postgres from "postgres";
import * as os from "os";

const sql = postgres (
    {
            host: process.env.RAILWAYDB_HOST,
            port: process.env.RAILWAYDB_PORT,
            database: process.env.RAILWAYDB_DB,
            username: process.env.RAILWAYDB_USER,
            password: process.env.RAILWAYDB_PWORD,
    }
)

// let sql

// const sqlCreator = () => {
//         console.log('>>> Logging os.hostname: ', os.hostname().indexOf("Local"))
//         if (os.hostname().indexOf("Local") === -1) {
//                 sql =  postgres ({
//                         host: 'localhost',
//                         port: 5432,
//                         database: 'be-fit',
//                         username: 'postgres',
//                         password: '1234',
//                 })
//         } else {
//                 sql =  postgres ({
//                         host: process.env.RAILWAYDB_HOST,
//                         port: process.env.RAILWAYDB_PORT,
//                         database: process.env.RAILWAYDB_DB,
//                         username: process.env.RAILWAYDB_USER,
//                         password: process.env.RAILWAYDB_PWORD,
//                 })
//         }
// }
//
// sqlCreator()
console.log('>>>  Logging sql.options', sql.options)

export default sql