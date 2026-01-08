"use client";

import { FadeInContainer } from "@/app/components/fade-in-container";
import Card from "@/app/components/ui/card";
import Link from "next/link";

interface ProjectItemProps {
  src?: string;
  name: string;
  description: string;
  href: string;
  stack: Array<string>;
  delay: number;
}

export default function ProjectItem({ description, href, name, src, stack, delay }: ProjectItemProps) {
  return (
    <FadeInContainer delay={delay} classname="h-full">
      <Link href={href}>
        <Card className="group hover:shadow-lg  ">
          <div className="flex flex-col ">
            <div>
              <img
                src={
                  src
                    ? src
                    : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                }
                className="w-full h-[200px] rounded-t-md object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-300 delay-75"
                loading="lazy"
                alt={name}
              />
            </div>
            <div className="flex flex-col p-6 gap-1 ">
              <p className="font-semibold">{name}</p>
              <p className="opacity-60 text-xs line-clamp-1">{description}</p>
              <div className="flex flex-wrap gap-2 items-center mt-4">
                {stack.map((item, key) => (
                  <div
                    key={key}
                    className="flex items-center justify-center border-border px-2 py-1 text-xs opacity-60 border rounded-lg transition-opacity"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </FadeInContainer>
  );
}
