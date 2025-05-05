import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Davis | Juridiskais Birojs",
  description: "Profesionāli juridiski pakalpojumi Latvijā",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lv">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
