import React from "react";
import { GetData } from "../../components/api";
import { currentDatetime } from "../../components/format";
import axios from "axios";

const TablePesanBahan = () => {
  const Beli = () => {
    const { users } = GetData("http://localhost:5000/beli");
    console.log(users);
    return users;
  };
  const Bahan = () => {
    const { users } = GetData("http://localhost:5000/bahan");
    console.log(users);
    return users;
  };
  const dataBeli = Beli();
  const dataBahan = Bahan();

  const handleConfirm = (id) => {
    const order = dataBeli?.data?.find((item) => item._id === id);

    const dataPesanan = {
      tanggal: currentDatetime(),
      bahan: order.bahan,
      jumlah: order.jumlah,
      status: "selesai",
    };
    axios
      .put(`http://localhost:5000/beli/update/${id}`, dataPesanan)
      .then((res) => {
        console.log(res);

        dataBahan?.data?.map((item) => {
          if (item.namaBahan.toLowerCase() === order.bahan.toLowerCase()) {
            axios
              .put(`http://localhost:5000/bahan/update/${item._id}`, {
                namaBahan: item.namaBahan,
                jumlahBahan:
                  parseInt(item.jumlahBahan) + parseInt(order.jumlah),
                supplier: item.supplier,
                status: item.status,
                minimum: item.minimum,
              })
              .then((res) => {
                console.log(res);
                alert("Pesanan berhasil dikirim");
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Pesanan gagal dikirim");
      });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Tanggal Waktu</th>
          <th>Bahan Baku</th>
          <th>Status</th>
          <th>Jumlah Pesanan</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {dataBeli?.data?.map((item, i) => (
          <tr key={i}>
            <td>{item.tanggal ?? "-"}</td>
            <td>{item.bahan ?? "-"}</td>
            <td>{item.status ?? "-"}</td>
            <td>{item.jumlah ?? 0}</td>
            <td>
              <div
                onClick={() => handleConfirm(item._id)}
                className="w-fit cursor-pointer bg-red-400 px-2 py-1 rounded text-white"
              >
                Konfirmasi
              </div>
            </td>
          </tr>
        )) ?? <tr>Pesanan Bahan Baku Tidak Tersedia</tr>}
      </tbody>
    </table>
  );
};

const PesananSupplier = () => {
  return (
    <div>
      <div className="mb-10">
        <h2>Pesanan Bahan Baku</h2>
        <p>Pesanan stok bahan baku Lotus Crunchy.</p>
      </div>
      <TablePesanBahan />
    </div>
  );
};

export default PesananSupplier;
