"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle } from "./ui/sheet";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between px-5 pt-6">
        <Link href="/" className="relative h-[30px] w-[100px]">
          <Image src="/logo.png" alt="FSW Foods" fill />
        </Link>
        <Button
          size="icon"
          variant="outline"
          className="border-none bg-transparent"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-[90vw]">
          <SheetTitle>Menu</SheetTitle>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Header;
