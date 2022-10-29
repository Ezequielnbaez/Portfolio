module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    name: {
      type: Sequelize.STRING,
    },
    surname: {
      type: Sequelize.STRING
    },
    dni: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true
    },
    email: {
      type: Sequelize.STRING
    },
    tel: {
      type: Sequelize.INTEGER
    },
  });

  return User;
};
