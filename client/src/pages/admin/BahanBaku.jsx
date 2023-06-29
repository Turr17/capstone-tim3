import React from 'react'
import { formatRupiah } from '../../components/format';

const TableBahanBaku = ({ dataTable }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Bahan Baku</th>
          <th>Status</th>
          <th>Jumlah</th>
          <th>Minimum</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {dataTable ? (
          dataTable.map((item, i) => (
            <tr key={i}>
              <td>{item.bahan ? item.bahan : "-"}</td>
              <td>{item.status ? item.status : "-"}</td>
              <td>{item.jumlah ? item.jumlah : 0}</td>
              <td>{item.minimum ? item.minimum : "-"}</td>
              <td>{item.harga ? formatRupiah(item.harga) : 0}</td>
              <td>halo</td>
            </tr>
          ))
        ) : (
          <tr>Bahan Baku Tidak Tersedia</tr>
        )}
      </tbody>
    </table>
  );
};

const BahanBaku = () => {
  return (
    <div>
      <div className="mb-10">
        <h2>Inventory Lotus Crunchy</h2>
        <p>Informasi stok bahan baku lotus crunchy.</p>
      </div>
      <TableBahanBaku />
    </div>
  );
}

export default BahanBaku