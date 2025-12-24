import "./globals.css";

export const metadata = {
  title: "مالیکو | مدیریت هوشمند مالی شخصی",
  description:
    "بدون ثبت دستی، فقط با خواندن پیامک‌های بانکی. کنترل کامل هزینه‌ها، دسته‌بندی هوشمند و تحلیل رفتار مالی با مالیکو",
  keywords:
    "مدیریت مالی، اپلیکیشن مالی، کنترل هزینه، پس‌انداز، دسته‌بندی خرج، تحلیل مالی",
  authors: [{ name: "Maliko Team" }],
  creator: "Maliko",
  publisher: "Maliko",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://maliko.ir",
    title: "مالیکو | مدیریت هوشمند مالی شخصی",
    description: "بدون ثبت دستی، فقط با خواندن پیامک‌های بانکی",
    siteName: "مالیکو",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "مالیکو - مدیریت هوشمند مالی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مالیکو | مدیریت هوشمند مالی شخصی",
    description: "بدون ثبت دستی، فقط با خواندن پیامک‌های بانکی",
    images: ["/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#0e60c9",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://maliko.ir" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
