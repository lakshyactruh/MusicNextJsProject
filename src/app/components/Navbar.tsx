"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 font-mono",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
            not now
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="My Courses">
          <div className=" flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All courses</HoveredLink>
            <HoveredLink href="/courses">Maths</HoveredLink>
            <HoveredLink href="/courses">Advanced Physics</HoveredLink>
            <HoveredLink href="/courses">Hindi</HoveredLink>
            <HoveredLink href="/courses">Literature</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
            {" "}
            Contact here
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
