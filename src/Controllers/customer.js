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

module.exports.getAllCustomers = async (req, res) => {
  try {
    console.log("Getting all customers");
    const allCustomers = await Customer.getCustomers();

    res.status(200).json(allCustomers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getACustomer = async (req, res) => {
  // console.log(Customer.getCustomer());
  try {
    const ACustomer = await Customer.getCustomer(req.params.id);
    res.status(200).json(ACustomer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// module.exports.updateCustomer = (req, res) => {
//   try {
//     const updatedCustomer = Customer.updateCustomer();
//     res.status(200).json(updatedCustomer);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

module.exports.updateCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const updatedData = req.body;

    const updatedCustomer = await Customer.updateCustomer(
      customerId,
      updatedData
    );
    res.status(200).json(updatedCustomer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// module.exports.deleteCustomer = (req, res) => {
//   try {
//     const deleteCustomer = Customer.deleteCustomer();
//     res.status(200).json(deleteCustomer);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

module.exports.deleteCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;

    const deletedCustomer = await Customer.deleteCustomer(customerId);
    res.status(200).json(deletedCustomer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
