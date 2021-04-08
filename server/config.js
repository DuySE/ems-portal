module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '',
  DATABASE: 'ems',
  PORT: 3001,
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
