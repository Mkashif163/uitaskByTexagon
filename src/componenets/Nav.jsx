import React from "react";
import Logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <nav className="w-screen font-satoshi-bold">
    <div className="flex justify-between items-center m-10">
      <div className="flex items-center gap-2">
        <img src={Logo} className="w-8" alt="Logo" />
        <p>IQTEST.ai</p>
      </div>
      <ul className="flex gap-28">
        <li>Home</li>
        <li>Start Test</li>
        <li>Check Certificate</li>
        <li>Pro Pricing</li>
      </ul>
      <div className="flex items-center gap-4 relative">
        <div className="relative">
          <select className="appearance-none border bg-slate-300 py-2 px-4 pr-8 rounded-xl shadow-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>Arabic</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6z"
              />
            </svg>
          </div>
        </div>
        <button className="bg-[#5235e8] hover:bg-blue-700 text-white py-2 px-5 rounded-3xl">
          Login
        </button>
      </div>
    </div>
  </nav>
  
  
  
  );
};

export default Nav;
