import postgres from "postgres";
import * as os from "os";

const sql = postgres (
    {
            host: process.env.RAILWAYDB_HOST,
            port: process.env.RAILWAYDB_PORT,
            database: process.env.RAILWAYDB_DB,
            username: process.env.RAILWAYDB_USER,
            password: process.env.RAILWAYDB_PWORD,
        idle_timeout: 20,
        max_lifetime: 60 * 30,
        ssl: {
            rejectUnauthorized: false,
        },
    }
)

export default sql