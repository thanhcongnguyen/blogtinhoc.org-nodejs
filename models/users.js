'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    username: { type: DataTypes.STRING, unique: true },
    email: { type: DataTypes.STRING, unique: true },
    section: DataTypes.STRING,
    state: DataTypes.STRING,
    is_email_verified: DataTypes.BOOLEAN,
    is_required_change_pass: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    change_pass_at: DataTypes.DATE,
    verified_email_at: DataTypes.DATE,
    level: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    timestamps: true,
    tableName: 'users',
    underscored: true
  });
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};