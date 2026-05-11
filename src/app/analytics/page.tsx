import React from 'react';
import { BarChart3, TrendingUp, TrendingDown, Calendar, Download } from 'lucide-react';
import { Card, StatCard } from '@/components/ui/Card';

export default function AnalyticsPage() {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700">
      <section className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Workspace Analytics</h1>
          <p className="text-muted-foreground">Real-time performance metrics and usage statistics.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border-white/5 text-sm font-medium hover:bg-white/5 transition-all">
            <Calendar className="w-4 h-4" />
            <span>Last 30 Days</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border-white/5 text-sm font-medium hover:bg-white/5 transition-all text-primary">
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total AI Requests" value="1.2M" change="+14.2%" icon={BarChart3} />
        <StatCard title="Avg. Response Time" value="142ms" change="-12ms" icon={TrendingUp} trend="up" />
        <StatCard title="Token Efficiency" value="94.1%" change="+2.4%" icon={TrendingDown} trend="up" />
      </section>

      <Card className="h-[400px] flex items-end justify-between gap-2 pt-20">
        {[40, 60, 45, 90, 65, 80, 55, 75, 95, 70, 85, 50].map((height, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
            <div 
              className="w-full bg-primary/20 rounded-t-lg transition-all duration-500 group-hover:bg-primary/50 relative"
              style={{ height: `${height}%` }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {height}%
              </div>
            </div>
            <span className="text-[10px] font-bold text-muted-foreground">M{i+1}</span>
          </div>
        ))}
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-bold text-white mb-6">Usage by Node</h3>
          <div className="space-y-4">
            {[
              { name: 'Compute Node-A', usage: 85, color: 'bg-blue-400' },
              { name: 'Compute Node-B', usage: 42, color: 'bg-purple-400' },
              { name: 'Compute Node-C', usage: 67, color: 'bg-emerald-400' },
            ].map((node) => (
              <div key={node.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-white">{node.name}</span>
                  <span className="text-muted-foreground">{node.usage}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className={cn("h-full rounded-full transition-all duration-1000", node.color)} style={{ width: `${node.usage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-bold text-white mb-6">Top AI Operations</h3>
          <div className="space-y-4">
            {[
              { op: 'Text Completion', count: '450k', growth: '+12%' },
              { op: 'Image Generation', count: '120k', growth: '+54%' },
              { op: 'Code Refactoring', count: '280k', growth: '+21%' },
            ].map((op) => (
              <div key={op.op} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                <div>
                  <p className="text-sm font-bold text-white">{op.op}</p>
                  <p className="text-xs text-muted-foreground">{op.count} operations</p>
                </div>
                <span className="text-xs font-bold text-emerald-400">{op.growth}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// I need to import cn here too
import { cn } from '@/lib/utils';
