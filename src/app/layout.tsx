import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "AETHER LABS | Futuristic AI Workspace",
  description: "The next generation of AI-powered workspaces.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased cyber-grid overflow-y-auto">
        <div className="flex min-h-screen bg-background text-foreground">
          <Sidebar />
          <div className="flex-1 flex flex-col pl-64">
            <Navbar />
            <main className="flex-1 pt-16">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
