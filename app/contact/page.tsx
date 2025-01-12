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
          <h1 className="text-4xl font-bold text-center mb-4">Bring Felippe to Your Festival!</h1>
          <p className="text-xl text-center mb-12">
            Enhance your festival with Felippe Frogg, a unique roamer creating unforgettable moments.
          </p>
          
          <div className="space-y-6 flex flex-col items-center">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Image src="/instagram-icon.svg" alt="Instagram" width={40} height={40} />
              <a href="https://www.instagram.com/felippefrogg/" 
                 className="text-lg hover:underline"
                 target="_blank"
                 rel="noopener noreferrer">
                https://www.instagram.com/felippefrogg/
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <Image src="/linkedin-icon.svg" alt="LinkedIn" width={40} height={40} />
              <a href="https://www.linkedin.com/in/felippefrogg/" 
                 className="text-lg hover:underline"
                 target="_blank"
                 rel="noopener noreferrer">
                https://www.linkedin.com/in/felippefrogg/
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <SiLinktree className="w-10 h-10 text-[#43E660]" />
              <a href="https://linktr.ee/felippefrogg" 
                 className="text-lg hover:underline"
                 target="_blank"
                 rel="noopener noreferrer">
                https://linktr.ee/felippefrogg
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <Image src="/gmail-icon.svg" alt="Email" width={40} height={40} />
              <a href="mailto:felippefrogg@gmail.com" 
                 className="text-lg hover:underline">
                felippefrogg@gmail.com
              </a>
            </div>
          </div>
          
          {/* QR Code */}
          <div className="mt-12 text-center">
            <Image 
              src="/qr-code.png" 
              alt="QR Code" 
              width={200} 
              height={200} 
              className="mx-auto"
            />
            <p className="text-xl mt-4">Scan Me to Connect!</p>
          </div>
      </main>
      
      <Footer />
    </div>
  );
}
