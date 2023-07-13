import React from "react";
import { formatRupiah } from "../../components/format";
import axios from "axios";
import { GetData } from "../../components/api";

const TablePesanBahan = ({ handleSelect }) => {
  const Supplier = () => {
    const { users } = GetData("http://localhost:5000/supplier");
    console.log(users);
    return users;
  };
  const supplier = Supplier();

  return (
    <table>
      <thead>
        <tr>
          <th>Bahan Baku</th>
          <th>Stock saat ini</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {supplier?.data?.map((item) =>
          item.bahan?.map((el,i) => (
            <tr key={i}>
              <td>{el[0] ?? "-"}</td>
              <td>{el[1] ?? 0}</td>
              <td>??</td>
            </tr>
          ))
        ) ?? <tr>Bahan Baku Tidak Tersedia</tr>}
      </tbody>
    </table>
  );
};

const PersediaanSupplier = () => {
  const [selected, setSelected] = React.useState();
  const handleSelect = (e) => setSelected(e);

  return (
    <div>
      <div className="mb-10">
        <h2>Gudang Persediaan Bahan Baku</h2>
        <p>Total stok bahan baku gudang supplier</p>
      </div>
      <TablePesanBahan handleSelect={handleSelect} />
    </div>
  );
};

export default PersediaanSupplier;
