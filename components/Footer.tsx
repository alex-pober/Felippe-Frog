'use client';

import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const iconSize = 40;

  const socialLinks = [
    {
      icon: <FaInstagram size={iconSize} className="text-[#E1306C] hover:scale-110 transition-transform" />,
      href: 'https://www.instagram.com/felippefrogg/',
      label: 'Instagram'
    },
    {
      icon: <SiLinktree size={iconSize} className="text-[#43E660] hover:scale-110 transition-transform" />,
      href: 'https://linktr.ee/felippefrogg',
      label: 'Linktree'
    },
    {
      icon: <FaLinkedin size={iconSize} className="text-[#0077B5] hover:scale-110 transition-transform" />,
      href: 'https://www.linkedin.com/in/felippefrogg/',
      label: 'LinkedIn'
    },
    {
      icon: <MdEmail size={iconSize} className="text-[#EA4335] hover:scale-110 transition-transform" />,
      href: 'mailto:felippefrogg@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer id="contact" className="w-full py-12 mt-auto relative z-10">
      <div className="container mx-auto flex justify-center items-center gap-8">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full p-2"
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
