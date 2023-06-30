import React from "react";
import { formatRupiah } from "../../components/format";
import { StatusBar } from "../../components";

const TablePesanan = ({ dataTable }) => {
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
        {dataTable ? (
          dataTable.map((item, i) => (
            <tr key={i}>
              <td>{item.kode ? item.kode : "-"}</td>
              <td>
                {item.status ? (
                  item.status === "Selesai" ? (
                    <StatusBar status='done' title="Pesanan Selesai" />
                  ) : (
                    <StatusBar status='danger' title="Pesanan Baru" />
                  )
                ) : (
                  "-"
                )}
              </td>
              <td>{item.pesanan ? item.pesanan : "-"}</td>
              <td>{item.total ? formatRupiah(item.total) : "-"}</td>
              <td>{item.metodeBayar ? item.metodeBayar : "-"}</td>
              <td>halo</td>
            </tr>
          ))
        ) : (
          <tr>Pesanan Tidak Tersedia</tr>
        )}
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
