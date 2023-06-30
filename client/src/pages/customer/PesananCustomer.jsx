import React, { useEffect, useState } from "react";
import { lotusChicken, lotusBeef } from "../../assets/img";
import { formatRupiah } from "../../components/format";

const PesananCustomer = () => {
  // pesanan state
  const [chicken, setChicken] = useState(0);
  const [beef, setBeef] = useState(0);
  const priceChicken = 38000 * chicken
  const priceBeef = 42000 * chicken

  useEffect(() => {
    console.log({ chicken, beef });
  }, [chicken, beef]);

  // submit pesanan
  const handleSubmit = (e) => {
    e.preventDefault();
    const totalChicken = chicken * 38000;
    const totalBeef = beef * 42000;
    const total = totalChicken + totalBeef;
    const pesanan = {
      chicken,
      beef,
      totalChicken,
      totalBeef,
      total,
    };
    console.log({ pesanan });
  };

  return (
    <div>
      <h1>Menu Lotus Crunchy</h1>
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
        <div className="flex-none flex flex-col gap-5 min-w-[300px]">
          <h2 className="mb-10">Ringkasan Pesanan</h2>
          <div>
            <h3>Lotus Chicken Original</h3>
            <div className="flex justify-between">
              <p>{formatRupiah(priceChicken)}</p>
              <p>x{chicken}</p>
            </div>
          </div>
          <div>
            <h3>Lotus Beef Original</h3>
            <div className="flex justify-between">
              <p>{formatRupiah(priceBeef)}</p>
              <p>x{beef}</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <button type="submit" className="btn btn-primary text-base w-full px-16">
              Buat Pesanan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PesananCustomer;
