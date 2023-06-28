import { NavLink, Link } from "react-router-dom";
import { logo } from "../assets/img";
import { Square, Board, Box, Logout } from "./Svg";

const SideBar = ({ activeUser }) => {
  const admin = [
    ["Dashboard", "/"],
    ["Pesanan", "/pesanan"],
    ["Bahan Baku", "/bahan"],
  ];
  const anotherUser = [
    ["Dashboard", "/"],
    ["Pesanan", "/pesanan"],
  ];

  const menu = activeUser === "admin" ? admin : anotherUser;

  return (
    <aside className="flex-none flex flex-col items-center p-10 min-w-[200px] bg-gray-100">
      <img src={logo} alt="logo" className="w-24 object-contain" />
      <ul className="flex flex-col gap-y-2 mt-20">
        {menu.map(([page, path], i) => (
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive
                ? "px-3 pt-2 pb-1.5 rounded bg-primary/90"
                : "px-3 pt-2 pb-1.5 rounded bg-none hover:bg-primary/30"
            }
          >
            <li key={i} className="flex items-center gap-3 stroke-gray-700">
              {(() => {
                switch (page) {
                  case "Dashboard":
                    return <Square />;
                  case "Pesanan":
                    return <Board />;
                  case "Bahan Baku":
                    return activeUser === "admin" ? <Box /> : null;
                  default:
                    return null;
                }
              })()}
              <span className="font-medium text-gray-700">
                {activeUser === "admin"
                  ? page
                  : page !== "Bahan Baku"
                  ? page
                  : null}
              </span>
            </li>
          </NavLink>
        ))}
      </ul>
      <Link to="/login" className="mt-auto">
        <div className="flex items-center gap-3 px-3 py-2 font-medium text-status-red stroke-status-red rounded hover:bg-primary/30">
          <Logout /> Keluar
        </div>
      </Link>
    </aside>
  );
};

export default SideBar;
