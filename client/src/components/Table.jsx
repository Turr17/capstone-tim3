export const TablePesananAdmin = ({ dataTable }) => {
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
        {dataTable?.map((item, i) => (
          <tr key={i}>
            <td>{item.kode}</td>
            <td>{item.status}</td>
            <td>{item.pesanan}</td>
            <td>{item.total}</td>
            <td>{item.metodeBayar}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const TableInventoryAdmin = ({ dataTable }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nama Bahan</th>
          <th>Status</th>
          <th>Total</th>
          <th>Metode Pembayaran</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {dataTable?.map((item, i) => (
          <tr key={i}>
            <td>{item.kode}</td>
            <td>{item.status}</td>
            <td>{item.pesanan}</td>
            <td>{item.total}</td>
            <td>{item.metodeBayar}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};