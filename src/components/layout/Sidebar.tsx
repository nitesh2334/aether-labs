'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  FileText, 
  Sparkles, 
  BarChart3, 
  Settings, 
  Zap,
  ChevronRight
} from 'lucide-react';

const navItems = [
  { title: 'Dashboard', href: '/', icon: LayoutDashboard },
  { title: 'Notes', href: '/notes', icon: FileText },
  { title: 'AI Studio', href: '/ai-studio', icon: Sparkles },
  { title: 'Analytics', href: '/analytics', icon: BarChart3 },
  { title: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 glass border-r border-white/5 transition-transform">
      <div className="flex flex-col h-full px-4 py-6">
        <div className="flex items-center gap-3 px-2 mb-10">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center glow-primary">
            <Zap className="w-5 h-5 text-white" fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            AETHER LABS
          </span>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                  isActive 
                    ? "bg-white/10 text-white" 
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className={cn(
                  "w-5 h-5 transition-colors",
                  isActive ? "text-primary" : "group-hover:text-white"
                )} />
                <span className="font-medium text-sm">{item.title}</span>
                {isActive && (
                  <ChevronRight className="w-4 h-4 ml-auto text-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto px-2">
          <div className="p-4 rounded-2xl glass-card bg-primary/5 border-primary/10">
            <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">Pro Plan</p>
            <p className="text-sm text-muted-foreground mb-3">Get unlimited AI generations and workspace seats.</p>
            <button className="w-full py-2 px-4 rounded-lg bg-primary text-white text-xs font-bold hover:opacity-90 transition-opacity glow-primary">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
