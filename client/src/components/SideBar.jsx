import { NavLink, useNavigate } from "react-router-dom";
import { logoKecil } from "../assets/img";
import { Square, Board, Box, Store, Logout } from "./Svg";

const SideBar = ({ activeUser, handleLogin, handleUser }) => {
  const menu = {
    admin: [
      ["Dashboard", "/"],
      ["Pesanan", "/pesanan"],
      ["Produksi", "/produksi"],
      ["Bahan Baku", "/bahan"],
    ],
    supplier: [
      ["Dashboard", "/"],
      ["Pesanan", "/pesanan"],
    ],
    customer: [["Dashboard", "/"]],
  };

  // handel logout
  const navigate = useNavigate();
  const handleLogout = () => {
    handleUser("", "", "");
    handleLogin();
    navigate("/");
    console.log("logout success");
  };

  return (
    <aside className="flex-none flex flex-col items-center p-10 min-w-[200px] bg-gray-100">
      <img src={logoKecil} alt="logo" className="w-24 object-contain" />
      <ul className="flex flex-col gap-y-2 mt-20">
        {menu[activeUser.role].map(([page, path], i) => (
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive
                ? "px-3 pt-2 pb-1.5 rounded bg-primary/90"
                : "px-3 pt-2 pb-1.5 rounded bg-none hover:bg-primary/30"
            }
          >
            <li
              key={i}
              className="flex items-center gap-3 text-gray-700 stroke-gray-700"
            >
              {(() => {
                switch (page) {
                  case "Dashboard":
                    return <Square />;
                  case "Pesanan":
                    return <Board />;
                  case "Produksi":
                    return <Store />;
                  case "Bahan Baku":
                    return <Box />;
                  default:
                    return null;
                }
              })()}
              <span className="font-medium">
                {activeUser.role === "admin"
                  ? page
                  : page !== "Bahan Baku"
                  ? page
                  : null}
              </span>
            </li>
          </NavLink>
        ))}
      </ul>
      <div
        onClick={handleLogout}
        className="flex items-center gap-3 px-3 py-2 mt-auto font-medium text-status-red stroke-status-red rounded hover:bg-primary/30 cursor-pointer"
      >
        <Logout /> Keluar
      </div>
    </aside>
  );
};

export default SideBar;
