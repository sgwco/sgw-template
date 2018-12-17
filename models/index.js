import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: 3306,
  logging: false,
  dialectOptions: { decimalNumbers: true },
  logging: false,
});

const db = {};
const modelFiles = fs
  .readdirSync(__dirname)
  .filter(file => file.indexOf('.') >= 0 && file !== 'index.js');
for (let file of modelFiles) {
  const model = sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
}

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize.sync();

export default db;
