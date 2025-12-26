import React from 'react';
import HeroCard from './HeroCard';
import ProductList from './ProductList';
import KPICard from './KPICard';
import QuickViewCards from './QuickViewCards';
import AlertsList from './AlertsList';
import { Product } from '../types';

interface DashboardProps {
  onProductClick: (product: Product) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onProductClick }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      {/* Main Content - Left 2 Columns */}
      <div className="xl:col-span-2 flex flex-col gap-8">
        <HeroCard />
        
        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <KPICard 
            title="Investimento" 
            value="R$ 18,450" 
            trend={12.5} 
            isInverse={true}
            chartColor="#FF754C" // Orange/Red from ref
          />
           <KPICard 
            title="Vendas" 
            value="327" 
            trend={24.2} 
            chartColor="#6C5DD3" // Unity Purple
          />
        </div>

        <ProductList onProductClick={onProductClick} />
      </div>

      {/* Right Sidebar - 1 Column */}
      <div className="flex flex-col gap-8">
        {/* Additional KPIs */}
        <div className="grid grid-cols-1 gap-6">
          <KPICard 
            title="ROAS" 
            value="2.93x" 
            trend={-4.5} 
            chartColor="#3F8CFF" // Blue from ref
          />
        </div>

        <AlertsList />
        <QuickViewCards />
      </div>
    </div>
  );
};

export default Dashboard;