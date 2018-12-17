import { PAYMENT_TYPE } from '../commons/enum';

export default function(sequelize, Sequelize) {
  const bills = sequelize.define(
    'bills',
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
            msg: 'Phải cung cấp họ tên.',
          },
        },
      },
      email: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Phải cung cấp địa chỉ email.',
          },
        },
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'phone_number',
        validate: {
          notEmpty: {
            msg: 'Phải cung cấp số điện thoại.',
          },
        },
      },
      paymentType: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'payment_type',
        defaultValue: PAYMENT_TYPE.TRANSFER,
        validate: {
          isIn: {
            args: [Object.keys(PAYMENT_TYPE).map(item => PAYMENT_TYPE[item])],
            msg: 'Phương thức thanh toán không hợp lệ',
          },
        },
      },
      note: {
        type: Sequelize.STRING,
        allowNull: true,
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
        beforeValidate(bill) {
          if (!bill.name) bill.name = '';
          if (!bill.email) bill.email = '';
          if (!bill.phoneNumber) bill.phoneNumber = '';
        },
      },
    }
  );

  bills.associate = function(models) {
    models.bills.hasMany(models.billDetails, {
      foreignKey: 'billFk',
      sourceKey: 'id',
      onDelete: 'CASCADE',
    });
  };

  return bills;
}
