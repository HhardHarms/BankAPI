const express = require("express");

const router = express.Router();

const {
  getAllCustomers,
  getACustomer,
  updateCustomer,
  deleteCustomer,
} = require("../Controllers/customer");

router.get("/", getAllCustomers);
router
  .route("/Customer")
  // .get(getACustomer)
  .put(updateCustomer)
  .delete(deleteCustomer);

router.get("/customer/:id", getACustomer);
// router.get("/Customer", getACustomer);
// router.put("/Customer", updateCustomer);
// router.delete("/Customer", deleteCustomer);

module.exports = router;
