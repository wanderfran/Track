import React from 'react';
import { Bell } from 'lucide-react';
import Card from './ui/Card';
import { MOCK_ALERTS } from '../constants';

const AlertsList: React.FC = () => {
  return (
    <Card className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-gray-800">Notificações Recentes</h3>
        <button className="p-2 hover:bg-gray-50 rounded-xl text-gray-400">
           <Bell size={18} />
        </button>
      </div>
      
      <div className="space-y-6">
        {MOCK_ALERTS.map((alert, index) => (
          <div key={alert.id} className="flex gap-4 group cursor-pointer">
            <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${
               index === 0 ? 'bg-blue-100 text-blue-500' : 
               index === 1 ? 'bg-orange-100 text-orange-500' : 'bg-green-100 text-green-500'
            }`}>
               <div className="w-3 h-3 rounded-full bg-current"></div>
            </div>
            
            <div className="flex-1">
               <div className="flex justify-between items-start">
                  <h4 className="font-bold text-sm text-gray-800 group-hover:text-unity-500 transition-colors">
                    {alert.title}
                  </h4>
                  <span className="text-[10px] text-gray-400 font-medium">{alert.timestamp}</span>
               </div>
               <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                 {alert.description}
               </p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 py-3 rounded-xl bg-gray-50 text-xs font-bold text-gray-500 hover:bg-unity-50 hover:text-unity-500 transition-colors">
        Ver todas as atividades
      </button>
    </Card>
  );
};

export default AlertsList;