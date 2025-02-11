import { JSXtype } from "@/app/type";

interface SideBarSectioRootProps {
  sectionName: string;
  children: JSXtype;
}
export default function SideBarSectioRoot({ sectionName, children }: SideBarSectioRootProps) {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <p className="text-sm opacity-40">{sectionName}</p>
      {children}
    </div>
  );
}
