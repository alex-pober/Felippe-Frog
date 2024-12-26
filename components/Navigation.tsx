"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { PressKitModal } from "./PressKitModal";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPressKitOpen, setIsPressKitOpen] = useState(false);

  const menuItems = ["Home", "Media", "Contact"];

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
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-8">
            {menuItems.map((item) => (
              <Link
                key={item}
                href="*"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-[88px] left-0 right-0 bg-white/90 backdrop-blur-sm p-4 flex flex-col gap-2 shadow-lg">
            {menuItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="px-4 py-2 rounded-full bg-yellow-200/80 text-green-800 hover:bg-yellow-300/80 transition-colors text-center"
              >
                {item}
              </Link>
            ))}
            <button
              onClick={() => setIsPressKitOpen(true)}
              className="px-4 py-2 rounded-full bg-yellow-200/80 text-green-800 hover:bg-yellow-300/80 transition-colors text-center"
            >
              Press Kit
            </button>
          </div>
        )}
      </nav>
    </>
  );
}