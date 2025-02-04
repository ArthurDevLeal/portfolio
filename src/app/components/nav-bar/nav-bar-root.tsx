"use client";
import { IconType } from "react-icons";
import { BsStack } from "react-icons/bs";
import { FaCompass, FaUser } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { IoShareSocial } from "react-icons/io5";
import { NavBar } from ".";

const navData: Array<{
  path: string;
  Icon: IconType;
  name: string;
}> = [
  { path: "/", Icon: FaCompass, name: "Explore" },
  { path: "projects", Icon: HiPencil, name: "Projects" },
  { path: "stack", Icon: BsStack, name: "Stack" },
  { path: "about", Icon: FaUser, name: "About" },
  { path: "contact", Icon: IoShareSocial, name: "Contact" },
];
export default function NavBarRoot() {
  return (
    <div className="grid grid-cols-5 gap-1 p-2 w-full fixed bottom-0 left-0 right-0 bg-card border-t border-border md:hidden">
      {navData.map((item, index) => (
        <NavBar.Item key={index} {...item} />
      ))}
    </div>
  );
}
