export type MetricStatus = 'healthy' | 'warning' | 'critical';

export interface KPI {
  label: string;
  value: string;
  subValue?: string;
  trend: number; // percentage
  trendLabel?: string;
  status?: MetricStatus;
  type?: 'currency' | 'percent' | 'number';
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  status: 'active' | 'paused' | 'scaling';
  image: string;
  
  // Financials
  spend: number;
  revenueGross: number; // Hotmart approved
  revenueNet: number;   // After fees
  profit: number;
  
  // Key Metrics
  roas: number;
  roi: number;
  cpa: number;
  purchases: number;
  refundRate: number;
  
  // Trend
  dailyTrend: number[]; // Sparkline data
}

export interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'paused';
  spend: number;
  roas: number;
  cpa: number;
  ctr: number;
}

export interface AdSet {
  id: string;
  name: string;
  status: 'active' | 'paused';
  campaignName: string;
  dailyBudget: number;
  spend: number;
  revenue: number;
  roas: number;
  cpa: number;
  purchases: number;
  ctr: number;
}

export interface Creative {
  id: string;
  thumbnail: string;
  name: string;
  ctr: number;
  cpa: number;
  roas: number;
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: string;
}

export type TimeRange = 'today' | '7d' | '14d' | '30d' | 'custom';

export interface ChartDataPoint {
  date: string;
  spend: number;
  revenue: number;
  profit: number;
}