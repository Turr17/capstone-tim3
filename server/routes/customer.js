const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/customer").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  db_connect
    .collection("customer")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('customer berhasil ditampilkan')
      res.json({
        message: "customer berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/customer/:id").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("customer")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('customer berhasil ditampilkan')
      res.json({
        message: "customer berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/customer/add").post(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myObj = {
    username: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  db_connect
    .collection("customer")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('customer berhasil ditambahkan')
      res.json({
        message: "customer berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/customer/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      username: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
  };
  db_connect
    .collection("customer")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update customer");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update customer");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/customer/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("customer")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("customer berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("customer berhasil dihapus");
      res.json({
        message: "customer berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;