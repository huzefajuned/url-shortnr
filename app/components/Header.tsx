"use client";
import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";
import toast from "react-hot-toast";
import CustomButton from "./ui/CustomButton";
import Link from "next/link";
import { authUser } from "../lib/firebase.auth";

const Header = () => {
  const notify = () => toast("Here is your toast.");

  // Array of navigation links
  const navLinks = [
    { name: "Plans", href: "plans" },
    { name: "API", href: "apiDocs" },
  ];



  return (
    <header className="shadow-md py-4 px-8 flex justify-between items-center m-2 rounded-full">
      {/* Logo */}
      <div
        className="text-2xl font-bold text-blue-600 flex flex-row gap-2"
        onClick={notify}
      >
        <Image src={logo} height={20} width={30} alt="logo" />
        <p> Shortnr</p>
      </div>

      {/* Dynamic Navigation Links */}
      <nav className=" flex flex-row justify-end items-center">
        <ul className="flex flex-row space-x-10 justify-between items-center text-gray-700">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}

          {/*  Login and profile  */}
          {/* inside profile,  logout function add! */}
          <CustomButton
            btnTitle="Login_"
            customStyle={""}
            onClick={() => authUser()}
          ></CustomButton>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
