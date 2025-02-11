"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { IconType } from "react-icons";
import { BsStack } from "react-icons/bs";
import { FaCompass, FaGithub, FaLinkedin, FaUser } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import { SideBar } from ".";
import { FadeInContainer } from "../fade-in-container";
import Card from "../ui/card";

interface SideBarItems {
  sectionName: string;
  items: Array<{ name: string; path?: string; Icon: IconType; href?: string; isLink?: boolean }>;
}

const sideBarData: Array<SideBarItems> = [
  {
    sectionName: "",
    items: [
      { name: "Explorar", path: "/", Icon: FaCompass },
      { name: "Projetos", path: "/projects", Icon: HiPencil },
      { name: "Stack", path: "/stack", Icon: BsStack },
      { name: "Sobre", path: "/about", Icon: FaUser },
    ],
  },
  {
    sectionName: "Contatos",
    items: [
      {
        name: "Linkedin",
        Icon: FaLinkedin,
        href: "https://www.linkedin.com/in/arthur-leal-9a8ab1315",
        isLink: true,
      },
      { name: "Github", Icon: FaGithub, href: "https://github.com/ArthurDevLeal", isLink: true },
    ],
  },
];
export default function SideBarRoot() {
  const { theme, setTheme } = useTheme();
  return (
    <FadeInContainer delay={2}>
      <Card
        className="hidden  md:flex flex-col py-4 px-4 bg-card mx-4 mt-4 
    fixed top-0 h-[calc(100vh-30px)] overflow-y-hidden
    min-w-[250px] max-w-[250px] gap-4 z-50"
      >
        <div className="flex flex-col overflow-y-auto no-scrollbar h-screen pb-16  ">
          <SideBar.Header />

          {sideBarData.map((sectionItem) => (
            <SideBar.Section.Root key={sectionItem.sectionName} sectionName={sectionItem.sectionName}>
              {sectionItem.items.map((item, index) => (
                <SideBar.Section.Item key={index} {...item} />
              ))}
            </SideBar.Section.Root>
          ))}
          <SideBar.Section.Root sectionName="Outros">
            <div
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={`flex items-center gap-2 transition-[opacity_colors] p-2 cursor-pointer  rounded-md hover:opacity-100 hover:bg-background duration-300 delay-75 hover:border-border border bg-transparent opacity-40  border-transparent  `}
            >
              {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
              <p className="text-sm">Tema</p>
            </div>
          </SideBar.Section.Root>
        </div>
      </Card>
    </FadeInContainer>
  );
}
