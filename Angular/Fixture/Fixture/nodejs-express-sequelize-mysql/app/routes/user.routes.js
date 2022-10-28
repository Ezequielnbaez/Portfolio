module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create 
  router.post("/", users.create);

  app.use('/api/users', router);
};
