import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export function Card({ children, className, gradient }: CardProps) {
  return (
    <div className={cn(
      "glass-card p-6 rounded-3xl transition-all duration-300",
      gradient && "bg-gradient-to-br from-white/5 to-white/[0.02]",
      className
    )}>
      {children}
    </div>
  );
}

export function StatCard({ 
  title, 
  value, 
  change, 
  icon: Icon,
  trend = 'up'
}: { 
  title: string, 
  value: string, 
  change: string, 
  icon: any,
  trend?: 'up' | 'down' 
}) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 text-muted-foreground group-hover:text-primary transition-colors">
          <Icon className="w-5 h-5" />
        </div>
        <span className={cn(
          "text-[10px] font-bold px-2 py-1 rounded-full border tracking-wider",
          trend === 'up' ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" : "text-rose-400 bg-rose-400/10 border-rose-400/20"
        )}>
          {change}
        </span>
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
        <h3 className="text-2xl font-bold tracking-tight text-white">{value}</h3>
      </div>
    </Card>
  );
}
