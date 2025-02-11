import { FadeInContainer } from "@/app/components/fade-in-container";
import Card from "@/app/components/ui/card";
interface AboutMeItemProps {
  title: string;
  description: string;
  delay:number
}
export default function AboutMeItem({ title, description,delay }: AboutMeItemProps) {
  return (
    <FadeInContainer delay={delay}><Card className="p-6">
    <div className="flex flex-col gap-1">
      <p className="font-semibold">{title}</p>
      <p className="text-sm opacity-60">{description}</p>
    </div>
  </Card></FadeInContainer>
  );
}
