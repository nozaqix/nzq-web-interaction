import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nzq-web-interaction",
  description: "A tactile collection of small web interactions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
