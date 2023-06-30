import React from "react";
import { formatRupiah } from "../../components/format";

const TableRiwayat = ({ dataTable }) => {
  return (
    <table className="w-full flex-auto">
      <thead>
        <tr>
          <th>Kode</th>
          <th>Pesanan</th>
          <th>Total</th>
          <th>Pembayaran</th>
        </tr>
      </thead>
      <tbody>
        {dataTable ? (
          dataTable.map((item, i) => (
            <tr key={i}>
              <td>{item.kode ? item.kode : "-"}</td>
              <td>{item.pesanan ? item.pesanan : "-"}</td>
              <td>{item.total ? formatRupiah(item.total) : 0}</td>
              <td>{item.pembayaran ? item.pembayaran : "-"}</td>
            </tr>
          ))
        ) : (
          <tr>Bahan Baku Tidak Tersedia</tr>
        )}
      </tbody>
    </table>
  );
};

const DashboardAdmin = () => {
  return (
    <div className="h-[calc(100vh-110px)] grid grid-cols-3 gap-4">
      {/* grafik */}
      <div className="col-span-2 flex flex-col gap-2">
        <h2 className="flex-none">Penjualan Produk 6 Bulan Terakhir</h2>
        <div className="w-full flex-auto bg-gray-300 rounded-lg"></div>
      </div>
      {/* score card */}
      <div className="col-start-3 col-span-1 row-span-2"></div>
      {/* riwayat pesanan */}
      <div className="col-span-2 col-start-1 flex flex-col gap-2">
        <div>
          <h2>Riwayat Pesanan</h2>
          <p>Riwayat Pesanan Lotus Crunchy</p>
        </div>
        <TableRiwayat />
      </div>
    </div>
  );
};

export default DashboardAdmin;
