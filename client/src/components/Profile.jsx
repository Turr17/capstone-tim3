import React from "react";
import { Bell } from "./Svg";

const Profile = ({ activeUser, notif }) => {
  return (
    <div className="flex items-center gap-10 mt-10 ml-auto">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full grid place-items-center bg-gray-500 stroke-gray-700" />
        <div>
          <h3 className="capitalize">{activeUser.name}</h3>
          <p className="text-sm capitalize">{activeUser.role}</p>
        </div>
      </div>
      <div onClick={notif} className="w-10 h-10 rounded-full grid place-items-center bg-gray-100 stroke-gray-700 cursor-pointer active:bg-gray-300">
        <Bell />
      </div>
    </div>
  );
};

export default Profile;
