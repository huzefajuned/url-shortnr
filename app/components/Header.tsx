"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { ShinyButton } from "./ui/shiny-button";
import useAuthStore from "../store/user";
import { Avatar, AvatarImage } from "@/app/components/ui/avatar";
import {  Sun } from "lucide-react";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const notify = () => window.location.reload();
  const { user, loginWithGoogle } = useAuthStore();

  // Array of navigation links
  const navLinks = [
    { name: "Features", href: "features" },
    { name: "Pricing", href: "pricing" },
    { name: "Analytics", href: "analytics" },
  ];

  // active side menu
  const activeMenu = () => {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  return (
    <header className="flex  bg-gray-50 rounded-lg sticky top-0  flex-row  justify-between items-center m-0 sm:m-2  py-6  sm:py-5 px-4 sm:p-7">
      {/* Logo */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className="text-2xl  font-bold text-blue-600 flex flex-row gap-2 cursor-pointer  items-center  w-11/12"
        onClick={notify}
      >
        <h3 className="text-gray-700 text-3xl">
          URL <span className="text-green-300">Shortnr</span>
        </h3>
      </div>

      {/* close/open menu icons for small  devices... */}
      {showMenu ? (
        <IoMdClose
          className="flex sm:hidden w-10 h-10 z-50"
          onClick={() => {
            activeMenu();
          }}
        />
      ) : (
        <RxHamburgerMenu
          className="flex sm:hidden w-8 h-8"
          onClick={() => {
            activeMenu();
          }}
        />
      )}

      {/* Dynamic Navigation Links */}
      {/* showMenu will show  small menu */}
      <nav className="{flex flex-row  justify-end items-center  bg-neutral-500}">
        <ul
          className={`${
            showMenu
              ? " w-full backdrop-blur-md bg-white bg-opacity-30 h-screen flex flex-col gap-10 justify-center items-center absolute left-0 top-0"
              : "hidden"
          } sm:flex sm:flex-row sm:space-x-10  items-center px-2  text-gray-700 z-10`}
        >
          {navLinks.map((link, index) => (
            <li key={`${index * 2}`}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}

          {/*  Login and profile  */}
          {/* inside profile,  logout function add! */}
          {/* <Button  variant={"outline"} onClick={() => authUser()}>Login</Button> */}
          <Sun />

          {user ? (
            <>
              <Avatar>
                <AvatarImage src={user.photoURL || ""} alt="@shadcn" />
              </Avatar>
            </>
          ) : (
            <ShinyButton onClick={loginWithGoogle}>Login</ShinyButton>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// <CustomButton
// btnTitle="Login"
// customStyle="p-2"
// onClick={() => authUser()}/>
