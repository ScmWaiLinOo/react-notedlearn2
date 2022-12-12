module.exports = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "mysql123",
  DB: "react-node-project",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
