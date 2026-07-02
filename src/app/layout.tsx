import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gabriel-nexus.vercel.app"),
  title: "Mangelek Gabriel Tambun — AI Engineer & Full Stack Developer",
  description:
    "Premium portfolio for AI, data science, forecasting, and web systems.",
  openGraph: {
    title: "Mangelek Gabriel Tambun — AI/Data Portfolio",
    description: "LLM-TFT thesis, dashboard, sentiment pipeline, and web systems.",
    images: ["/images/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="noise antialiased">{children}</body>
    </html>
  );
}
