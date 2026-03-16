import React from 'react';
import { Layers, ChevronRight, Edit3, Trash2, ShieldCheck, Zap } from 'lucide-react';

interface RoutineStep {
  step_order: number;
  product_name: string;
  usage_role: string;
}

interface Combo {
  id: string;
  skin_code: 'OILY' | 'DRY' | 'NORMAL' | 'SENSITIVE' | 'COMBINATION';
  combo_name: string;
  steps: RoutineStep[];
}

interface Props {
  combos: Combo[];
}

const ComboProductTable: React.FC<Props> = ({ combos }) => {
  const getSkinBadgeColor = (code: string) => {
    const colors = {
      OILY: 'bg-orange-100 text-orange-600 border-orange-200',
      DRY: 'bg-blue-100 text-blue-600 border-blue-200',
      SENSITIVE: 'bg-red-100 text-red-600 border-red-200',
      COMBINATION: 'bg-purple-100 text-purple-600 border-purple-200',
      NORMAL: 'bg-green-100 text-green-600 border-green-200',
    };
    return colors[code as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="overflow-x-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <table className="w-full border-separate border-spacing-0">
        <thead>
          <tr className="bg-gray-50/50">
            {['Skin Type', 'Combo Info', 'Routine Steps Flow', 'Actions'].map((head, i) => (
              <th key={head} className={`${thStyle} ${i === 3 ? 'text-right' : 'text-left'}`}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {combos.map((combo) => (
            <tr key={combo.id} className="group hover:bg-indigo-50/30 transition-all border-b border-gray-100">
              <td className={tdStyle}>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black border ${getSkinBadgeColor(combo.skin_code)}`}>
                  {combo.skin_code}
                </span>
              </td>
              <td className={tdStyle}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-100">
                    <Zap size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">{combo.combo_name}</div>
                    <div className="text-[10px] text-gray-400 font-mono italic uppercase">ID: {combo.id.substring(0, 8)}</div>
                  </div>
                </div>
              </td>
              <td className={tdStyle}>
                <div className="flex items-center gap-2">
                  {combo.steps.sort((a,b) => a.step_order - b.step_order).map((s, idx) => (
                    <React.Fragment key={idx}>
                      <div className="relative group/step">
                        <div className="px-3 py-2 rounded-xl bg-white border border-gray-100 shadow-sm transition-all hover:border-indigo-400 cursor-default">
                          <div className="text-[8px] font-black text-indigo-500 uppercase leading-none mb-1">Step {s.step_order}</div>
                          <div className="text-[11px] font-bold text-gray-700 truncate max-w-[100px]">{s.product_name}</div>
                        </div>
                        {/* Hover Tooltip cho Role */}
                        <div className="absolute hidden group-hover/step:block bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-[9px] rounded whitespace-nowrap z-10 font-bold">
                          {s.usage_role}
                        </div>
                      </div>
                      {idx < combo.steps.length - 1 && <ChevronRight size={14} className="text-gray-300" />}
                    </React.Fragment>
                  ))}
                </div>
              </td>
              <td className={`${tdStyle} text-right`}>
                <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className={actionBtnStyle}><Edit3 size={14} /></button>
                  <button className={`${actionBtnStyle} hover:text-red-500`}><Trash2 size={14} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = "px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100";
const tdStyle = "px-6 py-4 border-b border-gray-50";
const actionBtnStyle = "p-2 hover:bg-white rounded-lg text-gray-400 hover:text-indigo-600 transition-all border border-transparent hover:border-gray-200";

export default ComboProductTable;