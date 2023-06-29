import React from "react";
import { formatRupiah } from "../../components/format";

const TablePesanBahan = ({ dataTable }) => {
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
        {dataTable ? (
          dataTable.map((item, i) => (
            <tr key={i}>
              <td>{item.bahan ? item.bahan : "-"}</td>
              <td>{item.status ? item.status : "-"}</td>
              <td>{item.pesananBahan ? item.pesananBahan : 0}</td>
              <td>{item.hargaBahan ? formatRupiah(item.hargaBahan) : "-"}</td>
              <td>{item.total ? formatRupiah(item.total) : 0}</td>
              <td>halo</td>
            </tr>
          ))
        ) : (
          <tr>Pesanan Bahan Baku Tidak Tersedia</tr>
        )}
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
