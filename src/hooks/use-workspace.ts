'use client';

import { useState, useEffect } from 'react';

export function useWorkspace() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setData({
        name: 'Aether Labs Main',
        nodes: 12,
        status: 'online',
        lastSync: new Date().toISOString()
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { data, loading };
}
