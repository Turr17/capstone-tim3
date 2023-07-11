const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// get driver conection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});

// get routes
const admin = require("./routes/admin");
const supplier = require("./routes/supplier");
const customer = require("./routes/customer");
const makanan = require("./routes/makanan");
const bahan = require("./routes/bahan");
const beli = require("./routes/beli");
const pesanan = require("./routes/pesanan");
const user = require("./routes/user");

// use routes
app.use([admin, supplier, customer, makanan, bahan, beli, pesanan, user]);