
const environments = require("../../environments")

module.exports = {
    dialect: 'mysql',
    host: environments.DB.HOST,
    username: environments.DB.USERNAME,
    password: environments.DB.PASSWORD,
    database: environments.DB.DATABASE,
    port: environments.DB.PORT,
    define: {
        timestamps: false
    },
    timezone: '-04:00',
    logging: false,
    pool: {
        max: environments.DB.CONNECTIONS,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
    freeTableName: true
}