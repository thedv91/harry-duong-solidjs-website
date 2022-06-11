// @refresh reload
import './index.css';
import lazySizes from 'lazysizes';
import { Links, Meta, Routes, Scripts } from 'solid-start/root';
import { ErrorBoundary } from 'solid-start/error-boundary';
import { Suspense } from 'solid-js';
import Font from './components/Font';
import { isServer } from 'solid-js/web';

lazySizes.cfg.lazyClass = 'lazyload';

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin=""
        />
        <Font />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#131019" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta
          httpEquiv="Accept-CH"
          content="DPR, Width, Viewport-Width, ECT, Device-Memory"
        />
        <meta httpEquiv="Accept-CH-Lifetime" content="86400" />
        <Meta />
        <Links />
      </head>
      <body class="bg-white transition-all dark:bg-slate-900 antialiased">
        <ErrorBoundary>
          <Suspense
            fallback={
              <div class="min-h-screen w-full flex items-center justify-center">
                <span>Loading...</span>
              </div>
            }
          >
            <Routes />
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  );
}

if (import.meta.env.PROD && !isServer && 'serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      function (registration) {
        console.log(
          'Service Worker registration successful with scope: ',
          registration.scope,
        );
      },
      function (err) {
        console.log('Service Worker registration failed: ', err);
      },
    );
  });
}
