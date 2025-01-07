"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MediaGrid } from "@/components/MediaGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden" 
         style={{
           backgroundImage: 'url("/Template Mock Up - Copy.svg")',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat'
         }}>

      <Navigation />

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-20">
        <Hero />
        <MediaGrid />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}