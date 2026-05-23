import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Store | Next.js Shop",
  description: "A modern e-commerce store built with Next.js 15, Tailwind, and Shadcn/UI.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground min-h-screen antialiased">
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
