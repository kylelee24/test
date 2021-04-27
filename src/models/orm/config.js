module.exports = {
  sql: {
    url: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_SSL,
    pool: {
      max: process.env.DATABASE_POOL_MAX || 5,
      min: process.env.DATABASE_POOL_MIN || 0,
      idle: process.env.DATABASE_POOL_IDLE || 1000
    },
    logging: !!process.env.DATABASE_LOGGING || false
  }
}
