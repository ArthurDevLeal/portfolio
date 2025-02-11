import { FadeInContainer } from "@/app/components/fade-in-container";
import { IconType } from "react-icons";

interface ItemProps {
  Icon: IconType;
  title: string;
  description: string;
  delay:number
}
export default function StackItem({ Icon, title, description,delay }: ItemProps) {
  return (
    <FadeInContainer delay={delay}>
      <div className="flex flex-col justify-center p-6 bg-background border rounded-lg w-full flex-1 h-[100px]">
        <div className="flex gap-4">
          <div className="p-2 rounded-md border border-border h-fit">
            <Icon size={22} />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-semibold leading-[18px]">{title}</p>
            <p className="opacity-60 text-xs">{description}</p>
          </div>
        </div>
      </div>
    </FadeInContainer>
  );
}
