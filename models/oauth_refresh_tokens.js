'use strict';
module.exports = (sequelize, DataTypes) => {
  var oauth_refresh_tokens = sequelize.define('oauth_refresh_tokens', {
    refresh_token: { type: sequelize.STRING, unique: true },
    user_id: DataTypes.STRING,
    is_revoke: DataTypes.BOOLEAN,
    expires_at: DataTypes.DATE,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  oauth_refresh_tokens.associate = function(models) {
    // associations can be defined here
  };
  return oauth_refresh_tokens;
};