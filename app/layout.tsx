import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { FloatingWhatsappButton } from '@/components/floating-whatsapp-button';
import './globals.css';

export const metadata: Metadata = {
  title: 'ENKO',
  description: 'ENKO EV charging infrastructure landing page.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="aab5mj"
        />
      </head>
      <body>
        {children}
        <FloatingWhatsappButton />
      </body>
    </html>
  );
}
