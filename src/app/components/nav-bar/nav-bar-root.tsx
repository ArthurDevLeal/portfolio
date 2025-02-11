"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { IconType } from "react-icons";
import { BsStack } from "react-icons/bs";
import { FaCompass, FaUser } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { NavBar } from ".";

const navData: Array<{
  path: string;
  Icon: IconType;
  name: string;
}> = [
  { path: "/", Icon: FaCompass, name: "Explorar" },
  { path: "/projects", Icon: HiPencil, name: "Projetos" },
  { path: "/stack", Icon: BsStack, name: "Stack" },
  { path: "/about", Icon: FaUser, name: "Sobre" },
];
export default function NavBarRoot() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="grid grid-cols-5 gap-1 p-2 w-full fixed bottom-0 left-0 right-0 bg-card border-t border-border md:hidden z-50">
      {navData.map((item, index) => (
        <NavBar.Item key={index} {...item} />
      ))}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`flex-col h-full p-3 rounded-md flex items-center justify-center  transition-colors`}
      >
        {theme === "light" ? (
          <Sun className="opacity-40" size={18} />
        ) : (
          <Moon className="opacity-40" size={18} />
        )}
        <p className={`text-sm hidden xs:block   opacity-40 `}>Thema</p>
      </button>
    </div>
  );
}
