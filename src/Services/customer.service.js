const connection = require("./db");
class CustomerService {
  async getCustomers() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM customers", function (err, data, fields) {
        if (err) return reject(err);
        return resolve(data);
      });
    });
  }

  async getCustomer(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM customers WHERE ID = ?",
        "UPDATE "[id],
        function (err, data, fields) {
          if (err) return reject(err);
          return resolve(data);
        }
      );
    });
    // return [
    //   {
    //     id: 1,
    //     name: "Adams",
    //   },
    // ];
  }

  // updateCustomer() {
  //   return {
  //     id: 1,
  //     name: "Adams Kendricks",
  //   };
  // }

  async updateCustomer(id, newData) {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE customers SET ? WHERE ID = ?",
        [newData, id],
        function (err, data, fields) {
          if (err) return reject(err);
          return resolve(data);
        }
      );
    });
  }

  // deleteCustomer() {
  //   return "Customer deleted";
  // }

  async deleteCustomer(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM customers WHERE ID = ?",
        [id],
        function (err, data, fields) {
          if (err) return reject(err);
          return resolve(data);
        }
      );
    });
  }
}

module.exports = CustomerService;
