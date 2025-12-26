import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import ProductDetail from './components/ProductDetail';
import { TimeRange, Product } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('overview');
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setActiveView('product_detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDashboard = () => {
    setSelectedProduct(null);
    setActiveView('overview');
  };

  const handleViewChange = (view: string) => {
    if (view === 'products' && selectedProduct) {
       setSelectedProduct(null);
    }
    setActiveView(view);
  };

  return (
    <div className="flex min-h-screen font-sans">
      <Sidebar activeView={activeView} onChangeView={handleViewChange} />
      
      {/* Adjusted margin-left to match Sidebar width (280px) */}
      <div className="flex-1 md:ml-[280px] flex flex-col min-w-0 bg-[#F7F8FC]">
        <Topbar timeRange={timeRange} onTimeRangeChange={setTimeRange} />
        
        <main className="flex-1 p-8 max-w-[1600px] w-full mx-auto">
          {activeView === 'overview' && (
            <Dashboard onProductClick={handleProductClick} />
          )}

          {activeView === 'product_detail' && selectedProduct && (
            <ProductDetail product={selectedProduct} onBack={handleBackToDashboard} />
          )}

          {activeView !== 'overview' && activeView !== 'product_detail' && (
            <div className="flex flex-col items-center justify-center h-[60vh] text-gray-400">
               <div className="w-20 h-20 bg-white rounded-[30px] shadow-sm mb-6 flex items-center justify-center">
                  <span className="text-4xl">🚧</span>
               </div>
               <p className="text-xl font-bold text-gray-700">Tela "{activeView}" em Construção</p>
               <p className="text-sm mt-2">Implementar na Fase 2</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;