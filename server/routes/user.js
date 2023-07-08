const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/user").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  db_connect
    .collection("user")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log("order berhasil ditampilkan");
      res.json({
        message: "order berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("user")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log("order berhasil ditampilkan");
      res.json({
        message: "order berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/user/add").post(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myObj = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  };
  db_connect
    .collection("user")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log("order berhasil ditambahkan");
      res.json({
        message: "order berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/user/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    },
  };
  db_connect
    .collection("user")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update order");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update order");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/user/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("user")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("order berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("order berhasil dihapus");
      res.json({
        message: "order berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;
