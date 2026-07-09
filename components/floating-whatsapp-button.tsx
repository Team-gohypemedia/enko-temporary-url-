"use client";

import { usePathname } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappUrl } from '@/lib/site-data';

export function FloatingWhatsappButton() {
  const pathname = usePathname();

  // Hide on homepage
  if (pathname === '/') {
    return null;
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ENKO on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#25D366]/50 bg-[#25D366] text-forge shadow-[0_12px_35px_rgba(37,211,102,0.35)] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-forge"
    >
      <FaWhatsapp className="h-8 w-8" aria-hidden="true" />
    </a>
  );
}
