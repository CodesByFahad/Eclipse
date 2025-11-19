import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        {/* ====== Google Fonts ====== */}
        <link
          href="https://fonts.googleapis.com/css2?family=Charm:wght@400;700&family=Jost:wght@300;400;500;600;700&family=Oregano&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />

        {/* ====== Basic Meta ====== */}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="description"
          content="Explore Eclipse — a premium men’s clothing store. From classic essentials to modern streetwear, find everything you need to elevate your style."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="Eclipse" />
        <meta name="theme-color" content="#ffffff" />

        {/* ====== Favicon ====== */}
        <link rel="icon" href="/favicon.png" />

        {/* ====== Open Graph Tags ====== */}
        <meta property="og:title" content="Eclipse – Men's Clothing Store" />
        <meta
          property="og:description"
          content="Discover Eclipse — premium men's fashion for the modern era. Shop shirts, jackets, and accessories designed to stand out."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eclipse-ecom.vercel.app/" />
        <meta
          property="og:image"
          content="https://eclipse-ecom.vercel.app/thumbnail.jpg"
        />
        <meta property="og:site_name" content="Eclipse" />
        <meta property="og:locale" content="en_US" />

        {/* ====== Twitter Tags ====== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eclipse – Men's Clothing Store" />
        <meta
          name="twitter:description"
          content="Explore premium men's clothing and accessories at Eclipse. Redefine your wardrobe with modern fashion essentials."
        />
        <meta
          name="twitter:image"
          content="https://eclipse-ecom.vercel.app/thumbnail.jpg"
        />

        {/* ====== Google Site Verification (optional) ====== */}
        <meta
          name="google-site-verification"
          content="l8Oixz8ctloaBwT7lPy-O4liPkZ39vBZeVRkSm5-2xc"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
