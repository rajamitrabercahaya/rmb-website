import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raja Mitra Bercahaya | Rumah Kuliner Cilacap",
  description:
    "Raja Mitra Bercahaya mengelola ragam usaha kuliner dari Kroya, menghadirkan minuman segar, kopi, dan sajian hangat. Temukan cerita, pilihan sajian, dan lokasi RMB di Cilacap.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
