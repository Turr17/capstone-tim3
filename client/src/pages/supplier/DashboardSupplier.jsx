import React from "react";
import { formatRupiah } from "../../components/format";
import { ScoreCard, StatusBar } from "../../components";

const TableRiwayat = () => {
  const dataBahan = async () => {
    try {
      const response = await fetch("http://localhost:5000/bahan");
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <table className="w-full flex-auto">
      <thead>
        <tr>
          <th>Bahan Baku</th>
          <th>Status</th>
          <th>Jumlah</th>
          <th>Harga</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {dataBahan?.data?.map((item, i) => (
          <tr key={i}>
            <td>{item.bahan ?? "-"}</td>
            <td>
              {(item.status <= item.minimum ? (
                <StatusBar status="danger" title="Minimum" />
              ) : (
                <StatusBar status="done" title="Tercukupi" />
              )) ?? "-"}
            </td>
            <td>{item.jumlah ?? 0}</td>
            <td>{formatRupiah(item.harga) ?? 0}</td>
            <td>{formatRupiah(item.total) ?? 0}</td>
          </tr>
        )) ?? <tr>Bahan Baku Tidak Tersedia</tr>}
      </tbody>
    </table>
  );
};

const DashboardSupplier = () => {
  return (
    <div className="min-h-[calc(100vh-110px)] grid grid-cols-3 gap-y-4 gap-x-8 pb-5">
      {/* grafik */}
      <div className="col-span-2 flex flex-col gap-2">
        <h2 className="flex-none">Permintaan Bahan Baku Sebulan Terakhir</h2>
        <div className="w-full flex-auto bg-gray-300 rounded-lg"></div>
      </div>
      {/* score card */}
      <div className="col-start-3 col-span-1 row-span-2 space-y-4 pt-9">
        <ScoreCard title="50 kg" desc="Stok Tepung Tapioka" />
        <ScoreCard title="500 liter" desc="Stok Minyak Goreng" />
        <ScoreCard title="40 kg" desc="Stok Daging Sapi" />
        <ScoreCard title="30 kg" desc="Stok Daging Ayam" />
        <ScoreCard title="100 liter" desc="Stok Air" />
        <ScoreCard title="23 kg" desc="Stok Wortel" />
      </div>
      {/* riwayat pesanan */}
      <div className="col-span-2 col-start-1 flex flex-col gap-3">
        <div>
          <h2>Inventory Lotus Crunchy</h2>
          <p>Informasi Stok Bahan Baku Lotus Crunchy</p>
        </div>
        <TableRiwayat />
      </div>
    </div>
  );
};

export default DashboardSupplier;
