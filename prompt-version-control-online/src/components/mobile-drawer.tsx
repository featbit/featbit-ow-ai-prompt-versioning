import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";

export function MobileDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <IoMenuSharp className="text-2xl" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="px-6">
          <Link
            href="https://www.featbit.co"
            title="brand-logo"
            className="relative flex items-center space-x-2 justify-center w-full mb-4"
          >
            <Icons.logo className="w-auto h-[40px]" />
            <DrawerTitle>{siteConfig.name}</DrawerTitle>
          </Link>          
          <Link
            href="/"
            className={cn(
              "text-primary-foreground rounded-lg group tracking-tight font-medium",
              "my-2 text-sm"
            )}
          >
            AI Prompt Version Control
          </Link>
          <Link
            href="/blog"
            className={cn(
              "text-primary-foreground rounded-lg group tracking-tight font-medium",
              "my-2 text-sm"
            )}
          >
            Blog
          </Link>
        </DrawerHeader>
        <DrawerFooter>
          <Link
            href="https://app.featbit.co"
            className={cn(
              buttonVariants({ variant: "default" }),
              "text-white rounded-full group"
            )}
          >
            {siteConfig.cta}
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
