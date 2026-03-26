import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Theziner — Design System Playground",
  description: "Create and preview design systems for your apps, then export as AI prompts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link
          id="google-fonts-preload"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        />
      </head>
      <body className="h-full">{children}</body>
    </html>
  );
}
