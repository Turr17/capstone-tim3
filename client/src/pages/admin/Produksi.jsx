import React from "react";
import { StatusBar } from "../../components";

const TableProduk = () => {
  const dataProduksi = async () => {
    try {
      const response = await fetch("http://localhost:5000/makanan");
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Produk</th>
          <th>Jumlah Jadi</th>
          <th>Jumlah Frozen</th>
          <th>Minimum</th>
          <th>Status</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {dataProduksi?.data?.map((item, i) => (
          <tr key={i}>
            <td>{item.namaMakanan ?? "-"}</td>
            <td>{item.jumlahMakanan ?? "-"}</td>
            <td>{item.jumlahFrozen ?? 0}</td>
            <td>{item.minimum ?? "-"}</td>
            <td>
              {item.status <= item.minimum ? (
                <StatusBar status="danger" title="Minimum" />
              ) : (
                <StatusBar status="done" title="Tercukupi" /> ?? "-"
              )}
            </td>
            <td>??</td>
          </tr>
        )) ?? <tr>Produk Tidak Tersedia</tr>}
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
