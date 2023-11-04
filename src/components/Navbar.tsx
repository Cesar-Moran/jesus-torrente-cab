"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const menus = [
    { title: "Home", path: "/" },
    { title: "Designs", path: "/torrentekcb/designs" },
    { title: "About Us", path: "/torrentekcb/about" },
    { title: "Contact Us", path: "/torrentekcb/contact" },
    { title: "My Account", path: "/torrentekcb/myaccount" },
    { title: "Shop", path: "/torrentekcb/shop" },
  ];

  return (
    <nav className="fixed z-50 h-24  bg-white w-full border-b md:border-0 shadow-lg ">
      <div
        className="justify-between w-full items-center px-4  md:flex md:mx-auto "
        aria-label="primary menu"
      >
        <Sheet>
          <div className="flex items-center justify-between  py-3 md:py-5 md:block ">
            <Link to="/" className="flex items-center gap-5">
              <img
                src="https://torrente15.files.wordpress.com/2023/11/365872347_303962395489516_694704511603318406_n.jpg?resize=219%2C219"
                className="w-12 h-12"
              ></img>
              <p className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl xl:5xl animate-in">
                Torrente <span className="text-yellow-300">K&B</span>
              </p>
            </Link>
            <div className="md:hidden ">
              <SheetTrigger className="border border-transparent text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border">
                <Menu />
              </SheetTrigger>
            </div>
          </div>

          <div className="pb-3 md:block md:pb-0 transition-all duration-300">
            <div className="hidden md:flex gap-5 items-center">
              <ul className="flex gap-5">
                {menus.map((item) => (
                  <li
                    aria-current="page"
                    className="group flex flex-col  border-b-[2px]  hover:text-yellow-500 active:scale-105 duration-200 transition-all "
                  >
                    <Link to={item.path}>{item.title}</Link>
                    <div className="pointer-events-none h-2px bg-yellow-500 transform translate-y-4 group-hover:translate-y-[1px] opacity-0 group-hover:opacity-100 transition duration-250"></div>
                  </li>
                ))}
              </ul>
              <li className="list-none">
                <Link
                  to="/torrentekcb/becomeadealer"
                  className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-red-500 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                >
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-red-500 group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-yellow-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Become a dealer
                  </span>
                </Link>
              </li>
            </div>
            <SheetContent className="flex flex-col items-start  ">
              {menus.map((item, idx) => (
                <SheetHeader key={idx}>
                  <Link to={item.path}>{item.title}</Link>
                </SheetHeader>
              ))}
              <Link to="/torrentekcb/becomeadealer" className="w-full">
                <button className="bg-red-500 p-3 rounded-lg text-white w-full">
                  Become a dealer
                </button>
              </Link>
            </SheetContent>
          </div>
        </Sheet>
      </div>
    </nav>
  );
}
