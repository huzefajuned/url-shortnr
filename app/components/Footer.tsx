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
    <footer className="bg-slate-100 w-full py-4">
      <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:justify-between container mx-auto px-4">
        <div className="flex items-center space-x-0 sm:space-x-2">
          <span className="text-sm sm:text-lg font-semibold">
            Developed with ❤️ by Huzefa Bin Juned
          </span>
          <span className="text-gray-400 hidden sm:inline-block">
            | Passionate Full Stack Developer
          </span>
        </div>

        <div className="flex items-center space-x-4">
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
        </div>

        <div className="text-gray-600 hidden sm:flex text-sm">
          © {new Date().getFullYear()} Huzefa Bin Juned. All rights reserved.
        </div>

        {/*  login logout buttons */}
        {user ? (
          <ShinyButton onClick={logout}>Logout</ShinyButton>
        ) : (
          <ShinyButton onClick={loginWithGoogle}>login</ShinyButton>
        )}
      </div>
    </footer>
  );
};

export default Footer;
