const express = require("express");
const port = 8080;

const customerRoutes = require("./Routes/customer.routes");
const app = express();

app.use(express.json());
app.use("/api/customers", customerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
