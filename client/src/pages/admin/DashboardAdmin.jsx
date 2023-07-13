/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { formatRupiah } from "../../components/format";
import { ScoreCard } from "../../components";
import { GetData } from "../../components/api";

const TableRiwayat = () => {
  const Pesanan = () => {
    const { users } = GetData("http://localhost:5000/pesanan");
    console.log(users);
    return users;
  };
  const dataPesanan = Pesanan();
  
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
    <div className="h-screen w-full flex pb-5">
      <iframe
        width="90%"
        height="3400"
        src="https://lookerstudio.google.com/embed/reporting/fa1b9f82-2937-43a6-a4db-508934299907/page/hJWWD"
        frameborder="0"
        className="mx-auto"
      />
    </div>
  );
};

export default DashboardAdmin;
