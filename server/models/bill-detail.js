export default function(sequelize, Sequelize) {
  const billDetails = sequelize.define(
    'billDetails',
    {
      billFk: {
        type: Sequelize.INTEGER,
        field: 'bill_fk',
        allowNull: false,
        validate: {
          isPositive(value) {
            if (value <= 0) throw new Error('Đơn hàng không hợp lệ.');
          },
        },
      },
      templateFk: {
        type: Sequelize.INTEGER,
        field: 'template_fk',
        allowNull: false,
        validate: {
          isPositive(value) {
            if (value <= 0) throw new Error('Template không hợp lệ.');
          },
        },
      },
    },
    {
      timestamps: false,
      tableName: 'bill_details',
      hooks: {
        beforeValidate(billDetail) {
          if (!billDetail.billFk) billDetail.billFk = 0;
          if (!billDetail.templateFk) billDetail.templateFk = 0;
        },
      },
    }
  );

  billDetails.associate = function(models) {
    models.billDetails.belongsTo(models.bills, {
      foreignKey: 'billFk',
      targetKey: 'id',
      onDelete: 'CASCADE',
    });
    models.billDetails.belongsTo(models.templates, {
      foreignKey: 'templateFk',
      targetKey: 'id',
      onDelete: 'CASCADE',
    });
  };

  return billDetails;
}
