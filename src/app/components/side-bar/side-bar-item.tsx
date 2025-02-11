"use client";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";

interface SideBarItemProps {
  name: string;
  path?: string;
  Icon: IconType;
  href?: string;
  isLink?: boolean;
}

export default function SideBarItem({ Icon, name, href, path, isLink = false }: SideBarItemProps) {
  const pathName = usePathname();

  const isActive = () => {
    if (!path && !href) return false;
    
    if (href) return pathName === href;
    if (path === "/") return pathName === "/";
    return path ? pathName.startsWith(path) : false;
  };

  return (
    <Link href={path || href || ""} target={href ? "_blank" : ""}>
      <div
        className={`flex items-center gap-2 transition-[opacity_colors] p-2 rounded-md hover:opacity-100 hover:bg-background duration-300 delay-75 hover:border-border border ${
          isActive()
            ? "opacity-100 bg-background border-border"
            : "opacity-40 border-transparent"
        }`}
      >
        <Icon size={16} />
        <p className="text-sm">{name}</p>
        {isLink && (
          <div className="flex items-center justify-center p-1 ml-auto rounded-md border border-border">
            <ExternalLink size={12} />
          </div>
        )}
      </div>
    </Link>
  );
}