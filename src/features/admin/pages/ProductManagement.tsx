import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import SingleProductTable from '../components/SingleProductTable';
import ComboProductTable from '../components/ComboProductTable';
import { Package, Layers, Plus, Search, Filter, Database } from 'lucide-react';

const ProductManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'single' | 'combo'>('single');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // MOCK DATA phản ánh đúng cấu trúc 3 ảnh bạn gửi
  const MOCK_PRODUCTS = [
    { id: '00fa59', name: 'Nano THC Oil-Control Cleanser', usage_role: 'Cleanser', display_price: 123000, is_active: true, affiliate_url: 'https://shopee.vn/...', image_url: '' },
    { id: '062ada', name: 'ICSEA Australian Tea Tree Cleanser', usage_role: 'Cleanser', display_price: 159000, is_active: true, affiliate_url: 'https://shopee.vn/...', image_url: '' },
    { id: '343dbd', name: 'OLAY LUMINOUS Moisturizer', usage_role: 'Moisturizer', display_price: 159000, is_active: true, affiliate_url: 'https://shopee.vn/...', image_url: '' },
  ];

  const MOCK_COMBOS = [
    {
      id: 'CB-OILY-001',
      skin_code: 'OILY' as const,
      combo_name: 'Anti-Acne Essential Kit',
      steps: [
        { step_order: 1, product_name: 'Nano THC Cleanser', usage_role: 'Cleanser' },
        { step_order: 3, product_name: 'ICSEA Tea Tree Toner', usage_role: 'Toner' },
        { step_order: 5, product_name: 'OLAY Luminous', usage_role: 'Moisturizer' },
      ]
    },
    {
      id: 'CB-DRY-002',
      skin_code: 'DRY' as const,
      combo_name: 'Hydrating Glow Routine',
      steps: [
        { step_order: 1, product_name: 'Cocoon Cleanser', usage_role: 'Cleanser' },
        { step_order: 2, product_name: 'Bee Venom Essence', usage_role: 'Serum' },
      ]
    }
  ];

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="flex-1 md:ml-[220px] flex flex-col min-h-screen">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        <div className="p-6 max-w-[1600px] mx-auto w-full">
          {/* Header & Tabs */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-1">
                <Database size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Airtable Integrated</span>
              </div>
              <h1 className="text-2xl font-black text-gray-900 tracking-tight">Product & Routine Lab</h1>
            </div>
            
            <div className="flex bg-white p-1 rounded-2xl border border-gray-100 shadow-sm">
              <button 
                onClick={() => setActiveTab('single')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black transition-all ${activeTab === 'single' ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Package size={16} /> Affiliate Products
              </button>
              <button 
                onClick={() => setActiveTab('combo')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black transition-all ${activeTab === 'combo' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Layers size={16} /> Routine Combos
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
             <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input 
                   type="text" 
                   placeholder={`Search ${activeTab === 'single' ? 'affiliate products' : 'routine combos'}...`}
                   className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl text-sm focus:ring-4 focus:ring-blue-500/5 transition-all outline-none"
                />
             </div>
             <div className="flex gap-2">
                <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-100 rounded-2xl text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
                  <Filter size={16} /> Filter
                </button>
                <button className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-2xl text-xs font-black flex items-center gap-2 transition-all active:scale-95 shadow-xl shadow-gray-200">
                  <Plus size={18} /> New Record
                </button>
             </div>
          </div>

          {/* Main Table Container */}
          <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden min-h-[600px]">
            {activeTab === 'single' ? (
              <SingleProductTable products={MOCK_PRODUCTS} onEdit={(p) => console.log(p)} />
            ) : (
              <ComboProductTable combos={MOCK_COMBOS} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductManagement;