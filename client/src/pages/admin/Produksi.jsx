import React from "react";
import { formatRupiah } from "../../components/format";

const TableProduk = ({ dataTable }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Produk</th>
          <th>Jumlah Jadi</th>
          <th>Jumlah Frozen</th>
          <th>Minimum</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {dataTable ? (
          dataTable.map((item, i) => (
            <tr key={i}>
              <td>{item.produk ? item.produk : "-"}</td>
              <td>{item.jumlahJadi ? item.jumlahJadi : "-"}</td>
              <td>{item.jumlahFrozen ? item.jumlahFrozen : 0}</td>
              <td>{item.minimum ? item.minimum : "-"}</td>
              <td>{item.harga ? formatRupiah(item.harga) : 0}</td>
              <td>halo</td>
            </tr>
          ))
        ) : (
          <tr>Produk Tidak Tersedia</tr>
        )}
      </tbody>
    </table>
  );
};

const Produksi = () => {
  return (
    <div>
      <div className="mb-10">
        <h2>Persediaan Produk Lotus Crunchy</h2>
        <p>Informasi stok produk dan frozen stok lotus crunchy.</p>
      </div>
      <TableProduk />
    </div>
  );
};

export default Produksi;
