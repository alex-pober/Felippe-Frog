"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { scrollToMedia } from "@/utils/scrollUtils";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Media", "Contact"];

  const handleClick = (e: React.MouseEvent, item: string) => {
    if (item === "Media") {
      e.preventDefault();
      scrollToMedia();
    }
  };

  return (
    <>
      <nav className="relative z-50 pt-6 px-6 pb-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/Logo.svg"
                alt="Logo"
                width={48}
                height={48}
                priority
              />
            </Link>
          </div>

          <div className="flex gap-2 ml-auto">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={item === "Contact" ? "/contact" : "#"}
                onClick={(e) => item === "Media" ? handleClick(e, item) : undefined}
                className="px-4 py-2 rounded-full bg-yellow-200/80 text-green-800 hover:bg-yellow-300/80 transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/EPK-FINAL.pdf"
              className="px-4 py-2 rounded-full bg-yellow-200/80 text-green-800 hover:bg-yellow-300/80 transition-colors"
            >
              Press Kit
            </Link>
          </div>
        </div>

      </nav>
    </>
  );
}