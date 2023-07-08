import React, { useEffect, useState } from "react";
import { lotusChicken, lotusBeef } from "../../assets/img";
import { currentDatetime, formatRupiah } from "../../components/format";
import axios from "axios";

const PesananCustomer = () => {
  // pesanan state
  const [chicken, setChicken] = useState(0);
  const [beef, setBeef] = useState(0);
  const priceChicken = 38000 * chicken;
  const priceBeef = 42000 * beef;
  const totalPrice = priceChicken + priceBeef;

  useEffect(() => {
    console.log({ chicken, beef });
  }, [chicken, beef]);

  // submit pesanan
  const handleSubmit = (e) => {
    e.preventDefault();

    const pesanan = {
      tanggalPesanan: currentDatetime(),
      pesanan: [
        ["Lotus Chicken Original", chicken],
        ["Lotus Beef Original", beef],
      ],
      totalBelanja: totalPrice,
      pembayaran: e.target.pembayaran.value,
      status: "Pesanan Baru",
    };

    axios
      .post("http://localhost:5000/pesanan/add", pesanan)
      .then((res) => {
        console.log({ pesanan });
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Menu Lotus Crunchy</h1>
      <p>Berbagai pilihan menu Lotus Crunchy</p>
      <div className="mt-2 w-[800px] h-px bg-gray-800" />
      <div className="flex items-start">
        <ul className="flex-auto space-y-6 mt-10">
          {/* lotus chicken */}
          <li className="flex gap-7">
            <img
              src={lotusChicken}
              alt="lotus-chicken"
              className="w-52 rounded-lg object-cover"
            />
            <div className="flex flex-col gap-2 mt-3">
              <h2>Chicken Originial</h2>
              <p>{formatRupiah(38000)}</p>
              <div className="w-80 flex justify-between items-center mt-auto mb-4">
                <div className="space-x-3">
                  <button
                    type="button"
                    onClick={() => setChicken(chicken + 1)}
                    className="btn btn-primary w-fit text-sm"
                  >
                    Tambah
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setChicken(chicken !== 0 ? chicken - 1 : chicken - 0)
                    }
                    className="btn btn-secondary w-fit text-sm"
                  >
                    kurangi
                  </button>
                </div>
                <h3 className="text-lg">x{chicken}</h3>
              </div>
            </div>
          </li>
          {/* lotus beef */}
          <li className="flex gap-7">
            <img
              src={lotusBeef}
              alt="lotus-beef"
              className="w-52 rounded-lg object-cover"
            />
            <div className="flex flex-col gap-2 mt-3">
              <h2>Beef Originial</h2>
              <p>{formatRupiah(42000)}</p>
              <div className="w-80 flex justify-between items-center mt-auto mb-4">
                <div className="space-x-3">
                  <button
                    type="button"
                    onClick={() => setBeef(beef + 1)}
                    className="btn btn-primary w-fit text-sm"
                  >
                    Tambah
                  </button>
                  <button
                    type="button"
                    onClick={() => setBeef(beef !== 0 ? beef - 1 : beef - 0)}
                    className="btn btn-secondary w-fit text-sm"
                  >
                    kurangi
                  </button>
                </div>
                <h3 className="text-lg">x{beef}</h3>
              </div>
            </div>
          </li>
        </ul>
        <div className="flex-none w-96 flex flex-col gap-5 min-w-[300px] bg-primary p-5 rounded-lg">
          <h2 className="mb-8">Ringkasan Pesanan</h2>
          <div>
            <h3>Lotus Chicken Original</h3>
            <div className="flex justify-between">
              <p className="text-white font-medium">{formatRupiah(priceChicken)}</p>
              <p className="text-white font-medium">x{chicken}</p>
            </div>
          </div>
          <div>
            <h3>Lotus Beef Original</h3>
            <div className="flex justify-between">
              <p className="text-white font-medium">{formatRupiah(priceBeef)}</p>
              <p className="text-white font-medium">x{beef}</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 border-t border-gray-700"
          >
            <div className="pt-3 flex justify-between items-start">
              <div className="">
                <h3>Total Pembayaran</h3>
                <p className="text-white font-medium">{formatRupiah(totalPrice)}</p>
              </div>
              <div className="">
                <label htmlFor="pembayaran">
                  <h3>Metode Pembayaran</h3>
                </label>
                <select
                  name="pembayaran"
                  id="pembayaran"
                  className="form-input"
                >
                  <option value="cash">Cash</option>
                  <option value="debit">Debit</option>
                  <option value="ovo">OVO</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-secondary text-base w-full px-16"
            >
              Buat Pesanan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PesananCustomer;
