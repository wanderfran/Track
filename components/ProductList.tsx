import React from 'react';
import Card from './ui/Card';
import { Product } from '../types';
import { MOCK_PRODUCTS } from '../constants';
import { ArrowRight, ShoppingBag } from 'lucide-react';

interface ProductListProps {
  onProductClick: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ onProductClick }) => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">Ganhos por Item</h3>
        <button className="text-xs font-bold text-unity-500 bg-unity-50 px-4 py-2 rounded-xl hover:bg-unity-100 transition-colors">
          Ver Tudo
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {MOCK_PRODUCTS.map((product, index) => {
          const isHealthy = product.roas > 2.0;

          return (
            <div 
              key={product.id} 
              onClick={() => onProductClick(product)}
              className="bg-white rounded-[24px] p-4 flex flex-col md:flex-row items-center gap-6 shadow-sm shadow-gray-100 hover:shadow-md hover:scale-[1.01] transition-all cursor-pointer group"
            >
                {/* Icon/Image Box */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                  index % 2 === 0 ? 'bg-blue-50' : 'bg-pink-50'
                }`}>
                  <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded-lg mix-blend-multiply" />
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                   <h4 className="font-bold text-gray-800 text-sm md:text-base">{product.name}</h4>
                   <p className="text-xs text-gray-400 mt-1">{product.slug}</p>
                </div>

                {/* Metrics */}
                <div className="flex gap-8 text-center md:text-right">
                   <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Lucro</p>
                      <p className="font-bold text-gray-800">R$ {product.profit.toLocaleString()}</p>
                   </div>
                   <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">ROAS</p>
                      <p className={`font-bold ${isHealthy ? 'text-green-500' : 'text-orange-500'}`}>
                        {product.roas.toFixed(2)}x
                      </p>
                   </div>
                </div>

                {/* Button */}
                <div className="hidden md:block pr-2">
                   <button className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center group-hover:bg-unity-500 group-hover:text-white transition-all">
                      <ArrowRight size={18} />
                   </button>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;