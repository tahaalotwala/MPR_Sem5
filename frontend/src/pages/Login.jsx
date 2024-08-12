import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) navigate("/");
  };

  return (
    <div className="md:w-1/3 border-2 border-[#6F4DF7] rounded-xl p-6  mx-auto my-10 shadow-xl">
      <h1 className="text-3xl font-semibold text-center ">
        Login <span className="text-blue-500">Travel</span>
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-400 text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User Name"
            className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-400 text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex gap-2 items-center mt-4 mb-2">
          <p className="text-sm text-gray-400">Don't have an account?</p>
          <Link className="text-sm text-blue-500 hover:underline" to="/signup">
            Signup
          </Link>
        </div>

        <div className="mt-6">
          <button className="w-full py-2 bg-black text-white rounded-xl focus:outline-none" disabled={loading}>
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mx-auto text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
