import { Product, Alert, ChartDataPoint, Campaign, Creative, AdSet } from './types';

export const MOCK_CHART_DATA: ChartDataPoint[] = Array.from({ length: 14 }).map((_, i) => {
  const spend = Math.floor(Math.random() * 2000) + 1000;
  const revenue = spend * (Math.random() * 1.5 + 1.2); // ROAS between 1.2 and 2.7
  return {
    date: `Dia ${i + 1}`,
    spend,
    revenue,
    profit: revenue - spend - (revenue * 0.1), // rough tax/fee calc
  };
});

export const TOP_CAMPAIGNS: Campaign[] = [
  { id: '1', name: 'CNV_Escala_Aberta_01', status: 'active', spend: 4500, roas: 3.2, cpa: 45.0, ctr: 1.8 },
  { id: '2', name: 'CNV_Remarketing_7D', status: 'active', spend: 1200, roas: 4.5, cpa: 32.5, ctr: 2.1 },
  { id: '3', name: 'CNV_Teste_Lookalike', status: 'paused', spend: 800, roas: 0.8, cpa: 95.0, ctr: 0.9 },
];

export const MOCK_ADSETS: AdSet[] = [
  { id: 'set_1', name: 'Público Aberto - Video 01', status: 'active', campaignName: 'CNV_Escala_Aberta_01', dailyBudget: 150, spend: 1250, revenue: 4125, roas: 3.3, cpa: 41.0, purchases: 30, ctr: 1.9 },
  { id: 'set_2', name: 'Interesses - Marketing Digital', status: 'active', campaignName: 'CNV_Escala_Aberta_01', dailyBudget: 100, spend: 850, revenue: 2125, roas: 2.5, cpa: 48.0, purchases: 17, ctr: 1.5 },
  { id: 'set_3', name: 'Lookalike 1% Compradores', status: 'paused', campaignName: 'CNV_Teste_Lookalike', dailyBudget: 80, spend: 320, revenue: 160, roas: 0.5, cpa: 160.0, purchases: 2, ctr: 0.8 },
  { id: 'set_4', name: 'Remarketing - Checkout 7D', status: 'active', campaignName: 'CNV_Remarketing_7D', dailyBudget: 50, spend: 450, revenue: 2250, roas: 5.0, cpa: 28.0, purchases: 16, ctr: 2.4 },
  { id: 'set_5', name: 'Remarketing - Envolvidos 30D', status: 'active', campaignName: 'CNV_Remarketing_7D', dailyBudget: 60, spend: 520, revenue: 1800, roas: 3.46, cpa: 34.6, purchases: 15, ctr: 2.1 },
  { id: 'set_6', name: 'Público Aberto - Carrossel', status: 'active', campaignName: 'CNV_Escala_Aberta_01', dailyBudget: 150, spend: 1100, revenue: 2900, roas: 2.63, cpa: 45.8, purchases: 24, ctr: 1.6 },
];

export const TOP_CREATIVES: Creative[] = [
  { id: '1', thumbnail: 'https://picsum.photos/100/100?random=1', name: 'Video_Depoimento_03', ctr: 2.4, cpa: 35, roas: 3.8 },
  { id: '2', thumbnail: 'https://picsum.photos/100/100?random=2', name: 'Statico_Lista_Beneficios', ctr: 1.9, cpa: 42, roas: 2.9 },
  { id: '3', thumbnail: 'https://picsum.photos/100/100?random=3', name: 'UGC_Unboxing', ctr: 1.2, cpa: 55, roas: 1.5 },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod_1',
    name: 'Mentoria Freedom 2.0',
    slug: 'mentoria-freedom',
    status: 'scaling',
    image: 'https://picsum.photos/id/20/200/200',
    spend: 12500,
    revenueGross: 45000,
    revenueNet: 39500,
    profit: 27000,
    roas: 3.6,
    roi: 2.16,
    cpa: 85.50,
    purchases: 526,
    refundRate: 2.1,
    dailyTrend: [1, 2, 2.5, 2, 3, 3.5, 4, 3.8, 4.2, 5],
  },
  {
    id: 'prod_2',
    name: 'Curso Facebook Ads Pro',
    slug: 'fb-ads-pro',
    status: 'active',
    image: 'https://picsum.photos/id/3/200/200',
    spend: 4200,
    revenueGross: 9800,
    revenueNet: 8600,
    profit: 4400,
    roas: 2.33,
    roi: 1.04,
    cpa: 42.00,
    purchases: 233,
    refundRate: 4.5,
    dailyTrend: [2, 2.2, 2.1, 2.3, 2.0, 1.9, 2.1],
  },
  {
    id: 'prod_3',
    name: 'Ebook Copywriting Master',
    slug: 'ebook-copy',
    status: 'paused',
    image: 'https://picsum.photos/id/24/200/200',
    spend: 850,
    revenueGross: 920,
    revenueNet: 800,
    profit: -50,
    roas: 1.08,
    roi: -0.05,
    cpa: 21.00,
    purchases: 43,
    refundRate: 1.2,
    dailyTrend: [1.2, 1.1, 1.0, 0.9, 0.8],
  },
];

export const MOCK_ALERTS: Alert[] = [
  {
    id: 'a1',
    title: 'Queda Crítica de ROAS',
    description: 'O ROAS do Ebook Copywriting Master caiu 20% vs ontem.',
    severity: 'high',
    timestamp: '2h atrás',
  },
  {
    id: 'a2',
    title: 'Alerta de CPA Alto',
    description: 'A campanha "CNV_Teste_Lookalike" excedeu o teto de CPA ($90).',
    severity: 'medium',
    timestamp: '5h atrás',
  },
  {
    id: 'a3',
    title: 'Oportunidade de Escala',
    description: 'Mentoria Freedom 2.0 tem ROAS estável > 3.0 por 5 dias.',
    severity: 'low',
    timestamp: '1d atrás',
  },
];