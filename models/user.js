'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    github_id: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Usermovie);
  };
  return User;
};