import React from "react";
import { formatRupiah } from "../../components/format";
import { ScoreCard } from "../../components";

const TableRiwayat = () => {
  const dataPesanan = async () => {
    try {
      const response = await fetch("http://localhost:5000/pesanan");
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
  
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
        {dataPesanan?.data?.map((item, i) => (
            <tr key={i}>
              <td>{item._id ?? "-"}</td>
              <td>{item.pesanan ?? "-"}</td>
              <td>{formatRupiah(item.totalBelanja) ?? 0}</td>
              <td>{item.pembayaran ?? "-"}</td>
            </tr>
          ))?? <tr>Bahan Baku Tidak Tersedia</tr>}
      </tbody>
    </table>
  );
};

const DashboardAdmin = () => {
  return (
    <div className="min-h-[calc(100vh-110px)] grid grid-cols-3 gap-y-4 gap-x-8 pb-5">
      {/* grafik */}
      <div className="col-span-2 flex flex-col gap-2">
        <h2 className="flex-none">Penjualan Produk 6 Bulan Terakhir</h2>
        <div className="w-full flex-auto bg-gray-300 rounded-lg"></div>
      </div>
      {/* score card */}
      <div className="col-start-3 col-span-1 row-span-2 space-y-4 pt-9">
        <ScoreCard title="5000" desc="Produk Terjual" />
        <ScoreCard title="250" desc="Total Ulasan" />
        <ScoreCard title="20" desc="Stok Frozen Food" />
        <ScoreCard title="10" desc="Pesanan Tersedia" />
      </div>
      {/* riwayat pesanan */}
      <div className="col-span-2 col-start-1 flex flex-col gap-3">
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
