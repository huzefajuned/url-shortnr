"use client";
import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";
import CustomButton from "./ui/CustomButton";
import Link from "next/link";
import { authUser } from "../lib/firebase.auth";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const notify = () => window.location.reload();

  // Array of navigation links
  const navLinks = [
    { name: "Plans", href: "plans" },
    { name: "API", href: "apiDocs" },
  ];

  return (
    <header className="flex flex-row  justify-between items-center m-2  py-0  sm:py-2 px-4 sm:p-7 ">
      {/* Logo */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className="text-2xl font-bold text-blue-600 flex flex-row gap-2 cursor-pointer  items-center  w-11/12"
        onClick={notify}
      >
        <Image src={logo} height={20} width={30} alt="logo"/>
        <p> Shortnr</p>

      </div>
      <RxHamburgerMenu className="flex sm:hidden w-8 h-8" />


      {/* Dynamic Navigation Links */}
      <nav className=" flex flex-row  justify-end items-center  ">
        <ul className=" hidden sm:flex flex-col sm:flex-row space-x-0 sm:space-x-10 justify-between items-center text-gray-700">
          {navLinks.map((link, index) => (
            <li key={`${index * 2}`} >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}

          {/*  Login and profile  */}
          {/* inside profile,  logout function add! */}
          <CustomButton
            btnTitle="Login_"
            customStyle={""}
            onClick={() => authUser()}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
