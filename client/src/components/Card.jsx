import React from "react";

export const ScoreCard = ({ title, desc }) => {
  return (
    <div className="score-card">
      <h1>{title}</h1>
      <p className="font-medium">{desc}</p>
    </div>
  );
};

export const MenuCard = ({ num, title, desc, image }) => {
  return (
    <div className="flex-[1_1_370px] flex flex-col items-center gap-5 px-10 py-10 rounded-lg bg-gray-100">
      <p className="text-lg">{num}</p>
      <h1>{title}</h1>
      <p className="text-center text-lg w-4/5">{desc}</p>
      <img
        src={image}
        alt="menu"
        className="w-full h-80 object-cover rounded"
      />
    </div>
  );
};

export const UlasanCard = ({ num, title, desc, image }) => {
  return (
    <div className="flex-[0_1_350px] flex flex-col items-start gap-8 px-10 py-10 rounded-lg bg-gray-100">
      <div className="">
        <p className="mb-1 text-green-600">Pengguna {num}</p>
        <h1>{title}</h1>
      </div>
      <img
        src={image}
        alt="menu"
        className="w-28 h-28 mx-auto object-cover rounded-full"
      />
      <p>{desc}</p>
    </div>
  );
};
