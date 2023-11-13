"use client";

import { Link } from "react-router-dom";
import {
  KeyRound,
  LockKeyhole,
  LogOut,
  Menu,
  User2,
  ShoppingCart,
  Home,
  Component,
  Users,
  Phone,
  KeySquare,
  PlusSquare,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import CartDropdown from "./Products/CartDropdown";

export default function Navbar() {
  const menus = [
    {
      title: "Home",
      path: "/",
      icon: <Home size={15} />,
    },
    {
      title: "Designs",
      path: "/torrentekcb/designs",
      icon: <Component size={15} />,
    },
    {
      title: "About Us",
      path: "/torrentekcb/about",
      icon: <Users size={15} />,
    },
    {
      title: "Contact Us",
      path: "/torrentekcb/contact",
      icon: <Phone size={15} />,
    },
    {
      title: "Shop",
      path: "/torrentekcb/shop",
      icon: <ShoppingCart size={15} />,
    },
  ];

  const [userInfo, setUserInfo] = useState({
    name: "",
    role: "",
  });

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  const token = localStorage.getItem("token");

  // Decodificar el token y acceder a la propiedad 'name'
  // Decodificar el token y acceder a la propiedad 'name'
  useEffect(() => {
    const parseJwt = (token: any) => {
      try {
        return JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        return null;
      }
    };

    const user = parseJwt(token);
    setUserInfo(user);
  }, []);

  return (
    <nav className="sticky top-0 z-50  bg-white w-full border-b md:border-0 shadow-lg xl:px-32">
      <div className="flex  " aria-label="primary menu">
        <Sheet>
          <div className="flex items-center justify-between w-full  py-3 md:py-5 md:flex md:justify-between  ">
            <Link to="/" className="flex items-center gap-5 ">
              <img src="https://i0.wp.com/torrente15.files.wordpress.com/2023/11/adsadsasd.png?ssl=1" />
              <p className="text-2xl font-extrabold tracking-tight lg:text-4xl xl:5xl animate-in bg-gradient-to-r from-red-500 to-amber-300 bg-clip-text text-transparent"></p>
            </Link>
            <div className="lg:hidden">
              <SheetTrigger className="border border-transparent text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border">
                <Menu />
              </SheetTrigger>
            </div>
          </div>

          <div className="pb-3 lg:flex md:pb-0 transition-all duration-300 ">
            {/* Desktop part */}
            {/* Desktop part */}
            {/* Desktop part */}
            {/* Desktop part */}
            {/* Desktop part */}
            <div className="hidden lg:flex items-center">
              <ul className="flex w-max items-center gap-4 ">
                {menus.map((item, idx) => (
                  <li
                    className="group flex items-center gap-1   hover:text-yellow-500 active:scale-105 duration-200 transition-all "
                    key={idx}
                  >
                    {item.icon}
                    <Link to={item.path}>
                      <p className="text-md  tracking-wide font-medium uppercase">
                        {item.title}
                      </p>
                    </Link>
                  </li>
                ))}

                {/* Register */}

                <div className="flex flex-row-reverse items-center gap-4">
                  {/* Navbar BCA Button */}
                  {/* If user role is dealer, dont show the become a dealer button */}
                  {userInfo?.role === "DEALER" ? (
                    ""
                  ) : (
                    // If the user is not a dealer, show the button
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
                        <Button className="relative w-full text-left text-red-500 transition-colors h-auto duration-200 ease-in-out bg-transparent group-hover:text-white hover:bg-transparent font-medium">
                          Become a dealer
                        </Button>
                      </Link>
                    </li>
                  )}

                  <CartDropdown />

                  <DropdownMenu>
                    {/* If user logged in (userInfo is true), show the Account dropdown menu */}
                    {userInfo ? (
                      <DropdownMenuTrigger className=" flex justify-center group items-center font-medium gap-2">
                        <img
                          src="https://torrente15.files.wordpress.com/2023/11/descarga-1.png"
                          className="w-8 h-8 rounded-full p-0 m-0 !focusp:outline-none"
                        ></img>
                        {userInfo.name}
                      </DropdownMenuTrigger>
                    ) : (
                      // Else, show the auth dropdown menu
                      <DropdownMenuTrigger className=" flex justify-center items-center font-medium gap-1 hover:text-yellow-500 duration-200">
                        <User2 size={20} />
                        Register/Login
                      </DropdownMenuTrigger>
                    )}
                    <DropdownMenuContent className="w-full focus:">
                      {/* If user is logged in show the my account text label */}
                      {userInfo ? (
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      ) : (
                        // Else, show the authorization text label
                        <DropdownMenuLabel>Authorization</DropdownMenuLabel>
                      )}
                      <DropdownMenuSeparator />
                      {/* If user is logged in, greet the user with his name and role */}
                      {userInfo && (
                        <DropdownMenuItem className="text-md gap-1">
                          {userInfo && (
                            <p className="">
                              Hi, {userInfo.name}, you are an {userInfo.role}
                            </p>
                          )}
                        </DropdownMenuItem>
                      )}

                      {userInfo?.role === "ADMIN" ? (
                        // If user role is admin, show the admin private button
                        <Link to={"/torrentekcb/admin"}>
                          <DropdownMenuGroup className="hover:cursor-pointer">
                            <DropdownMenuSub>
                              <DropdownMenuSubTrigger className="flex flex-row items-center gap-2">
                                <LockKeyhole size={15} />
                                Admin
                              </DropdownMenuSubTrigger>
                              <DropdownMenuPortal>
                                <DropdownMenuSubContent>
                                  <Link
                                    to={"/torrentekcb/admin/dealerRequests"}
                                  >
                                    <DropdownMenuItem className="hover:cursor-pointer">
                                      Dealer Requests
                                    </DropdownMenuItem>
                                  </Link>
                                  <Link
                                    to={"/torrentekcb/admin/registeredUsers"}
                                    className="hover:cursor-pointer"
                                  >
                                    <DropdownMenuItem className="hover:cursor-pointer">
                                      Registered Users
                                    </DropdownMenuItem>
                                  </Link>
                                  <Link
                                    to={"/torrentekcb/admin/shop/addproduct"}
                                    className="hover:cursor-pointer"
                                  >
                                    <DropdownMenuItem className="hover:cursor-pointer">
                                      Add a product
                                    </DropdownMenuItem>
                                  </Link>
                                  <DropdownMenuSeparator />
                                </DropdownMenuSubContent>
                              </DropdownMenuPortal>
                            </DropdownMenuSub>
                          </DropdownMenuGroup>
                        </Link>
                      ) : (
                        // Else, show nothing.
                        ""
                      )}

                      {userInfo ? (
                        // If user is logged in, show the logout button
                        <Link to="/" onClick={logOut}>
                          <DropdownMenuItem className="hover:cursor-pointer flex items-center gap-2 ">
                            <LogOut size={15} />
                            Logout
                          </DropdownMenuItem>
                        </Link>
                      ) : (
                        // Else, show the authorization buttons
                        <div className="flex flex-col">
                          <Link to={"/torrentekcb/register"}>
                            <DropdownMenuItem className="flex items-center gap-2 hover:cursor-pointer">
                              <KeyRound />
                              Register
                            </DropdownMenuItem>
                          </Link>
                          <Link to={"/torrentekcb/login"}>
                            <DropdownMenuItem className="flex items-center gap-2 hover:cursor-pointer">
                              <KeySquare />
                              Login
                            </DropdownMenuItem>
                          </Link>
                        </div>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </ul>
            </div>
            {/* Mobile part */}
            {/* Mobile part */}
            {/* Mobile part */}
            {/* Mobile part */}
            {/* Mobile part */}
            {/* Mobile part */}
            {/* @ts-ignore */}
            <SheetContent className="flex flex-col items-start gap-5 font-medium">
              {menus.map((item, idx) => (
                <SheetHeader
                  key={idx}
                  className=" active:text-yellow-500 duration-200"
                >
                  <Link to={item.path} className="flex items-center gap-3">
                    {item.icon}
                    {item.title}
                  </Link>
                </SheetHeader>
              ))}

              <div className="">
                <div className="flex flex-col-reverse items-start gap-4">
                  {/* If user role is dealer, then dont show the become a dealer button, else, show the button */}
                  {userInfo?.role === "DEALER" ? (
                    ""
                  ) : (
                    <SheetHeader>
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
                        <Button className="relative w-full text-left text-red-500 transition-colors h-auto duration-200 ease-in-out bg-transparent group-hover:text-white hover:bg-transparent font-medium">
                          Become a dealer
                        </Button>
                      </Link>
                    </SheetHeader>
                  )}

                  <CartDropdown />

                  {/* If user is logged (userInfo is true), then show the Account dropdown menu, else, show the auth dropdown menu */}

                  <DropdownMenu>
                    {userInfo ? (
                      <SheetHeader>
                        <DropdownMenuTrigger className=" flex justify-center group items-center font-medium gap-1">
                          <User2 className="group-hover:-translate-y-1 duration-200" />
                          Account
                        </DropdownMenuTrigger>
                      </SheetHeader>
                    ) : (
                      <SheetHeader>
                        <DropdownMenuTrigger className=" flex justify-center items-center font-medium gap-1">
                          <User2 />
                          Register/Login
                        </DropdownMenuTrigger>
                      </SheetHeader>
                    )}

                    {/* Dropdown menu content */}

                    <DropdownMenuContent className="w-full">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>

                      <DropdownMenuSeparator />
                      {/* If user info is true, greet the user with his name and role. */}
                      {userInfo && (
                        <DropdownMenuItem>
                          {userInfo && `Hi, ${userInfo.name}, `}
                          {userInfo && `right now you are a ${userInfo.role}`}
                        </DropdownMenuItem>
                      )}

                      {/* If user role is admin, show the admin button to go to dealer requests. */}
                      {userInfo?.role === "ADMIN" && (
                        <DropdownMenuItem className="hover:cursor-pointer">
                          <SheetHeader>
                            <Link
                              to={"/torrentekcb/admin"}
                              className="flex items-center gap-2"
                            >
                              <LockKeyhole size={15} />
                              Admin
                            </Link>
                          </SheetHeader>
                        </DropdownMenuItem>
                      )}

                      {/* If user is logged in (userInfo is true), show the logout button */}

                      {userInfo ? (
                        <DropdownMenuItem className="hover:cursor-pointer">
                          <Link
                            to="/"
                            onClick={logOut}
                            className="flex items-center gap-2 "
                          >
                            <LogOut size={15} />
                            Logout
                          </Link>
                        </DropdownMenuItem>
                      ) : (
                        // Else, show the auth buttons
                        <div className="flex flex-col">
                          <DropdownMenuItem className="hover:cursor-pointer">
                            <Link
                              to={"/torrentekcb/register"}
                              className="flex items-center gap-2"
                            >
                              <PlusSquare />
                              Register
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="hover:cursor-pointer">
                            <Link
                              to={"/torrentekcb/login"}
                              className="flex items-center gap-2"
                            >
                              <KeySquare />
                              Login
                            </Link>
                          </DropdownMenuItem>
                        </div>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </SheetContent>
          </div>
        </Sheet>
      </div>
    </nav>
  );
}
