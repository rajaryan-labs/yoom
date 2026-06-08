import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger
          render={
            <Image
              src="/icons/hamburger.svg"
              width={36}
              height={36}
              alt="Hamburger svg"
              className="cursor-pointer"
            />
          }
        />
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1 ">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="Yoom logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white max-sm:hidden">
              Yoom
            </p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            Hello
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
