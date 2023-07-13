import React from "react";
import { formatRupiah } from "../../components/format";
import { ScoreCard, StatusBar } from "../../components";
import { GetData } from "../../components/api";

const TableRiwayat = () => {
  const Bahan = () => {
    const { users } = GetData("http://localhost:5000/bahan");
    console.log(users);
    return users;
  };
  const dataBahan = Bahan();

  return (
    <table className="w-full flex-auto">
      <thead>
        <tr>
          <th>Bahan Baku</th>
          <th>Jumlah</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {dataBahan?.data?.map((item, i) => (
          <tr key={i}>
            <td>{item.namaBahan ?? "-"}</td>
            <td>{item.jumlahBahan ?? 0}</td>
            <td>
              {(item.status <= item.minimum ? (
                <StatusBar status="danger" title="Minimum" />
              ) : (
                <StatusBar status="success" title="Tercukupi" />
              )) ?? "-"}
            </td>
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
      <div className="col-span-2 flex flex-col gap-2 h-[300px]">
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
      <div className="col-span-2 col-start-1 flex flex-col gap-3 h-[400px] overflow-y-scroll">
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
