import React from 'react';
import { 
  Sparkles, 
  BarChart3, 
  Users, 
  Zap, 
  ArrowUpRight, 
  Clock, 
  Search,
  Plus
} from 'lucide-react';
import { StatCard, Card } from '@/components/ui/Card';

const recentActivities = [
  { id: '1', user: 'Alex Rivera', action: 'updated', target: 'Project Aether', time: '2 mins ago' },
  { id: '2', user: 'System', action: 'deployed', target: 'AI Node v2.4', time: '1 hour ago' },
  { id: '3', user: 'Sarah Chen', action: 'created', target: 'Marketing Kit', time: '4 hours ago' },
  { id: '4', user: 'Marcus Wright', action: 'shared', target: 'Design System', time: '6 hours ago' },
];

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700">
      {/* Welcome Section */}
      <section className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            Welcome back, <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Alex</span>
          </h1>
          <p className="text-muted-foreground max-w-md">
            Your workspace is synchronized across all AI nodes. You have 3 pending tasks for today.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border-white/5 text-sm font-medium hover:bg-white/5 transition-all">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-bold glow-primary hover:opacity-90 transition-all">
            <Plus className="w-4 h-4" />
            <span>New Project</span>
          </button>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Weekly AI Usage" 
          value="24.8k" 
          change="+12.5%" 
          icon={Zap} 
        />
        <StatCard 
          title="Active Projects" 
          value="12" 
          change="+2" 
          icon={BarChart3} 
        />
        <StatCard 
          title="Workspace Members" 
          value="8" 
          change="0%" 
          icon={Users} 
          trend="up"
        />
        <StatCard 
          title="Tasks Completed" 
          value="98.2" 
          change="+5.1%" 
          icon={Sparkles} 
        />
      </section>

      {/* Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Workspace Overview */}
        <Card className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Workspace Overview
            </h2>
            <button className="text-xs font-medium text-muted-foreground hover:text-white transition-colors flex items-center gap-1">
              View All <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">v{i}.0.2</span>
                </div>
                <h4 className="font-bold text-white mb-1 group-hover:text-primary transition-colors">ProjectResearch Hub {i}</h4>
                <p className="text-xs text-muted-foreground mb-4">AI-driven data orchestration and analysis pipeline.</p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((u) => (
                      <div key={u} className="w-6 h-6 rounded-full border-2 border-background bg-slate-700"></div>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400">ACTIVE</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl border border-dashed border-white/10 flex items-center justify-center py-10 group cursor-pointer hover:border-primary/50 transition-all">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Plus className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </div>
              <p className="text-sm font-medium text-muted-foreground group-hover:text-white">Create new workspace container</p>
            </div>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Recent Activity
            </h2>
          </div>

          <div className="space-y-6">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex gap-4 group">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-primary/50 transition-colors">
                    <Users className="w-5 h-5 text-muted-foreground" />
                  </div>
                  {activity.id !== '4' && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-6 bg-white/5"></div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">
                    <span className="font-bold">{activity.user}</span>{' '}
                    <span className="text-muted-foreground">{activity.action}</span>{' '}
                    <span className="font-medium text-primary/80">{activity.target}</span>
                  </p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full py-2 text-xs font-bold text-muted-foreground hover:text-white border border-white/5 rounded-xl hover:bg-white/5 transition-all">
            View Activity Log
          </button>
        </Card>
      </section>
    </div>
  );
}
