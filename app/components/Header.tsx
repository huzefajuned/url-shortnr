import React from "react";
import logo from "../images/logo.png";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  // Array of navigation links
  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Login", href: "#login" },
    { name: "Get Started", href: "#get-started", isButton: true },
  ];

  return (
    <header className="shadow-md py-4 px-8 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 flex flex-row gap-2">
        <Link href="/">
          <Image src={logo} height={20} width={30} alt="logo" />
          Shortnr
        </Link>
      </div>

      {/* Dynamic Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-gray-700">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={`${
                  link.isButton
                    ? "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    : "hover:text-blue-500"
                } transition-colors duration-300`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
