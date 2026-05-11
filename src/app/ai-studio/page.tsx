import React from 'react';
import { Sparkles, Zap, Brain, MessageSquare, Image, Code } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

const models = [
  { name: 'Neural-X 4', type: 'Language Model', icon: MessageSquare, color: 'text-blue-400', bg: 'bg-blue-400/10' },
  { name: 'Visionary Pro', type: 'Image Synthesis', icon: Image, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { name: 'Cortex Code', type: 'Code Generation', icon: Code, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { name: 'Logic Flow', type: 'Reasoning Engine', icon: Brain, color: 'text-orange-400', bg: 'bg-orange-400/10' },
];

export default function AIStudioPage() {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700">
      <section>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary glow-primary">
            <Sparkles className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">AI Studio</h1>
        </div>
        <p className="text-muted-foreground">Orchestrate and deploy custom AI models for your workflow.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="min-h-[400px] flex flex-col items-center justify-center text-center p-12 border-dashed">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
              <Zap className="w-10 h-10 text-primary animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Initialize Studio Workspace</h2>
            <p className="text-muted-foreground max-w-md mb-8">
              Select a model from the repository to start building your custom AI agent. You can configure parameters, train on local data, and deploy via API.
            </p>
            <button className="px-8 py-3 rounded-xl bg-primary text-white font-bold glow-primary hover:scale-105 transition-all">
              Launch Model Selector
            </button>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Active Node</p>
                <p className="text-xs text-muted-foreground">Compute Tier: Enterprise</p>
              </div>
            </Card>
            <Card className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                <Zap className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">System Status</p>
                <p className="text-xs text-emerald-400 font-medium">99.9% Efficiency</p>
              </div>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest px-1">Available Models</h3>
          <div className="space-y-3">
            {models.map((model) => (
              <Card key={model.name} className="p-4 hover:bg-white/5 cursor-pointer transition-colors border-white/5">
                <div className="flex items-center gap-4">
                  <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", model.bg)}>
                    <model.icon className={cn("w-5 h-5", model.color)} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">{model.name}</p>
                    <p className="text-[10px] text-muted-foreground uppercase">{model.type}</p>
                  </div>
                  <button className="text-xs font-bold text-primary px-2 py-1 rounded-md hover:bg-primary/10 transition-colors">
                    LOAD
                  </button>
                </div>
              </Card>
            ))}
          </div>
          
          <Card className="bg-gradient-to-br from-primary/20 to-transparent border-primary/20">
            <h4 className="text-sm font-bold text-white mb-2">Custom Training</h4>
            <p className="text-xs text-muted-foreground mb-4">Upload your own datasets to fine-tune existing models for specific domain knowledge.</p>
            <button className="w-full py-2 text-xs font-bold bg-white text-black rounded-lg hover:opacity-90 transition-opacity">
              Start Fine-tuning
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}
