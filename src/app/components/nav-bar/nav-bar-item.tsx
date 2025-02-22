"use client";
import { usePathname, useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface NavBarItemProps {
  path: string;
  Icon: IconType;
  name: string;
}
export default function NavBarItem({ path, Icon, name }: NavBarItemProps) {
  const pathName = usePathname();
  const router = useRouter();
  const isActive = () => {
    if (path === "/") return pathName === "/";
    return path ? pathName.startsWith(path) : false;
  };
  const handleClick = () => {
    router.push(path);
  };
  return (
    <button
      onClick={handleClick}
      className={`flex-col h-full p-3 rounded-md flex items-center justify-center  transition-colors ${
        isActive() ? "bg-background" : ""
      }`}
    >
      <Icon size={18} className={`${isActive() ? "opacity-100" : "opacity-40 "}`} />
      <p className={`text-sm hidden xs:block  ${isActive() ? "opacity-100" : "opacity-40 "}`}>{name}</p>
    </button>
  );
}
