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
    } else if (item === "Contact") {
      e.preventDefault();
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }
    }
  };

  return (
    <>
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/Logo.svg"
              alt="Logo"
              width={48}
              height={48}
              priority
            />
          </div>

          <div className="flex gap-2 ml-auto">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={item === "Contact" ? "#contact" : "#"}
                onClick={(e) => handleClick(e, item)}
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