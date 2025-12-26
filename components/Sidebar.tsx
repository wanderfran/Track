import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Megaphone, 
  Layers, 
  FileBarChart, 
  Settings,
  LogOut,
  PieChart
} from 'lucide-react';

interface SidebarProps {
  activeView: string;
  onChangeView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onChangeView }) => {
  const adminTools = [
    { id: 'overview', icon: LayoutDashboard, label: 'Visão Geral' },
    { id: 'products', icon: ShoppingBag, label: 'Produtos' },
    { id: 'campaigns', icon: Megaphone, label: 'Campanhas' },
    { id: 'sets', icon: Layers, label: 'Conjuntos' },
    { id: 'reports', icon: FileBarChart, label: 'Financeiro' },
    { id: 'settings', icon: Settings, label: 'Configurações' },
  ];

  const renderMenuItem = (item: any) => {
    const isActive = activeView === item.id || (activeView === 'product_detail' && item.id === 'products');
    return (
      <button
        key={item.id}
        onClick={() => onChangeView(item.id)}
        className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200 mb-1 ${
          isActive 
            ? 'bg-unity-500 text-white shadow-lg shadow-unity-500/30 font-semibold' 
            : 'text-gray-500 hover:text-unity-500 hover:bg-gray-50 font-medium'
        }`}
      >
        <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
        <span className="text-sm">{item.label}</span>
      </button>
    );
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] bg-white flex flex-col py-8 px-6 z-50 overflow-y-auto hidden md:flex border-r border-gray-100">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="w-10 h-10 bg-unity-500 rounded-xl flex items-center justify-center shadow-lg shadow-unity-500/30">
          <PieChart className="text-white" size={24} strokeWidth={2.5} />
        </div>
        <span className="text-2xl font-bold text-gray-800 tracking-tight">Track.</span>
      </div>
      
      <div className="flex-1 space-y-8">
        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-4">Ferramentas</h3>
          <nav>
            {adminTools.map(renderMenuItem)}
          </nav>
        </div>
      </div>

      <div className="mt-auto px-2 w-full">
         <button className="flex items-center gap-4 px-4 py-3.5 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors w-full rounded-2xl font-medium">
            <LogOut size={22} />
            <span className="text-sm">Sair</span>
         </button>
      </div>
    </aside>
  );
};

export default Sidebar;