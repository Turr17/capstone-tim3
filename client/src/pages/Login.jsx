import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets/img";
import { GetData } from "../components/api";

const Login = ({ handleLogin, handleUser }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const User = () => {
    const { users } = GetData("http://localhost:5000/user");
    console.log(users);
    return users;
  };
  const dataUser = User();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    if (
      dataUser?.data.some(
        (item) => item.email === data.email && item.password === data.password
      )
    ) {
      const user = dataUser?.data.find(
        (item) => item.email === data.email && item.password === data.password
      );
      handleUser(user._id, user.name, user.role);
      console.log("login success");
      navigate("/");
      handleLogin();
    } else {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div>
      <header className="flex justify-between items-center px-8 py-4 bg-primary">
        <h2 className="text-black font-bold tracking-wide">Lotus Crunchy</h2>
        <div className="flex gap-7 items-center font-semibold">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/register">
            <div className="px-4 py-1 rounded-full bg-white text-primary tracking-wide">
              Daftar
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
            <h2 className="text-2xl">Masuk</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
              <div className="px-5 py-8 space-y-4 bg-primary rounded-lg">
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Masukkan email"
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
                    className="form-input"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Masuk
              </button>
            </form>
            <p className="text-sm mt-4">
              Baru di Lotus Crunchy?{" "}
              <Link to="/register" className="text-gray-700 font-medium">
                Daftar
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
