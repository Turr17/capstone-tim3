import React from "react";
import { Bell } from "./Svg";

const Profile = ({ user, notif }) => {
  return (
    <div className="flex items-center gap-8 mt-10 ms-auto">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full grid place-items-center bg-gray-500 stroke-gray-700" />
        <div>
          <h3 className="text-gray-700">Fatur Raihan</h3>
          <p className="text-gray-400 text-sm">Admin</p>
        </div>
      </div>
      <div onClick={notif} className="w-10 h-10 rounded-full grid place-items-center bg-gray-100 stroke-gray-700 cursor-pointer">
        <Bell />
      </div>
    </div>
  );
};

export default Profile;
