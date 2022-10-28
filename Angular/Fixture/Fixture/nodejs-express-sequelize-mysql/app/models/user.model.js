module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    name: {
      type: Sequelize.STRING
    },
    surname: {
      type: Sequelize.STRING
    },
    dni: {
      type: Sequelize.INTEGER
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
