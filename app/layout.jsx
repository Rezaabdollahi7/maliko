import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://maliko.ir"),

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

  manifest: "/manifest.json",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0e60c9",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
