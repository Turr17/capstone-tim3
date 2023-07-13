import React from "react";
import { formatRupiah } from "../../components/format";
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
          <th>No Transaksi</th>
          <th>Tanggal Waktu</th>
          <th>Produk</th>
          <th>Jumlah</th>
          <th>Total</th>
          <th>Pembayaran</th>
        </tr>
      </thead>
      <tbody>
        {dataPesanan?.data?.map((item, i) => (
          <tr key={i}>
            <td>{item._id.substring(3, 9) ?? "-"}</td>
            <td>{item.tanggalPesanan ?? "-"}</td>
            <td>
              {item.pesanan?.map((el) => (
                <>
                  <p>{el[0]}</p>
                  <p>{el[1]}</p>
                </>
              )) ?? "-"}
            </td>
            <td>{item.jumlahPesanan ?? 0}</td>
            <td>{formatRupiah(item.totalBelanja) ?? 0}</td>
            <td>{item.pembayaran ?? "-"}</td>
            <td>??</td>
          </tr>
        )) ?? <tr>Pesanan Tidak Tersedia</tr>}
      </tbody>
    </table>
  );
};

const RiwayatPesanan = () => {
  return (
    <>
      <div className="mb-10">
        <h2>Riwayat Pesanan</h2>
        <p>Riwayat pesanan anda saat ini</p>
      </div>
      <TablePesanan />
    </>
  );
};

export default RiwayatPesanan;
