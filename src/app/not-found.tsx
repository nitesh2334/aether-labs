import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center text-primary glow-primary mb-8 animate-bounce">
        <Zap className="w-10 h-10" fill="currentColor" />
      </div>
      <h1 className="text-6xl font-black tracking-tighter text-white mb-4">404</h1>
      <h2 className="text-2xl font-bold text-white mb-4">Node Not Found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        The coordinate you are looking for does not exist in the Aether network or has been decommissioned.
      </p>
      <Link 
        href="/" 
        className="px-8 py-3 rounded-xl bg-primary text-white font-bold glow-primary hover:scale-105 transition-all"
      >
        Return to Dashboard
      </Link>
    </div>
  );
}
