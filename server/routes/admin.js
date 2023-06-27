const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/admin").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  db_connect
    .collection("admin")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('cashier berhasil ditampilkan')
      res.json({
        message: "cashier berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/admin/:id").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("admin")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('cashier berhasil ditampilkan')
      res.json({
        message: "cashier berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/admin/add").post(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myObj = {
    namaAdmin: req.body.namaAdmin,
    username: req.body.username,
  };
  db_connect
    .collection("admin")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('cashier berhasil ditambahkan')
      res.json({
        message: "cashier berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/admin/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      namaAdmin: req.body.namaAdmin,
      username: req.body.username,
    },
  };
  db_connect
    .collection("admin")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update cashier");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update cashier");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/admin/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("admin")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("cashier berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("cashier berhasil dihapus");
      res.json({
        message: "cashier berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;