"use client";

import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { SiLinktree } from 'react-icons/si';
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url("/Template Mock Up - Copy.svg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <Navigation />
      
      <main className="relative z-10 max-w-3xl mx-auto mt-6 px-4 md:px-6 py-12 bg-white/30 backdrop-blur-sm p-4 rounded-xl">
          <h1 className="text-4xl font-bold text-center mb-4">Bring Feleap to Your Festival!</h1>
          <p className="text-xl text-center mb-12">
            Enhance your festival with Feleap Frog, a unique roamer creating unforgettable moments.
          </p>
          
          <div className="space-y-6 flex flex-col items-center">
            <a
              href="https://www.instagram.com/feleapfrog/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/30 backdrop-blur-sm text-green-800 hover:bg-white/40 transition-colors"
            >
              <Image src="/instagram-icon.svg" alt="Instagram" width={32} height={32} />
              <span className="text-xl font-medium">Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/in/feleapfrog/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/30 backdrop-blur-sm text-green-800 hover:bg-white/40 transition-colors"
            >
              <Image src="/linkedin-icon.svg" alt="LinkedIn" width={32} height={32} />
              <span className="text-xl font-medium">Linkedin</span>
            </a>

            <a
              href="https://linktr.ee/feleapfrog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/30 backdrop-blur-sm text-green-800 hover:bg-white/40 transition-colors"
            >
              <SiLinktree className="w-8 h-8 text-[#43E660]" />
              <span className="text-xl font-medium">Linktree</span>
            </a>

            <a
              href="mailto:feleapfrog@gmail.com"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/30 backdrop-blur-sm text-green-800 hover:bg-white/40 transition-colors"
            >
              <Image src="/gmail-icon.svg" alt="Email" width={32} height={32} />
              <span className="text-xl font-medium">Email</span>
            </a>
          </div>
          
          {/* QR Code */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex flex-col items-center gap-4 px-8 py-6 rounded-2xl bg-white/30 backdrop-blur-sm">
              <Image
                src="/qr-code.png"
                alt="QR Code"
                width={200}
                height={200}
              />
              <p className="text-xl font-medium text-green-800">Scan Me to Connect!</p>
            </div>
          </div>
      </main>
      
      <Footer />
    </div>
  );
}
