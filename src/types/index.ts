export type NavItem = {
  title: string;
  href: string;
  icon: string;
};

export type ActivityItem = {
  id: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
  avatar?: string;
};

export type AnalyticsData = {
  label: string;
  value: number;
  change: number;
};
