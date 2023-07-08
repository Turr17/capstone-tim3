import React from "react";
import { formatRupiah } from "../../components/format";

const TablePesanBahan = () => {
  const dataBahan = async () => {
    try {
      const response = await fetch("http://localhost:5000/bahan");
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Bahan Baku</th>
          <th>Status</th>
          <th>Jumlah Pesanan</th>
          <th>Harga</th>
          <th>Total</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {dataBahan?.data?.map((item, i) => (
          <tr key={i}>
            <td>{item.namaBahan ?? "-"}</td>
            <td>{item.status ?? "-"}</td>
            <td>{item.jumlahBahan ?? 0}</td>
            <td>{formatRupiah(item.hargaBahan) ?? "-"}</td>
            <td>
              {formatRupiah(
                parseInt(item.jumlahBahan) * parseInt(item.hargaBahan)
              ) ?? 0}
            </td>
            <td>??</td>
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
