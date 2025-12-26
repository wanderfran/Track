import React from 'react';
import Card from './ui/Card';
import { MOCK_ADSETS } from '../constants';
import { Filter, MoreHorizontal, ArrowUpDown, SlidersHorizontal } from 'lucide-react';

const SetsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Conjuntos de Anúncios</h1>
          <p className="text-sm text-gray-500">Gerencie e analise a performance por público alvo.</p>
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-50">
            <Filter size={18} />
            Filtros
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-unity-500 rounded-xl text-sm font-semibold text-white shadow-lg shadow-unity-500/30 hover:bg-unity-600">
            <SlidersHorizontal size={18} />
            Colunas
          </button>
        </div>
      </div>

      <Card className="overflow-hidden" noPadding>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider min-w-[200px]">Nome do Conjunto</th>
                <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Orçamento</th>
                <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider text-right cursor-pointer group hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-end gap-1">
                    Investimento <ArrowUpDown size={12} className="opacity-0 group-hover:opacity-100" />
                  </div>
                </th>
                <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider text-right cursor-pointer group hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-end gap-1">
                    ROAS <ArrowUpDown size={12} className="opacity-0 group-hover:opacity-100" />
                  </div>
                </th>
                <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">CPA</th>
                <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Compras</th>
                <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">CTR</th>
                <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {MOCK_ADSETS.map((set) => (
                <tr key={set.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="py-4 px-6">
                    <div className={`w-2.5 h-2.5 rounded-full ${set.status === 'active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' : 'bg-gray-300'}`}></div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="font-semibold text-gray-800 text-sm">{set.name}</p>
                    <p className="text-[10px] text-gray-400 uppercase mt-0.5 tracking-wide">{set.campaignName}</p>
                  </td>
                  <td className="py-4 px-6 text-right font-medium text-gray-600 text-sm">
                    R$ {set.dailyBudget.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-right font-medium text-gray-600 text-sm">
                    R$ {set.spend.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${
                      set.roas >= 2.5 ? 'bg-green-100 text-green-700' :
                      set.roas >= 1.5 ? 'bg-yellow-50 text-yellow-700' :
                      'bg-red-50 text-red-700'
                    }`}>
                      {set.roas.toFixed(2)}x
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-medium text-gray-600 text-sm">
                    R$ {set.cpa.toFixed(2)}
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-gray-800 text-sm">
                    {set.purchases}
                  </td>
                  <td className="py-4 px-6 text-right text-sm text-gray-600">
                    {set.ctr.toFixed(2)}%
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="p-1.5 text-gray-400 hover:text-unity-500 hover:bg-unity-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Footer Pagination Mock */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50/30">
           <span className="text-xs text-gray-500">Mostrando {MOCK_ADSETS.length} resultados</span>
           <div className="flex gap-2">
              <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:bg-gray-100 rounded-lg disabled:opacity-50" disabled>Anterior</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:bg-gray-100 rounded-lg">Próximo</button>
           </div>
        </div>
      </Card>
    </div>
  );
};

export default SetsView;