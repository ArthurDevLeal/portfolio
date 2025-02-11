import { FadeInContainer } from "@/app/components/fade-in-container";
import Card from "@/app/components/ui/card";
import { TechItem } from "../data/itemsData";
import Item from "./stack-item";

interface StackListItems {
  title: string;
  data: TechItem[];
}
export default function StackListItems({ title, data }: StackListItems) {
  return (
    <FadeInContainer>
      <Card className="p-6">
        <div className="flex flex-col w-full">
          <p className="text-lg font-semibold">{title}</p>
          <div className="w-full flex-1 grid lg:grid-cols-2 grid-cols-1 gap-6 mt-4">
            {data.map((item, index) => (
              <Item key={index} delay={index / 10} {...item} />
            ))}
          </div>
        </div>
      </Card>
    </FadeInContainer>
  );
}
