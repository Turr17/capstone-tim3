import React from "react";
import { StatusBar } from "../../components";
import { GetData } from "../../components/api";

const TableProduk = () => {
  const Produk = () => {
    const { users } = GetData("http://localhost:5000/makanan");
    console.log(users);
    return users;
  };
  const dataProduk = Produk();

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
        {dataProduk?.data?.map((item, i) => (
          <tr key={i}>
            <td>{item.namaMakanan ?? "-"}</td>
            <td>{item.jumlahMakanan ?? "-"}</td>
            <td>{item.jumlahFrozen ?? 0}</td>
            <td>{item.minimum ?? "-"}</td>
            <td>
              {item.status <= item.minimum ? (
                <StatusBar status="danger" title="Minimum" />
              ) : (
                <StatusBar status="success" title="Tercukupi" /> ?? "-"
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
