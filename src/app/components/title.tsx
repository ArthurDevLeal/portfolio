import { FadeInContainer } from "./fade-in-container";

interface TitleProps {
  title: string;
  description: string;
}
export default function Title({ title, description }: TitleProps) {
  return (
    <FadeInContainer>
    <div className="flex flex-col gap-2">
      <h1 className=" md:text-4xl text-2xl font-semibold leading-10 text-pretty">{title}</h1>
      <p className="opacity-60">{description}</p>
    </div>
    </FadeInContainer>
  );
}
