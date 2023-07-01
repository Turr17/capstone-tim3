import React from "react";
import { Link } from "react-router-dom";
import {
  logoKecil,
  lotusBeef,
  lotusChicken,
  pesawatKanan,
  pesawatKiri,
  user1,
  user2,
  user3,
  vector1,
  vector2,
  vector3,
} from "../assets/img";
import { MenuCard, UlasanCard } from "../components";

const Home = () => {
  const menu = [
    ["Home", "/"],
    ["Menu", "#menu"],
    ["Ulasan", "#ulasan"],
  ];

  return (
    <main className="w-full min-h-screen relative">
      <img
        src={vector1}
        alt="bg up"
        className="absolute top-0 right-0 w-1/2 z-0"
      />
      <img
        src={vector2}
        alt="bg-2"
        className="absolute bottom-[20%] left-0 z-0 w-full"
      />
      <img
        src={vector3}
        alt="bg-2"
        className="absolute bottom-0 left-0 z-0 w-full"
      />
      <header className="flex justify-between items-center px-10 py-3 z-10">
        <a href="/" className="flex items-center gap-5">
          <img src={logoKecil} alt="logo" className="w-16 h-16 bg-contain" />
          <div className="text-xl font-semibold text-gray-800">
            Lotus Crunchy
          </div>
        </a>
        <ul className="flex items-center gap-6 z-10">
          {menu.map(([label, path], i) => (
            <li key={i}>
              <a href={path} className="text-white font-medium">
                {label}
              </a>
            </li>
          ))}
          <li className="space-x-2">
            <Link
              to="/login"
              className="btn btn-secondary text-sm font-medium rounded-full"
            >
              Masuk
            </Link>
            <Link
              to="/register"
              className="btn btn-secondary text-sm font-medium rounded-full"
            >
              Daftar
            </Link>
          </li>
        </ul>
      </header>
      {/* hero section */}
      <section
        id="hero"
        className="w-full h-[calc(100vh-88px)] px-10 grid grid-cols-2"
      >
        <div className="col-span-1 grid place-items-center">
          <div className="w-2/3 flex flex-col gap-4">
            <h1 className="text-[40px]">Lotus Crunchy</h1>
            <p className="text-lg">
              The first traditional Lotus Pastry in town. Let's be the next{" "}
              <span className="text-primary font-medium">#lotusenthusiast</span>{" "}
              ONE bite makes you WANT more!
            </p>
            <a
              href="/#ulasan"
              className="btn w-fit px-6 rounded-full bg-green-500 text-white text-sm"
            >
              Selengkapnya
            </a>
          </div>
        </div>
        <div className="col-span-1 grid place-items-center">
          <img
            src={logoKecil}
            alt="logo"
            className="w-1/2 z-10 translate-x-8 -translate-y-8"
          />
        </div>
      </section>
      {/* menu section */}
      <section id="menu" className="h-screen w-full grid place-items-center">
        <div className="w-3/5 flex gap-10 items-start z-10 relative">
          <MenuCard
            num="01"
            title="Chicken Original"
            desc="Crispy lotus pastry with tasty chicken and fresh sprinkled chili"
            image={lotusChicken}
          />
          <MenuCard
            num="02"
            title="Beef Original"
            desc="Crispy lotus pastry with tasty beef teriyaki and fresh sprinkled chili"
            image={lotusBeef}
          />
          <img
            src={pesawatKanan}
            alt="pesawat"
            className="absolute bottom-32 -left-44"
          />
          <img
            src={pesawatKiri}
            alt="pesawat"
            className="absolute bottom-12 -right-44"
          />
        </div>
      </section>
      {/* ulasan section */}
      <section
        id="ulasan"
        className="w-full h-screen px-10 grid place-items-center relative"
      >
        <div className="w-4/5 space-y-10">
          <h1 className="text-white text-center text-3xl z-10">Ulasan Pengguna</h1>
          <div className="flex gap-8 justify-center items-stretch">
            <UlasanCard
              num='1'
              title="Usernotfound123"
              image={user1}
              desc='Enak bapnget, lumayan ngenyangin dengan harga yang murah'
            />
            <UlasanCard
              num='2'
              title="Kitty99"
              image={user2}
              desc='Suka banget, toppingnya melimpah. Makanan luar dengan rasa khas rempah Indonesia.'
            />
            <UlasanCard
              num='3'
              title="GamerBoy"
              image={user3}
              desc='Pertama kali nyoba waktu liburan di Pekanbaru. Langsung jatuh hati rasanya ena banget dan rendah kalori juga. Buka di Medan dong min!'
            />
          </div>
        </div>
      </section>
      <footer className="w-full h-[50vh] grid place-items-center">
        <div className="flex flex-col items-center gap-5 -translate-y-16">
          <h1 className="text-gray-800 text-3xl">Tertarik Mencoba??</h1>
          <Link to='/login' className="btn btn-primary">Pesan Sekarang</Link>
        </div>
      </footer>
    </main>
  );
};

export default Home;
