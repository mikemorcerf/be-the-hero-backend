// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations/'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations: {
      directory: './src/database/migrations/'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations'
    },
    ssl: true
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      port: process.env.DATABASE_PORT,
      URI: process.env.DATABASE_URI
    },
    dialect: 'postgres',
    type: 'postgres',
    protocol: 'postgres',
    ssl: true,
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
