"use client";
import { IconType } from "react-icons";
import SeeMoreItem from "./see-more-item";
import { FadeInContainer } from "../fade-in-container";

interface SeeMoreRootProps {
  name: string;
  description: string;
  href: string;
  Icon: IconType;
  buttonText:string
}
export default function SeeMoreRoot({ Icon, description, href, name,buttonText }: SeeMoreRootProps) {
  return (
   <FadeInContainer delay={1}>
     <div className="flex flex-col gap-6 mt-6">
      <SeeMoreItem
        name={name}
        description={description}
        href={href}
        Icon={Icon}
        buttonText={buttonText}
      />
    </div>
   </FadeInContainer>
  );
}
