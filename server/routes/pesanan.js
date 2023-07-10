const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/pesanan").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  db_connect
    .collection("pesanan")
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
recordRoutes.route("/pesanan/:id").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("pesanan")
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
recordRoutes.route("/pesanan/add").post(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myObj = {
    tanggalPesanan: req.body.tanggalPesanan,
    pesanan: req.body.pesanan,
    jumlahPesanan: req.body.jumlahPesanan,
    totalBelanj: req.body.totalBelanj,
    pembayaran: req.body.pembayaran,
    status: req.body.status,
  };
  db_connect
    .collection("pesanan")
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
recordRoutes.route("/pesanan/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      tanggalPesanan: req.body.tanggalPesanan,
      pesanan: req.body.pesanan,
      jumlahPesanan: req.body.jumlahPesanan,
      totalBelanj: req.body.totalBelanj,
      pembayaran: req.body.pembayaran,
      status: req.body.status,
    },
  };
  db_connect
    .collection("pesanan")
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
recordRoutes.route("/pesanan/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("pesanan")
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
