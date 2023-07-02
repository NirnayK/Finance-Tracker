import { Pool } from 'pg';
import config from './config';

const pool = new Pool({
    max: 300,
    connectionTimeoutMillis: 5000,
    host: config.HOST_NAME,
    port: 5432,
    user: config.user,
    password: config.password,
    database: 'citus',
    ssl: true,
});

export default pool;