import { FadeInContainer } from "../fade-in-container";

export default function Title() {
  return (
    <>
      <FadeInContainer>
        {" "}
        <h1 className=" md:text-4xl text-2xl font-semibold leading-10 text-pretty">
          Olá, sou Arthur, <br />
          Um <span className="opacity-60">desenvolvedor</span> Front end.
        </h1>
        <p className="opacity-60 mt-6">
          Sou um desenvolvedor apaixonado por criar aplicações web e explorar novas tecnologias, sempre
          buscando inovação e eficiência.
        </p>
      </FadeInContainer>
    </>
  );
}
