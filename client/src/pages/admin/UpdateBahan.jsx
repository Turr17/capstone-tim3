import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { currentDatetime } from "../../components/format";
import axios from "axios";
import { GetData } from "../../components/api";

const UpdateBahan = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const getID = location.pathname.split("/")[3];

  const Bahan = () => {
    const { users } = GetData("http://localhost:5000/bahan");
    console.log(users);
    return users;
  };
  const dataBahan = Bahan();
  const currentData = dataBahan?.data?.find((item) => item._id === getID);

  const handleSubmit = (e) => {
    e.preventDefault()
    const dataPesanan = {
      tanggal: currentDatetime(),
      bahan: e.target.namaBahan.value,
      jumlah: e.target.jumlahBahan.value,
      status: "diproses",
    };
    axios
      .post("http://localhost:5000/beli/add", dataPesanan)
      .then((res) => {
        console.log(res);
        alert("Pesanan berhasil dibuat");
        e.target.reset();
        navigate('/bahan')
      })
      .catch((err) => {
        console.log(err);
        alert("Pesanan gagal dibuat");
      })
  }
  
  return (
    <div>
      <h2>Update Bahan Baku</h2>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 w-1/2">
        <div className="flex flex-col">
          <label htmlFor="namaBahan">Nama Bahan</label>
          <input
            type="text"
            name="namaBahan"
            id="namaBahan"
            value={currentData?.namaBahan}
            placeholder="Masukkan nama bahan"
            className="form-input"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="jumlahBahan">Jumlah Bahan</label>
          <input
            type="number"
            name="jumlahBahan"
            id="jumlahBahan"
            placeholder="Masukkan jumlah bahan"
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-primary w-fit text-base">Pesan Bahan Baku</button>
      </form>
    </div>
  );
};

export default UpdateBahan;
