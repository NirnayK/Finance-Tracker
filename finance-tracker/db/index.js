import { Pool } from 'pg';

const pool = new Pool({
    max: 300,
    connectionTimeoutMillis: 5000,
    host: 'c.sga556cc75308043abbbd4cadbb5ac6027.postgres.database.azure.com',
    port: 5432,
    user: 'citus',
    password: 'LNMimadY20',
    database: 'citus',
    ssl: true,
});

export default pool;