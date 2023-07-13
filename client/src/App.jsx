import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register, Home } from "./pages";
import {
  DashboardAdmin,
  PesananAdmin,
  BahanBaku,
  Produksi,
  UpdateBahan,
} from "./pages/admin";
import { DashboardSupplier, PesananSupplier, PersediaanSupplier } from "./pages/supplier";
import { PesananCustomer, RiwayatPesanan } from "./pages/customer";
import { SideBar, Profile, Notifikasi } from "./components";

const App = () => {
  // login state
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => setIsLogin(!isLogin);

  // activeUser state
  const [activeUser, setActiveUser] = useState({
    id: "",
    name: "",
    role: "",
  });
  const handleUser = (id, name, role) =>
    setActiveUser({
      id: id,
      name: name,
      role: role,
    });

  // notif bar state
  const [isNotifActive, setIsNotifActive] = useState(false);
  const handleNotif = () => {
    setIsNotifActive(!isNotifActive);
    console.log({ isNotifActive });
  };

  // add scroll smooth
  document.documentElement.setAttribute("class", "scroll-smooth");

  return (
    <Router>
      {!isLogin ? (
        <div className="w-full min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <Login handleLogin={handleLogin} handleUser={handleUser} />
              }
            />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      ) : (
        <div className="w-full h-screen flex gap-4 relative">
          <SideBar
            activeUser={activeUser}
            handleLogin={handleLogin}
            handleUser={handleUser}
          />
          <main className="flex-auto flex flex-col gap-6 px-8 pb-5 h-screen overflow-y-scroll">
            <Profile notif={handleNotif} activeUser={activeUser} />
            {activeUser.role === "admin" ? (
              <Routes>
                <Route path="/" element={<DashboardAdmin />} />
                <Route path="/pesanan" element={<PesananAdmin />} />
                <Route path="/bahan" element={<BahanBaku />} />
                <Route path="/produksi" element={<Produksi />} />
                <Route path="/bahan/update/:id" element={<UpdateBahan />} />
              </Routes>
            ) : activeUser.role === "supplier" ? (
              <Routes>
                <Route path="/" element={<DashboardSupplier />} />
                <Route path="/pesanan" element={<PesananSupplier />} />
                <Route path="/persediaan" element={<PersediaanSupplier />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<PesananCustomer />} />
                <Route path="/pesanan" element={<RiwayatPesanan />} />
              </Routes>
            )}
          </main>
          <Notifikasi state={isNotifActive} handle={handleNotif} />
        </div>
      )}
    </Router>
  );
};

export default App;
