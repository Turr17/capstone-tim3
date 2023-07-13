import React from "react";
import { formatRupiah } from "../../components/format";
import { StatusBar } from "../../components";
import { GetData } from "../../components/api";

const TablePesanan = () => {
  const Pesanan = () => {
    const { users } = GetData("http://localhost:5000/pesanan");
    console.log(users);
    return users;
  };
  const dataPesanan = Pesanan();

  return (
    <table>
      <thead>
        <tr>
          <th>Kode Pesanan</th>
          <th>Status</th>
          <th>Pesanan</th>
          <th>Total</th>
          <th>Metode Pembayaran</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {dataPesanan?.data?.map((item, i) => (
          <tr key={i}>
            <td>{item._id.substring(3,9) ?? "-"}</td>
            <td>
              {item.status === "Selesai" ? (
                <StatusBar status="success" title="Pesanan Selesai" />
              ) : (
                <StatusBar status="danger" title="Pesanan Baru" /> ?? "-"
              )}
            </td>
            <td>{item.pesanan ?? '-'}</td>
            <td>{formatRupiah(item.totalBelanja) ?? "-"}</td>
            <td>{item.pembayaran ?? "-"}</td>
            <td>??</td>
          </tr>
        )) ?? <tr>Pesanan Tidak Tersedia</tr>}
      </tbody>
    </table>
  );
};

const PesananAdmin = () => {
  return (
    <div>
      <div className="mb-10">
        <h2>Pesanan Pelanggan</h2>
        <p>Informasi pesanan pelanggan Lotus Crunchy</p>
      </div>
      <TablePesanan />
    </div>
  );
};

export default PesananAdmin;
