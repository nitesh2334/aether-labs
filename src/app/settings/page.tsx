import React from 'react';
import { Settings, User, Bell, Lock, Zap, Shield, Globe } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

export default function SettingsPage() {
  const sections = [
    { name: 'Profile', icon: User, active: true },
    { name: 'Notifications', icon: Bell, active: false },
    { name: 'Security', icon: Lock, active: false },
    { name: 'API Keys', icon: Zap, active: false },
    { name: 'Workspace', icon: Globe, active: false },
    { name: 'Billing', icon: Shield, active: false },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700">
      <section>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-muted-foreground">
            <Settings className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Settings</h1>
        </div>
        <p className="text-muted-foreground">Manage your account preferences and workspace configuration.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.name}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                section.active 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-muted-foreground hover:text-white hover:bg-white/5 border border-transparent"
              )}
            >
              <section.icon className="w-4 h-4" />
              {section.name}
            </button>
          ))}
        </aside>

        <div className="lg:col-span-3 space-y-6">
          <Card>
            <h3 className="text-lg font-bold text-white mb-6">Personal Profile</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center border-2 border-white/10 relative group cursor-pointer">
                  <User className="w-10 h-10 text-white" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-2xl">
                    <p className="text-[10px] font-bold text-white">CHANGE</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white">Alex Rivera</h4>
                  <p className="text-sm text-muted-foreground">alex@aetherlabs.ai</p>
                  <button className="mt-2 text-xs font-bold text-primary hover:underline">Edit Avatar</button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    defaultValue="Alex Rivera"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    defaultValue="alex@aetherlabs.ai"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Job Title</label>
                  <input 
                    type="text" 
                    defaultValue="Senior Architect"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Timezone</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all appearance-none">
                    <option>Pacific Time (PT)</option>
                    <option>Eastern Time (ET)</option>
                    <option>GMT</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-white/5 flex justify-end gap-3">
              <button className="px-5 py-2 rounded-xl text-sm font-bold text-muted-foreground hover:text-white transition-colors">Discard Changes</button>
              <button className="px-6 py-2 rounded-xl text-sm font-bold bg-primary text-white glow-primary hover:opacity-90 transition-opacity">Save Profile</button>
            </div>
          </Card>

          <Card className="border-rose-500/20 bg-rose-500/5">
            <h3 className="text-lg font-bold text-rose-500 mb-2">Danger Zone</h3>
            <p className="text-sm text-muted-foreground mb-6">Permanently delete your account and all workspace data. This action cannot be undone.</p>
            <button className="px-6 py-2 rounded-xl text-sm font-bold bg-rose-500/10 text-rose-500 border border-rose-500/20 hover:bg-rose-500 hover:text-white transition-all">
              Delete Account
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}
