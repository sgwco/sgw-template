import md5 from 'md5';

export default function(sequelize, Sequelize) {
  const users = sequelize.define(
    'users',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Phải cung cấp email.',
          },
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Phải cung cấp mật khẩu.',
          },
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Phải cung cấp họ tên.',
          },
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
      },
    },
    {
      timestamps: false,
      hooks: {
        beforeValidate(user) {
          if (!user.email) user.email = '';
          if (!user.password) {
            user.password = '';
          } else {
            user.password = md5(user.password);
          }
          if (!user.name) user.name = '';
        },
      },
    }
  );

  users.associate = function(models) {};

  return users;
}
