import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { TimeRange } from '../types';

interface TopbarProps {
  timeRange: TimeRange;
  onTimeRangeChange: (range: TimeRange) => void;
}

const Topbar: React.FC<TopbarProps> = ({ timeRange, onTimeRangeChange }) => {
  return (
    <header className="py-6 px-8 flex flex-col md:flex-row md:items-center justify-end gap-4 sticky top-0 z-40 bg-[#F7F8FC]/90 backdrop-blur-sm">
      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="w-64 pl-12 pr-4 py-3 bg-white rounded-2xl text-sm font-medium shadow-sm shadow-gray-200/50 focus:outline-none focus:ring-2 focus:ring-unity-500/20 text-gray-600 placeholder-gray-400"
          />
        </div>
        
        <button className="relative w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shadow-gray-200/50 hover:bg-gray-50 text-gray-500 transition-colors">
          <Bell size={22} />
          <span className="absolute top-3 right-3.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-2 cursor-pointer">
          <img 
            src="https://i.pravatar.cc/150?img=68" 
            alt="User" 
            className="w-12 h-12 rounded-2xl object-cover shadow-sm" 
          />
          <div className="hidden sm:block">
             <p className="text-sm font-bold text-gray-800">Tam Tran</p>
             <p className="text-xs text-gray-400">Conta Gratuita</p>
          </div>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;