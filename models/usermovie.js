'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usermovie = sequelize.define('Usermovie', {
    sceneItList: DataTypes.BOOLEAN,
    aintSceneItList: DataTypes.BOOLEAN
  }, {});
  Usermovie.associate = function(models) {
    Usermovie.belongsTo(models.Movie);
    Usermovie.belongsTo(models.User);
  };
  return Usermovie;
};