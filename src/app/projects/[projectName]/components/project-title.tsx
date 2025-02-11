"use client";
import { Button } from "@/app/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface TitleProps {
  mainText: string;
  description: string;
}
export default function Title({ mainText, description }: TitleProps) {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center gap-2">
        <div>
          <Button onClick={() => router.back()} variant={"outline"} size={"icon"}>
            <ChevronLeft />
          </Button>
        </div>
        <h1 className=" md:text-4xl text-xl font-semibold leading-10 text-pretty">{mainText}</h1>
      </div>
      <p className="opacity-60 mt-2">{description}</p>
    </>
  );
}
