'use client';

import React from 'react';
import { Search, Bell, User, Command } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-64 z-30 h-16 glass border-b border-white/5 flex items-center justify-between px-8">
      <div className="flex items-center flex-1">
        <div className="relative w-96 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-white transition-colors" />
          <input 
            type="text" 
            placeholder="Search workspace..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-white/10 px-1.5 py-0.5 rounded border border-white/10">
            <Command className="w-3 h-3 text-muted-foreground" />
            <span className="text-[10px] font-bold text-muted-foreground tracking-tighter">K</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-xl hover:bg-white/5 transition-colors text-muted-foreground hover:text-white">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-background"></span>
        </button>
        <div className="h-8 w-px bg-white/10 mx-2"></div>
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right">
            <p className="text-sm font-medium">Alex Rivera</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Architect</p>
          </div>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center border border-white/20">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}
