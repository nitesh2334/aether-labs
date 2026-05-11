import React from 'react';
import { Card } from '@/components/ui/Card';
import { FileText, Plus, Search } from 'lucide-react';

export default function NotesPage() {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700">
      <section className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Workspace Notes</h1>
          <p className="text-muted-foreground">Collaborative documentation for your AI projects.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold glow-primary hover:opacity-90 transition-all">
          <Plus className="w-4 h-4" />
          <span>New Note</span>
        </button>
      </section>

      <div className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-white transition-colors" />
        <input 
          type="text" 
          placeholder="Search through 124 notes..." 
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="hover:border-primary/50 cursor-pointer group transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Modified {i}d ago</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">Technical Architecture v{i}</h3>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
              Detailed breakdown of the upcoming AI infrastructure upgrade. This document covers the distribution of compute nodes across multiple regions and the implementation of...
            </p>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-bold text-muted-foreground border border-white/5">ARCH</span>
              <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-bold text-muted-foreground border border-white/5">AI</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
