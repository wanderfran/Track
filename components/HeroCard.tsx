import React from 'react';
import Card from './ui/Card';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { MOCK_CHART_DATA } from '../constants';

const HeroCard: React.FC = () => {
  const totalRevenue = 54200;

  return (
    <div className="col-span-full xl:col-span-3 min-h-[300px] relative overflow-hidden rounded-[40px] shadow-xl shadow-unity-500/20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-unity-500 via-unity-600 to-[#4A3BB5]"></div>
      
      {/* 3D Decorative Elements (CSS approximation) */}
      <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-20px] left-[10%] w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>
      
      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Seus Produtos</h2>
            <p className="text-unity-100 text-sm leading-relaxed opacity-90">
              Crie seu Dashboard de Produtos em Minutos. <br/>
              Acompanhe seus ganhos e métricas de performance.
            </p>
            <button className="mt-6 bg-white text-unity-600 px-6 py-3 rounded-2xl font-bold text-sm shadow-lg hover:bg-gray-50 transition-colors">
              Ver configurações
            </button>
          </div>
          
          {/* Mocking a 3D floaty element from reference */}
          <div className="hidden sm:block">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink-400 to-unity-300 shadow-2xl shadow-black/20 animate-pulse"></div>
          </div>
        </div>

        {/* Mini chart overlay at bottom */}
        <div className="mt-8">
           <div className="flex items-end justify-between text-white mb-2">
              <div>
                <p className="text-xs opacity-70 mb-1">Receita Total</p>
                <p className="text-2xl font-bold">R$ {totalRevenue.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-medium bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                 <span>Diário</span>
                 <span className="opacity-50">Semanal</span>
                 <span className="opacity-50">Mensal</span>
              </div>
           </div>
           
           <div className="h-16 w-full opacity-60">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={MOCK_CHART_DATA}>
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#ffffff" 
                    strokeWidth={3} 
                    dot={false} 
                  />
                </LineChart>
              </ResponsiveContainer>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;