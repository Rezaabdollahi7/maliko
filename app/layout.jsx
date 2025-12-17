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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://maliko.ir" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
