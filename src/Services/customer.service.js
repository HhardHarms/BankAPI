class CustomerService {
  getCustomers() {
    return [
      {
        id: 1,
        name: "Adams",
      },
      {
        id: 2,
        name: "Godwin",
      },
      {
        id: 3,
        name: "Ndem",
      },
    ];
  }

  getCustomer() {
    return [
      {
        id: 1,
        name: "Adams",
      },
    ];
  }

  updateCustomer() {
    return {
      id: 1,
      name: "Adams Kendricks",
    };
  }

  deleteCustomer() {
    return "Customer deleted";
  }
}

module.exports = CustomerService;
