import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import useAuthStore from "../store/user";
import { Avatar, AvatarImage } from "@/app/components/ui/avatar";
import FooterSkeleton from "./skeletons/Footer-Skeleton";
import { ShinyButton } from "./ui/shiny-button";

const Footer = () => {
  const { user, loading, loginWithGoogle, logout } = useAuthStore();

  if (loading) return <FooterSkeleton />;

  return (
    <footer className=" w-full items-center justify-center  py-1 sm:py-4 ">
      <div className="flex flex-col items-center   sm:flex-row  sm:justify-between container mx-auto px-4">
        <div className="flex items-center ">
          <span className="text-sm sm:text-lg text-gray-500 font-semibold">
            Developed with ❤️ by Huzefa Bin Juned
          </span>
          <span className="text-gray-300 hidden sm:inline-block px-2">
            | Passionate Full Stack Developer
          </span>
        </div>

        <div className="flex items-center   space-x-0 sm:space-x-4  flex-row  w-44 sm:w-36  justify-around">
          <a
            href="https://github.com/huzefajuned"
            target="_blank"
            rel="noopener noreferrer"
            className="text-btnBgColor hover:text-btnBgHoverColor transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/huzefabinjuned"
            target="_blank"
            rel="noopener noreferrer"
            className="text-btnBgColor hover:text-btnBgHoverCol transition-colors"
          >
            <FaLinkedin size={24} />
          </a>

          {user && (
            <Avatar>
              <AvatarImage src={user.photoURL || ""} alt="@shadcn" />
            </Avatar>
          )}
          {/*  login logout buttons */}
          {user ? (
            <ShinyButton onClick={logout}>Logout</ShinyButton>
          ) : (
            <ShinyButton onClick={loginWithGoogle}>login</ShinyButton>
          )}
        </div>

        <div className="text-gray-400 hidden sm:flex text-sm">
          © {new Date().getFullYear()} Huzefa Bin Juned. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
