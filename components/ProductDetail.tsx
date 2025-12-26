import React from 'react';
import { Product } from '../types';
import Card from './ui/Card';
import { ArrowLeft, Share2, Download, AlertTriangle } from 'lucide-react';
import KPICard from './KPICard';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  // Mock daily data for this specific product chart
  const data = Array.from({ length: 7 }).map((_, i) => ({
    name: `Dia ${i + 1}`,
    Investimento: Math.floor(product.spend / 7 + (Math.random() * 200 - 100)),
    Receita: Math.floor(product.revenueNet / 7 + (Math.random() * 500 - 200)),
  }));

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-600">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="bg-gray-200 text-gray-700 px-2 py-0.5 rounded text-xs font-semibold uppercase">ID do Produto: {product.id}</span>
              <span>•</span>
              <span>{product.slug}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
             <Share2 size={16} /> Compartilhar
           </button>
           <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm">
             <Download size={16} /> Exportar CSV
           </button>
        </div>
      </div>

      {/* Main KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         <KPICard title="Receita Líquida" value={`R$ ${product.revenueNet.toLocaleString()}`} trend={12} chartColor="#059669" />
         <KPICard title="Investimento Total" value={`R$ ${product.spend.toLocaleString()}`} trend={-5} chartColor="#dc2626" isInverse />
         <KPICard title="Lucro" value={`R$ ${product.profit.toLocaleString()}`} trend={8.5} chartColor="#059669" />
         <KPICard title="ROAS" value={`${product.roas}x`} trend={2.1} chartColor="#4f46e5" />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Chart Section */}
        <Card className="lg:col-span-2 min-h-[400px]">
          <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-gray-800">Performance Financeira</h3>
             <select className="text-xs bg-gray-50 border border-gray-200 rounded px-2 py-1">
                <option>Últimos 7 Dias</option>
                <option>Últimos 30 Dias</option>
             </select>
          </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
               <BarChart data={data} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} dy={10} />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                  <Bar name="Receita" dataKey="Receita" fill="#059669" radius={[4, 4, 0, 0]} maxBarSize={40} />
                  <Bar name="Investimento" dataKey="Investimento" fill="#fca5a5" radius={[4, 4, 0, 0]} maxBarSize={40} />
               </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Side Stats */}
        <div className="space-y-6">
           {/* Refund Alert */}
           <Card className={`border-l-4 ${product.refundRate > 2 ? 'border-l-amber-400' : 'border-l-emerald-400'}`}>
              <div className="flex items-start gap-3">
                 <div className={`p-2 rounded-lg ${product.refundRate > 2 ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>
                    <AlertTriangle size={20} />
                 </div>
                 <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">Taxa de Reembolso</p>
                    <p className="text-2xl font-bold text-gray-900">{product.refundRate}%</p>
                    <p className="text-xs text-gray-400 mt-1">Benchmark: &lt; 2.0%</p>
                 </div>
              </div>
           </Card>

           {/* Attribution Breakdown */}
           <Card>
              <h4 className="font-bold text-gray-800 mb-4 text-sm">Origem de Tráfego (UTM)</h4>
              <div className="space-y-4">
                 <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Facebook / IG</span>
                    <span className="font-semibold text-gray-900">85%</span>
                 </div>
                 <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-500 rounded-full"></div> Direto</span>
                    <span className="font-semibold text-gray-900">10%</span>
                 </div>
                 <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2"><div className="w-2 h-2 bg-gray-400 rounded-full"></div> Email</span>
                    <span className="font-semibold text-gray-900">5%</span>
                 </div>
                 <div className="w-full bg-gray-100 rounded-full h-2 mt-2 flex overflow-hidden">
                    <div className="bg-blue-500 h-full w-[85%]"></div>
                    <div className="bg-pink-500 h-full w-[10%]"></div>
                    <div className="bg-gray-400 h-full w-[5%]"></div>
                 </div>
              </div>
           </Card>

           <Card noPadding>
              <div className="p-4 border-b border-gray-100">
                 <h4 className="font-bold text-gray-800 text-sm">Resumo do Funil</h4>
              </div>
              <div className="p-4 space-y-4">
                 <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Impressões</span>
                    <span className="text-xs font-bold text-gray-900">450k</span>
                 </div>
                 <div className="flex justify-center"><div className="h-4 w-0.5 bg-gray-200"></div></div>
                 <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Cliques (CTR 1.2%)</span>
                    <span className="text-xs font-bold text-gray-900">5,400</span>
                 </div>
                 <div className="flex justify-center"><div className="h-4 w-0.5 bg-gray-200"></div></div>
                 <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Compras (CR 4.3%)</span>
                    <span className="text-xs font-bold text-gray-900">{product.purchases}</span>
                 </div>
              </div>
           </Card>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;