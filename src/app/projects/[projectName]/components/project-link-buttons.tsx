import { Button } from "@/app/components/ui/button";
import Card from "@/app/components/ui/card";
import Link from "next/link";
interface LinkButtonsProps {
  href?: string;
  repoHref?: string;
  figmaLink?: string;
}
export default function LinkButtons({ href, repoHref, figmaLink }: LinkButtonsProps) {
  if (href && repoHref) {
    return (
      <Card className="p-6 flex items-center justify-center mt-4">
        <div className="flex md:items-center justify-between md:gap-12 w-full flex-1 flex-col md:flex-row gap-2">
          <div className="flex flex-col ">
            <p className="font-semibold">Website e repositorio</p>
            <p className="text-sm opacity-60  ">Gostaria de ver o website ou o codigo fonte?</p>
          </div>
          <div className="flex items-center gap-2 ">
            <Link target="_blank" href={href}>
              <Button variant={"outline"} size={"sm"}>
                Ver website
              </Button>
            </Link>
            <Link target="_blank" href={repoHref}>
              <Button variant={"outline"} size={"sm"}>
                Ver Repo
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    );
  }
  if (figmaLink) {
    return (
      <Card className="p-6 flex items-center justify-center mt-4">
        <div className="flex md:items-center justify-between md:gap-12 w-full flex-1 flex-col md:flex-row gap-2">
          <div className="flex flex-col ">
            <p className="font-semibold">Website e repositorio</p>
            <p className="text-sm opacity-60  ">Gostaria de ver o website ou o codigo fonte?</p>
          </div>
          <div className="flex items-center gap-2 ">
            <Link target="_blank" href={figmaLink}>
              <Button variant={"outline"} size={"sm"}>
                Ver design
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    );
  }
}
