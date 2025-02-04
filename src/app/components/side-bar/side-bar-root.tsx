"use client";
import { IconType } from "react-icons";
import { BsStack } from "react-icons/bs";
import { FaCompass, FaGithub, FaLinkedin, FaUser } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { IoShareSocial } from "react-icons/io5";
import SideBarHeader from "./side-bar-header";
import SideBarItem from "./side-bar-item";
import SideBarSectioRoot from "./side-bar-section-root";

interface SideBarItems {
  sectionName: string;
  items: Array<{ name: string; path?: string; Icon: IconType; href?: string }>;
}

const sideBarData: Array<SideBarItems> = [
  {
    sectionName: "",
    items: [
      { name: "Explore", path: "/", Icon: FaCompass },
      { name: "Projects", path: "projects", Icon: HiPencil },
      { name: "Stack", path: "/stack", Icon: BsStack },
      { name: "About", path: "/about", Icon: FaUser },
    ],
  },
  {
    sectionName: "Contact",
    items: [
      { name: "Contact", path: "/contact", Icon: IoShareSocial },
      { name: "Linkedin", Icon: FaLinkedin, href: "https://www.linkedin.com/in/arthur-leal-9a8ab1315" },
      { name: "Github", Icon: FaGithub, href: "https://github.com/ArthurDevLeal" },
    ],
  },
];
export default function SideBarRoot() {
  return (
    <div className="hidden flex-col py-4 px-4 bg-card border-r border-b border-border h-screen gap-8 transition-[height] overflow-y-auto custom-scrollbar duration-500 delay-100 min-w-[250px] md:flex">
      <SideBarHeader />

      {sideBarData.map((sectionItem) => (
        <SideBarSectioRoot key={sectionItem.sectionName} sectionName={sectionItem.sectionName}>
          {sectionItem.items.map((item, index) => (
            <SideBarItem key={index} {...item} />
          ))}
        </SideBarSectioRoot>
      ))}
    </div>
  );
}
