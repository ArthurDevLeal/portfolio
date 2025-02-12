"use client";
import { FaUser } from "react-icons/fa";
import SeeMoreRoot from "../components/see-more/see-more-root";
import Title from "../components/title";
import { Stack } from "./components";
import { backEndData, designData, frontEndData, mobileData } from "./data/itemsData";

export default function StackPage() {
  return (
    <main className="w-full flex justify-center pb-[120px] py-[40px] mx-auto md:my-[50px] px-8 md:pb-0 md:max-w-4xl">
      <div className="flex flex-col gap-6">
        <Title title="Stack" description="Lista das minhas tecnologias do dia a dia" />

        <Stack.ItemList title="Desenvolvimento Front-end" data={frontEndData} />
        <Stack.ItemList title="Desenvolvimento Back-end" data={backEndData} />
        <Stack.ItemList title="Ferramentas de Design e Desenvolvimento" data={designData} />
        <Stack.ItemList title="Desenvolvimento Mobile" data={mobileData} />

        <SeeMoreRoot
          name="Sobre mim"
          description="Clique para ver o meu sobre mim"
          href="/about"
          Icon={FaUser}
          buttonText="Ver about me"
        />
      </div>
    </main>
  );
}
