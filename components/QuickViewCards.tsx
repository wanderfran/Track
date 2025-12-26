import React from 'react';
import Card from './ui/Card';
import { Trophy, TrendingUp, MousePointerClick } from 'lucide-react';
import { TOP_CAMPAIGNS } from '../constants';

const QuickViewCards: React.FC = () => {
  const bestCampaign = TOP_CAMPAIGNS[0];

  return (
    <div className="flex flex-col gap-6">
      <Card className="bg-[#6C5DD3] text-white">
        <div className="flex items-center gap-3 mb-4">
           <div className="p-2 bg-white/20 rounded-xl">
             <Trophy size={20} className="text-white" />
           </div>
           <div>
             <h4 className="font-bold">Top Campanha</h4>
             <p className="text-xs text-white/70">Maior ROAS</p>
           </div>
        </div>
        <div className="mb-2">
           <p className="text-2xl font-bold">{bestCampaign.roas}x</p>
           <p className="text-sm opacity-90 truncate">{bestCampaign.name}</p>
        </div>
        <div className="w-full bg-black/20 rounded-full h-1.5 mt-2">
            <div className="bg-white h-full rounded-full w-[85%]"></div>
        </div>
      </Card>

      <Card>
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-bold text-gray-800">Impressões</h4>
          <MousePointerClick size={16} className="text-gray-400" />
        </div>
        <div className="flex items-end gap-2">
           <div className="w-3 bg-blue-100 h-10 rounded-t-sm"></div>
           <div className="w-3 bg-blue-200 h-16 rounded-t-sm"></div>
           <div className="w-3 bg-unity-500 h-24 rounded-t-sm"></div>
           <div className="w-3 bg-blue-200 h-12 rounded-t-sm"></div>
           <div className="w-3 bg-blue-100 h-8 rounded-t-sm"></div>
        </div>
        <p className="mt-4 text-2xl font-bold text-gray-800">24k</p>
        <p className="text-xs text-gray-400">Total de impressões esta semana</p>
      </Card>
    </div>
  );
};

export default QuickViewCards;