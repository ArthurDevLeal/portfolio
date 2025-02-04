"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface SideBarItemProps {
  name: string;
  path?: string;
  Icon: IconType;
  href?: string;
}

export default function SideBarItem({ Icon, name, href, path }: SideBarItemProps) {
  const pathName = usePathname();

  return (
    <Link href={path || href || ""} target={href ? "_blank" : ""}>
      <div
        className={`flex items-center gap-2 transition-[opacity_colors] p-2 rounded-md hover:opacity-100 hover:bg-background duration-300 delay-75 hover:border-border border  ${
          pathName === path || pathName === href
            ? "opacity-100 bg-background border-border "
            : "opacity-40 bg-card border-card"
        }`}
      >
        <Icon size={16} />
        <p className="text-sm">{name}</p>
      </div>
    </Link>
  );
}
