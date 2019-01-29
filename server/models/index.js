require('dotenv').config();
import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: 3306,
  logging: false,
  dialectOptions: { decimalNumbers: true },
});

const db = {};
const modules = [
  require('./bill-detail'),
  require('./bill'),
  require('./template'),
  require('./user'),
];
for (let i = 0; i < modules.length; i++) {
  const model = modules[i].default(sequelize, Sequelize);
  db[model.name] = model;
}

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
