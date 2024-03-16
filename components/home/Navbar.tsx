"use client";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../theme/ThemeButton";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const route = usePathname();
  return (
    <div className="">
      {/* mobile view */}
      <nav className="block md:hidden fixed w-full bottom-0 px-5 py-3 bg-secondary">
        <div className="flex justify-between items-center ">
          {navLinks.map((link) => (
            <Link
              className={`flex items-center flex-col gap-1 ${
                route === link.link
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              }`}
              href={link.link}
            >
              <span>
                <link.icon />
              </span>
              <span className="text-xs">{link.title}</span>
            </Link>
          ))}
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
