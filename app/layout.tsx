import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'ENKO',
  description: 'ENKO EV charging infrastructure landing page.',
  icons: {
    icon: [
      { url: '/favicon-black.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon-black.png',
    apple: '/favicon-black.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var logoUrl = '/enko-logo-black.jpeg';
                var origCreate = window.CreateWhatsAppButtonAndWidget;
                Object.defineProperty(window, 'CreateWhatsAppButtonAndWidget', {
                  configurable: true,
                  enumerable: true,
                  get: function() {
                    return function(options) {
                      if (options) {
                        options.brandImgUrl = logoUrl;
                      }
                      return origCreate ? origCreate.apply(this, arguments) : undefined;
                    };
                  },
                  set: function(fn) {
                    origCreate = fn;
                  }
                });

                if (typeof MutationObserver !== 'undefined') {
                  var observer = new MutationObserver(function() {
                    var img = document.querySelector('.df-brand-img img');
                    if (img && img.getAttribute('src') !== logoUrl) {
                      img.src = logoUrl;
                    }
                  });
                  observer.observe(document.documentElement, { childList: true, subtree: true });
                }
              })();
            `,
          }}
        />
        <script
          type="text/javascript"
          src="https://d3mkw6s8thqya7.cloudfront.net/integration-plugin.js"
          id="aisensy-wa-widget"
          widget-id="aab5mj"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
