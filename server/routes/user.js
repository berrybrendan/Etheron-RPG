const router = require("express").Router();
const usersController = require("../controllers/userController");

// Matches with "/api/user"
router.route("/:email")
  .get(usersController.findOne)
  // .post(usersController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

module.exports = router;
