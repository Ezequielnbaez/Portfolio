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
      unique: {
        args: true,
        msg: 'Dni already in use!'
      }
    },
    email: {
      type: Sequelize.STRING
    },
    tel: {
      type: Sequelize.INTEGER
    },
    code: {
      type: Sequelize.STRING
    }
  });

  return User;
};
