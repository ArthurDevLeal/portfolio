import Link from "next/link";
import { BsStack } from "react-icons/bs";
import { Button } from "../ui/button";

export default function TitleButtons() {
  return (
    <div className="flex items-center gap-2 mt-4">
      <Link href={"/about"}>
        <Button className="bg-card" variant={"outline"} size={"sm"}>
          About
        </Button>
      </Link>
      <Link href={"/stack"}>
        <Button className="gap-2" variant={"outline"} size={"sm"}>
          <BsStack />
          Stack
        </Button>
      </Link>
    </div>
  );
}
