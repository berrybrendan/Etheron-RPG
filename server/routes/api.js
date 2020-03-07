const express = require('express');
const userController = require("../controllers/usersController");
const router = new express.Router();

router.route('/user/')
  .get(userController.findAll);


router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message.",
    // user values passed through from auth middleware
    user: req.user
  });
});

module.exports = router;
