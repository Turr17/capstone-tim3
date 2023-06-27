const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.use(express.urlencoded({ extended: true }));

// menampilkan data
recordRoutes.route("/bahan").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  db_connect
    .collection("bahanbaku")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('material berhasil ditampilkan')
      res.json({
        message: "material berhasil ditampilkan",
        data: data,
      });
    });
});

// menampilkan data by id
recordRoutes.route("/bahan/:id").get(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("bahanbaku")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then((data) => {
      console.log('material berhasil ditampilkan')
      res.json({
        message: "material berhasil ditampilkan",
        data: data,
      });
    });
});

// menambahkan data
recordRoutes.route("/bahan/add").post(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myObj = {
    namaBahan: req.body.namaBahan,
    jumlahBahan: req.body.jumlahBahan,
    hargaBahan: req.body.hargaBahan,
    supplier: req.body.supplier,
  };
  db_connect
    .collection("bahanbaku")
    .insertOne(myObj, function (err, result) {
      if (err) throw err;
      res.json(result);
    })
    .then(() => {
      console.log('material berhasil ditambahkan')
      res.json({
        message: "material berhasil ditambahkan",
        data: myObj,
      });
    });
});

// mengupdate data
recordRoutes.route("/bahan/update/:id").put(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  let newValues = {
    $set: {
      namaBahan: req.body.namaBahan,
      jumlahBahan: req.body.jumlahBahan,
      hargaBahan: req.body.hargaBahan,
      supplier: req.body.supplier,
    },
  };
  db_connect
    .collection("bahanbaku")
    .updateOne(myquery, newValues, function (err, result) {
      if (err) throw err;
      console.log("berhasil update material");
      res.json(result);
    })
    .then(() => {
      console.log("berhasil update material");
      res.json({
        message: "Data berhasil diupdate",
        data: newValues,
      });
    });
});

// menghapus data
recordRoutes.route("/bahan/delete/:id").delete(function (req, res) {
  let db_connect = dbo.getDb("capstone");
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect
    .collection("bahanbaku")
    .deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("material berhasil dihapus");
      res.json(result);
    })
    .then((data) => {
      console.log("material berhasil dihapus");
      res.json({
        message: "material berhasil dihapus",
        data: data,
      });
    });
});

module.exports = recordRoutes;