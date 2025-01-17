import { Icons } from "@/components/icons";
import { MobileDrawer } from "@/components/mobile-drawer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Playground() {
  return (
    <div className="flex justify-between items-center container mx-auto p-2">
      <div className="flex flex-col lg:flex-row w-full gap-4 my-20">
        <div className="w-full lg:w-[60%]">
          Left content
        </div>
        <div className="w-full lg:flex-1">
          Right content
        </div>
      </div>
    </div>
  );
}
