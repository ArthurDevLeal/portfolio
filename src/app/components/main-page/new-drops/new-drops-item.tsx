"use client";
import Link from "next/link";
import Card from "../../ui/card";
import { FadeInContainer } from "../../fade-in-container";

interface NewDropItemProps {
  src?: string;
  name: string;
  description: string;
  href: string;
  delay: number;
}

export default function NewDropsItem({ description, href, name, src, delay }: NewDropItemProps) {
  return (
    <FadeInContainer delay={delay}>
      <Link href={href} className="block w-full h-full">
        <Card className="group hover:shadow-lg h-full">
          <div className="flex flex-col h-full">
            <div className="aspect-video w-full">
              <img
                src={
                  src
                    ? src
                    : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                }
                className="w-full h-full rounded-t-md object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-300 delay-75"
                alt={name}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col p-6 gap-1 flex-grow">
              <p className="font-semibold">{name}</p>
              <p className="opacity-60 text-xs">{description}</p>
            </div>
          </div>
        </Card>
      </Link>
    </FadeInContainer>
  );
}