import {
  Cross1Icon,
  HamburgerMenuIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Input } from "../@/components/ui/input";

function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const isDesktopOrLaptop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktopOrLaptop) {
      setShowMobileNav(false);
    }
  }, [isDesktopOrLaptop]);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div className="h-screen">
      <div className="flex justify-between items-center h-[60px] border-b-2 px-9">
        <div className="flex basis-2/3 space-x-5 text-slate-500">
          <div className="mr-5">AEON</div>
          <div className="hidden md:flex space-x-4">
            <a href="/">Showcase</a>
            <a href="/">Docs</a>
            <a href="/">Blog</a>
            <a href="/">Analytics</a>
            <a href="/">Templates</a>
            <a href="/">Enterprise</a>
          </div>
        </div>
        <Input
          type="text"
          placeholder="Search Documentation"
          className="hidden md:block ml-2 border-0 basis-1/3 bg-slate-100  focus:!ring-slate-300"
        />
        <div className="md:hidden flex space-x-3">
          <button>
            <MagnifyingGlassIcon className="text-5" />
          </button>
          <button onClick={toggleMobileNav} id="toggleButton">
            {showMobileNav ? <Cross1Icon /> : <HamburgerMenuIcon />}
          </button>
        </div>
      </div>
      {showMobileNav && (
        <div
          data-state={showMobileNav ? "open" : "closed"}
          className={
            "fixed z-50 bg-background mx-auto p-9 text-slate-500 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-x-0 top-[60px] border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top"
          }
        >
          <div className="flex flex-col space-y-5">
            <a href="/">Showcase</a>
            <a href="/">Docs</a>
            <a href="/">Blog</a>
            <a href="/">Analytics</a>
            <a href="/">Commerce</a>
            <a href="/">Templates</a>
            <a href="/">Enterprise</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
