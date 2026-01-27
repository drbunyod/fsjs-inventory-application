const { Pool } = require('pg');

module.exports = new Pool({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URI}:${process.env.DB_PORT || 5432}/${process.env.DB_NAME}`
});