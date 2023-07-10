import React from 'react'
import { formatRupiah } from '../../components/format'

const TablePesanan = () => {
  const dataPesanan = async () => {
    try {
      const response = await fetch("http://localhost:5000/pesanan");
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

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
            <td>{item._id ?? "-"}</td>
            <td>{item.tanggal ?? '-'}</td>
            <td>{item.produk ?? "-"}</td>
            <td>{item.jumlah ?? 0}</td>
            <td>{formatRupiah(item.total) ?? 0}</td>
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
}

export default RiwayatPesanan