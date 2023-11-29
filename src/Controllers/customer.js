const CustomerService = require("../Services/customer.service");

const Customer = new CustomerService();

// module.exports.getAllCustomers = (req, res) => {
//   try {
//     const allCustomers = Customer.getCustomers();

//     res.status(200).json(allCustomers);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

module.exports.getAllCustomers = (req, res) => {
  try {
    const allCustomers = Customer.getCustomers();

    res.status(200).json(allCustomers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getACustomer = (req, res) => {
  console.log(Customer.getCustomer());
  try {
    const ACustomer = Customer.getCustomer();
    res.status(200).json(ACustomer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.updateCustomer = (req, res) => {
  try {
    const updatedCustomer = Customer.updateCustomer();
    res.status(200).json(updatedCustomer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.deleteCustomer = (req, res) => {
  try {
    const deleteCustomer = Customer.deleteCustomer();
    res.status(200).json(deleteCustomer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
