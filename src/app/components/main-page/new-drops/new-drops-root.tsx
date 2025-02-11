import { JSXtype } from "@/app/type";

export default function NewDropRoot({ children }: { children: JSXtype }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full place-items-stretch">
      {children}
    </div>
  );
}