const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save
exports.create = (req, res) => {
  // Validate request
  if (!req.body.dni) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create
  const user = {
    name: req.body.name,
    surname: req.body.surname,
    dni: req.body.dni,
    email: req.body.email,
    tel: req.body.tel
  };

  // Save in the database
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating."
      });
    });
}
