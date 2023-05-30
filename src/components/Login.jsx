import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginSocial from "./LoginSocial";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <div className=" w-2/4 mx-auto mt-20">
      <div className=" md:w-2/4 mx-auto  gap-2">
        <form onSubmit={handleSumbit} className="grid items-center">
          <label htmlFor="username">Username: </label>
          <input
            className="p-2 px-3 border rounded-md  placeholder:text-sm
            focus:outline-blue-500"
            type="email"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="john@mail.com"
          />
          <label htmlFor="password" className="mt-3">
            Password:{" "}
          </label>
          <input
            className="p-2 px-3 border rounded-md focus:outline-blue-500  placeholder:text-sm"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <div className="flex items-center justify-end mt-2">
            <p className="text-right text-xs font-medium hover:underline cursor-pointer ">
              Recovery Password
            </p>
          </div>
          <button
            className="bg-blue-600 text-white py-2.5 rounded-md font-semibold shadow-md mt-4 
          hover:opacity-80
        "
          >
            Sign In
          </button>
        </form>
        <div className="flex items-center justify-center mt-8">
          <p className="text-sm font-medium">
            Not a Member?{" "}
            <span className="text-blue-700 underline cursor-pointer">
              <Link to="/register">Register Now</Link>
            </span>{" "}
          </p>
        </div>
        <LoginSocial />
      </div>
    </div>
  );
};

export default Login;
