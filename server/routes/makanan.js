const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/makanan").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  db_connect
    .collection("makanan")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('product berhasil ditampilkan')
      res.json({
        message: "product berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/makanan/:id").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("makanan")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('product berhasil ditampilkan')
      res.json({
        message: "product berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/makanan/add").post(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myObj = {
    namaMakanan: req.body.namaMakanan,
    hargaMakanan: req.body.hargaMakanan,
    jumlahMakanan: req.body.jumlahMakanan,
    jumlahFrozen: req.body.jumlahFrozen,
    tanggalProduksi: req.body.tanggalProduksi,
    minimum: req.body.minimum,
    status: req.body.status,
  };
  db_connect
    .collection("makanan")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('product berhasil ditambahkan')
      res.json({
        message: "product berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/makanan/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      namaMakanan: req.body.namaMakanan,
      hargaMakanan: req.body.hargaMakanan,
      jumlahMakanan: req.body.jumlahMakanan,
      jumlahFrozen: req.body.jumlahFrozen,
      tanggalProduksi: req.body.tanggalProduksi,
      minimum: req.body.minimum,
      status: req.body.status,
    },
  };
  db_connect
    .collection("makanan")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update product");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update product");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/makanan/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("makanan")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("product berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("product berhasil dihapus");
      res.json({
        message: "product berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;