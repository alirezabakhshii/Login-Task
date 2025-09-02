import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auth Task",
  description: "Client Side Authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
