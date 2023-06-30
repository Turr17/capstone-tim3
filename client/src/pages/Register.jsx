import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets/img";

const Login = () => {
  // login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [term, setTerm] = useState(false);

  // handle submit
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      term,
    };
    console.log({ data });
    navigate('/login')
  };

  return (
    <div>
      <header className="flex justify-between items-center px-8 py-4 bg-primary">
        <h2 className="text-black font-bold tracking-wide">Lotus Crunchy</h2>
        <div className="flex gap-7 items-center font-semibold">
          <Link to="/">Home</Link>
          <Link to="/login">
            <div className="px-4 py-1 rounded-full bg-white text-primary tracking-wide">
              Masuk
            </div>
          </Link>
        </div>
      </header>
      <main className="h-[calc(100vh-64px)] grid grid-cols-2">
        <div className="col-span-1 flex justify-end items-center">
          <div className="w-2/3 text-center mr-20">
            <img
              src={logo}
              alt="logo"
              className="w-2/3 mx-auto select-none pointer-events-none"
            />
            <p>
              The first traditional Lotus Pastry in town. Let's be the next{" "}
              <span className="text-primary font-medium">#lotusenthusiast</span>{" "}
              ONE bite makes you WANT more!
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-start items-center">
          <div className="w-2/3 min-h-[50%] ml-20">
            <h2 className="text-2xl">Daftar</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
              <div className="px-5 py-8 space-y-4 bg-primary rounded-lg">
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Masukkan email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Masukkan password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    onChange={() => setTerm(true)}
                    className="form-checkbox mt-px"
                    required
                  />
                  <p className="text-xs text-gray-800 font-medium">Dengan mendaftar, anda menyetujui syarat, ketentuan dan kebijakan privasi dari Lotus Crunchy</p>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Daftar
              </button>
            </form>
            <p className="text-sm mt-4">
              Sudah memiliki akun?{" "}
              <Link to="/login" className="text-gray-700 font-medium">
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
