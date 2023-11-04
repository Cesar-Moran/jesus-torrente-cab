"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import { Menu, Search } from "lucide-react";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/" },
    { title: "Designs", path: "/torrentekcb/designs" },
    { title: "About Us", path: "/torrentekcb/about" },
    { title: "Contact Us", path: "/torrentekcb/contact" },
    { title: "My Account", path: "/torrentekcb/myaccount" },
    { title: "Shop", path: "/torrentekcb/shop" },
  ];

  return (
    <nav className="bg-white w-full border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link to="/">
            <img
              src="https://i0.wp.com/torrentekitchenandbath.com/wp-content/uploads/2023/07/download-1.png?w=225&ssl=1"
              className="text-3xl font-bold text-purple-600 w-10 h-10"
            />
          </Link>
          <div className="md:hidden">
            <button
              className="border border-transparent text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 my-4 md:block md:pb-0 md:mt-4 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-red-500 ">
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
            <li>
              <Link to="/torrentekcb/becomeadealer">
                <button className="bg-red-500 p-3 rounded-lg  text-white hover:">
                  Become a dealer
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
