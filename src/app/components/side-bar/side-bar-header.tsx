export default function SideBarHeader() {
  return (
    <div className="w-full flex gap-4 items-center">
      <img src={"./me.jpg"} width={40} height={40} className="rounded-full" alt="UserImage" loading="lazy" />
      <div className="flex flex-col ">
        <p className="font-semibold whitespace-nowrap">Arthur Leal</p>
        <p className="opacity-60 text-sm whitespace-nowrap">Dev. Front end</p>
      </div>
    </div>
  );
}
