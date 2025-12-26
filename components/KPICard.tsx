import React from 'react';
import Card from './ui/Card';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

interface KPICardProps {
  title: string;
  value: string;
  trend: number;
  trendLabel?: string;
  data?: any[];
  chartColor?: string;
  isInverse?: boolean;
}

const KPICard: React.FC<KPICardProps> = ({ 
  title, 
  value, 
  trend, 
  data = [], 
  chartColor = "#6C5DD3" 
}) => {
  // Mock data for bars if empty
  const chartData = data.length ? data : [
    {v:40}, {v:30}, {v:60}, {v:50}, {v:80}, {v:65}, {v:75}
  ];

  return (
    <Card className="flex flex-col justify-between min-h-[180px] hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-2">
         <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${trend > 0 ? 'bg-green-400' : 'bg-red-400'}`}></div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{title}</span>
         </div>
         <span className="text-gray-300">...</span>
      </div>

      <div className="flex items-end justify-between mt-2">
         <div>
            <h3 className="text-3xl font-bold text-gray-800 tracking-tight">{value}</h3>
            <p className="text-xs text-gray-400 mt-2 font-medium">
              <span className={trend > 0 ? 'text-green-500' : 'text-red-500'}>
                {trend > 0 ? '+' : ''}{trend}%
              </span> vs mês anterior
            </p>
         </div>
         
         <div className="h-16 w-24">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={chartData} barGap={2}>
                 <Bar dataKey="v" radius={[4, 4, 4, 4]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === chartData.length - 1 ? chartColor : '#E4E8EF'} />
                    ))}
                 </Bar>
               </BarChart>
             </ResponsiveContainer>
         </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center">
         <button className="text-[10px] font-bold text-gray-400 hover:text-unity-500 transition-colors uppercase">Ver Relatório</button>
         <div className="text-[10px] text-gray-400">Últimos 7 Dias</div>
      </div>
    </Card>
  );
};

export default KPICard;