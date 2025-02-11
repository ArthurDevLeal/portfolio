"use client";
import Link from "next/link";
import { IconType } from "react-icons";
import { Button } from "../ui/button";
import Card from "../ui/card";
interface SeeMoreItemProps {
  name: string;
  Icon: IconType;
  description: string;
  href: string;
  buttonText:string
}
export default function SeeMoreItem({ Icon, description, href, name,buttonText }: SeeMoreItemProps) {
  return (
    <Card className="realtive w-full p-6 hover:shadow-lg">
      <div className="flex flex-col gap-4 h-full">
        <div className="flex flex-col gap-1">
          <div className="p-2 rounded-lg bg-accent w-fit">
            <Icon />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{name}</p>
          </div>
          <p className="text-sm opacity-60">{description}</p>
        </div>
        <Link href={href}>
          <Button className="w-fit" variant={"outline"} size={"sm"}>
            {buttonText}
          </Button>
        </Link>
      </div>
    </Card>
  );
}
