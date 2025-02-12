import { Icons } from "@/components/icons";
import { MobileDrawer } from "@/components/mobile-drawer";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 h-[var(--header-height)] z-50 p-0 bg-background/60 backdrop-blur">
      <div className="flex justify-between items-center container mx-auto p-2">
        <Link
          href="https://www.featbit.co"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2"
        >
          <Icons.logo className="w-auto" />
          <span className="font-semibold text-2xl">FeatBit</span>
        </Link>
        <div className="hidden lg:block">
          <Link
            href="/"
            className={cn(
              "text-primary-foreground rounded-lg group tracking-tight font-medium",
              "lg:mr-10 text-sm"
            )}
          >
            AI Prompt Version Control
          </Link>
          <Link
            href="/blog"
            className={cn(
              "text-primary-foreground rounded-lg group tracking-tight font-medium",
              "lg:mr-20 text-sm"
            )}
          >
            Blog
          </Link>

          <Link
            href="https://app.featbit.co"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-8 text-primary-foreground rounded-lg group tracking-tight font-medium"
            )}
          >
            Get Started
          </Link>
        </div>
        <div className="mt-2 cursor-pointer block lg:hidden">
          <MobileDrawer />
        </div>
      </div>
      <hr className="absolute w-full bottom-0" />
    </header>
  );
}
