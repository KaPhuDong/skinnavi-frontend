import React from 'react';
import { ExternalLink, Edit3, Trash2, Image as ImageIcon } from 'lucide-react';

interface Product {
  id: string;
  skin_type: 'OILY' | 'DRY' | 'NORMAL' | 'COMBINATION' | 'SENSITIVE';
  type: 'Cleanser' | 'Serum' | 'Sunscreen' | 'Moisturizer' | 'Micellar Water';
  name: string;
  image_url: string;
  display_price: number;
  affiliate_url: string;
}

const SingleProductTable: React.FC<{ products: Product[]; onEdit: any }> = ({ products, onEdit }) => {
  
  // 1. Logic hiển thị màu sắc đúng như ảnh bạn gửi cho Skin Type
  const getSkinTypeStyle = (type: string) => {
    const styles: Record<string, { bg: string; text: string; border: string }> = {
      'OILY': { bg: '#FFF1E7', text: '#E65100', border: '#FFDCC3' },       // Cam (giống ảnh)
      'DRY': { bg: '#E1EFFF', text: '#1A56DB', border: '#C3DFFF' },        // Xanh dương (giống ảnh)
      'NORMAL': { bg: '#EBFBEE', text: '#2F9E44', border: '#D3F9D8' },     // Xanh lá
      'COMBINATION': { bg: '#F3F0FF', text: '#6741D9', border: '#E5DBFF' },// Tím
      'SENSITIVE': { bg: '#FFF5F5', text: '#E03131', border: '#FFE3E3' },  // Đỏ
    };
    return styles[type] || { bg: '#F8F9FA', text: '#495057', border: '#DEE2E6' };
  };

  // 2. Logic màu sắc cho Category (Type) để đồng bộ chuyên nghiệp
  const getTypeConfig = (type: string) => {
    const configs: Record<string, { bg: string; text: string }> = {
      'Cleanser': { bg: '#F0F9FF', text: '#0369A1' },
      'Serum': { bg: '#FAF5FF', text: '#7E22CE' },
      'Sunscreen': { bg: '#FEFCE8', text: '#854D0E' },
      'Moisturizer': { bg: '#F0FDF4', text: '#166534' },
      'Micellar Water': { bg: '#FFF1F2', text: '#9D174D' },
    };
    return configs[type] || { bg: '#F9FAFB', text: '#374151' };
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <thead>
          <tr className="border-b border-gray-100">
            {['#', 'Skin Type', 'Category', 'Product Details', 'Price', 'Source', 'Actions'].map((h, i) => (
              <th key={h} className={`px-6 py-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest ${i === 6 ? 'text-right' : 'text-left'}`}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {products.map((p, i) => {
            const skinStyle = getSkinTypeStyle(p.skin_type);
            const catStyle = getTypeConfig(p.type);
            return (
              <tr key={p.id} className="group hover:bg-[#FBFBFF] transition-all duration-200">
                <td className="px-6 py-4 text-xs font-medium text-gray-400">{i + 1}</td>
                
                {/* CỘT SKIN TYPE ĐÃ SỬA GIỐNG ẢNH */}
                <td className="px-6 py-4">
                  <div 
                    style={{ 
                      backgroundColor: skinStyle.bg, 
                      color: skinStyle.text,
                      borderColor: skinStyle.border
                    }} 
                    className="inline-flex items-center justify-center px-4 py-1.5 rounded-2xl border text-[11px] font-black tracking-wider uppercase shadow-sm"
                  >
                    {p.skin_type}
                  </div>
                </td>

                <td className="px-6 py-4">
                  <span 
                    style={{ color: catStyle.text, backgroundColor: catStyle.bg }}
                    className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase border border-black/5"
                  >
                    {p.type}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden flex-shrink-0 group-hover:border-blue-200 transition-colors">
                      {p.image_url ? (
                        <img src={p.image_url} alt={p.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-300">
                          <ImageIcon size={18} />
                        </div>
                      )}
                    </div>
                    <div className="max-w-[240px]">
                      <div className="text-[13px] font-bold text-gray-800 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {p.name}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <span className="text-sm font-black text-gray-900">
                    {p.display_price.toLocaleString()} <small className="text-[10px] text-gray-400">VND</small>
                  </span>
                </td>

                <td className="px-6 py-4 text-center">
                  <a href={p.affiliate_url} target="_blank" rel="noreferrer" className="inline-block p-2 rounded-lg text-blue-500 hover:bg-blue-50 transition-colors">
                    <ExternalLink size={16} />
                  </a>
                </td>

                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => onEdit(p)} className={actionBtnStyle}>
                      <Edit3 size={14} className="m-auto" />
                    </button>
                    <button className={`${actionBtnStyle} hover:text-red-500 hover:border-red-100`}>
                      <Trash2 size={14} className="m-auto" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const actionBtnStyle = "w-8 h-8 rounded-lg bg-white border border-gray-100 text-gray-400 shadow-sm transition-all active:scale-90 flex items-center justify-center";

export default SingleProductTable;