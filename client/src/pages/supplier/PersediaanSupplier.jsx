import React from "react";
import { formatRupiah } from "../../components/format";
import axios from "axios";

const TablePesanBahan = ({ handleSelect }) => {
  const dataBahan = async () => {
    try {
      const response = await fetch("http://localhost:5000/bahan");
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/bahan/${id}`)
  } 

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
        {dataBahan?.data?.map((item, i) => (
          <tr key={i}>
            <td>{item.bahan ?? "-"}</td>
            <td>{item.stok ?? 0}</td>
            <td>
              <div
                onClick={handleSelect(item._id)}
                className="w-8 h-8 bg-status-green text-white grid place-items-center text-xl"
              >
                +
              </div>
              <div
                onClick={handleDelete(item._id)}
                className="w-8 h-8 bg-status-red text-white grid place-items-center text-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </td>
          </tr>
        )) ?? <tr>Bahan Baku Tidak Tersedia</tr>}
      </tbody>
    </table>
  );
};

const PersediaanSupplier = () => {
  const [selected, setSelected] = React.useState();
  const handleSelect = (e) => setSelected(e)
  
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
