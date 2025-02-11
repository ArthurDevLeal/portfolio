interface SectionInfoProps {
  title: string;
  texts: Array<String>;
  position:number
}
export default function SectionInfo({ title, texts,position }: SectionInfoProps) {
  return (
    <>
      <p className="mt-2  font-semibold">
        <span className="text-sm opacity-60 mr-2">{position}.</span> {title}:
      </p>
      <ul>
        {texts.map((item, index) => (
          <li className="opacity-60 text-sm list-disc list-inside" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
