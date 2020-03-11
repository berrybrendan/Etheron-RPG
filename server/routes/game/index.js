const router = require("express").Router();
const characterRoutes = require("./characters")

// Dashboard routes
// router.use("/dashboard", dashboardRoutes);
router.use("/characters", characterRoutes)

module.exports = router;
