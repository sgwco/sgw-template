export default function(sequelize, Sequelize) {
  const templates = sequelize.define(
    'templates',
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Phải cung cấp tên template.',
          },
        },
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isPositive(value) {
            if (value <= 0) throw new Error('Giá template không hợp lệ.');
          },
        },
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: 'Tên URL đã có sẵn. Vui lòng chọn URL khác.',
        },
        validate: {
          notEmpty: {
            msg: 'Phải cung cấp địa chỉ URL cho template.',
          },
        },
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Phải cung cấp danh mục cho template.',
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
        beforeValidate(template) {
          if (!template.name) template.name = '';
          if (!template.url) template.url = '';
          if (!template.category) template.category = '';
          if (!template.price) template.price = 0;
        },
      },
    }
  );

  templates.associate = function(models) {
    models.templates.hasMany(models.billDetails, {
      foreignKey: 'templateFk',
      sourceKey: 'id',
      onDelete: 'CASCADE',
    });
  };

  return templates;
}
