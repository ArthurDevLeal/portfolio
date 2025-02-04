import Image from "next/image";

export default function SideBarHeader() {
  return (
    <div className="w-full flex gap-4 items-center">
      <Image
        src={
          "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
        }
        width={40}
        height={40}
        className="rounded-full"
        alt="UserImage"
        loading="lazy"
      ></Image>
      <div className="flex flex-col ">
        <p className="font-semibold whitespace-nowrap">Arthur Leal</p>
        <p className="opacity-60 text-sm">Front-end Developer</p>
      </div>
    </div>
  );
}
