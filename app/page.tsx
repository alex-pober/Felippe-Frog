"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MediaGrid } from "@/components/MediaGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-200/30"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(-50%, -50%)`,
            }}
          />
        ))}
      </div>

      <Navigation />

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-20">
        <Hero />
        <MediaGrid />
      </main>
    </div>
  );
}