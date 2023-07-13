import React from "react";
import { formatRupiah } from "../../components/format";
import { StatusBar } from "../../components";
import { GetData } from "../../components/api";

const TableBahanBaku = () => {
  const Bahan = () => {
    const { users } = GetData("http://localhost:5000/bahan");
    console.log(users);
    return users;
  };
  const dataBahanBaku = Bahan();
  console.log({ dataBahanBaku })

  return (
    <table>
      <thead>
        <tr>
          <th>Bahan Baku</th>
          <th>Status</th>
          <th>Jumlah</th>
          <th>Minimum</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {dataBahanBaku?.data?.map((item, i) => (
          <tr key={i}>
            <td>{item.namaBahan ?? "-"}</td>
            <td>
              {(item.jumlahBahan <= item.minimum ? (
                <StatusBar status="danger" title="Minimum" />
              ) : (
                <StatusBar status="done" title="Tercukupi" />
              )) ?? "-"}
            </td>
            <td>
              {item.jumlahBahan ?? 0} {item.satuanBahan ?? null}
            </td>
            <td>
              {item.minimum ?? "-"} {item.satuanBahan ?? null}
            </td>
            <td>??</td>
          </tr>
        )) ?? <tr>Bahan Baku Tidak Tersedia</tr>}
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
};

export default BahanBaku;
