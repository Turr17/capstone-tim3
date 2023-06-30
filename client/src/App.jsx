import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register, Home } from "./pages";
import {
  DashboardAdmin,
  PesananAdmin,
  BahanBaku,
  Produksi,
} from "./pages/admin";
import { DashboardSupplier, PesananSupplier } from "./pages/supplier";
import { DashboardCustomer, PesananCustomer } from "./pages/customer";
import { SideBar, Profile, Notifikasi } from "./components";

const App = () => {
  // login state
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(!isLogin);
  }

  // activeUser state
  const [activeUser, setActiveUser] = useState("supplier");
  const handleUser = (activeUser) => setActiveUser(activeUser);

  // notif bar state
  const [isNotifActive, setIsNotifActive] = useState(false);
  const handleNotif = () => {
    setIsNotifActive(!isNotifActive);
    console.log({ isNotifActive });
  };

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
          <SideBar activeUser={activeUser} handleLogin={handleLogin} />
          <main className="flex-auto flex flex-col gap-6 px-8 h-screen overflow-y-scroll">
            <Profile notif={handleNotif} />
            {activeUser === "admin" ? (
              <Routes>
                <Route path="/" element={<DashboardAdmin />} />
                <Route path="/pesanan" element={<PesananAdmin />} />
                <Route path="/bahan" element={<BahanBaku />} />
                <Route path="/produksi" element={<Produksi />} />
              </Routes>
            ) : activeUser === "supplier" ? (
              <Routes>
                <Route path="/" element={<DashboardSupplier />} />
                <Route path="/pesanan" element={<PesananSupplier />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<DashboardCustomer />} />
                <Route path="/pesanan" element={<PesananCustomer />} />
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
