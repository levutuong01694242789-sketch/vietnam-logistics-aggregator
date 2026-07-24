import React from 'react';
import { Search, Filter, Snowflake, Sun, ShieldCheck, MapPin, Truck, CheckCircle2, RotateCcw } from 'lucide-react';
import { LC_FOODS_PRODUCT_GROUPS, DISTRIBUTION_CHANNELS } from '../data/lcFoodsCategories';

export default function SmartFilterBar({ filters, setFilters, onResetFilters }) {
  
  const handleProductGroupSelect = (groupId) => {
    const group = LC_FOODS_PRODUCT_GROUPS.find(g => g.id === groupId);
    if (!group) return;
    setFilters(prev => ({
      ...prev,
      selectedProductGroup: prev.selectedProductGroup === groupId ? '' : groupId,
      tempCategory: group.tempCategory !== 'all' ? group.tempCategory : prev.tempCategory
    }));
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
      
      {/* Top Header & Search Input */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-display font-bold text-white flex items-center space-x-2">
            <Filter className="w-5 h-5 text-rose-500" />
            <span>Bộ Lọc Nhà Vận Chuyển Theo Đặc Thù LC FOODS</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Lọc theo dải nhiệt độ hàng hóa, kinh nghiệm giao kho siêu thị (MT) và độ phủ tuyến tỉnh (GT).
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="relative flex-1 sm:w-80">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
              placeholder="Tìm nhà xe, tỉnh thành, dịch vụ..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
            />
          </div>
          <button
            onClick={onResetFilters}
            className="flex items-center space-x-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Đặt lại</span>
          </button>
        </div>
      </div>

      {/* Quick Filter 1: LC Foods Specific Product Line */}
      <div>
        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
          1. Chọn Nhóm Hàng LC FOODS Cần Vận Chuyển:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {LC_FOODS_PRODUCT_GROUPS.map((group) => {
            const isSelected = filters.selectedProductGroup === group.id;
            return (
              <button
                key={group.id}
                onClick={() => handleProductGroupSelect(group.id)}
                className={`flex flex-col items-start p-3 rounded-2xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-rose-500/10 border-rose-500 text-white shadow-lg shadow-rose-950/40 ring-2 ring-rose-500/50'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <span className="text-2xl mb-1.5">{group.icon}</span>
                <span className="text-xs font-bold line-clamp-1">{group.name}</span>
                <span className="text-[10px] font-semibold text-rose-400 mt-1">{group.tempRange}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter 2 & 3: Temperature Range & Channel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        
        {/* Temp Category */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
            2. Chuẩn Nhiệt Độ Yêu Cầu:
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Tất cả nhiệt độ', icon: null },
              { id: 'frozen', label: 'Đông Âm (-18°C ~ -25°C)', icon: Snowflake, color: 'text-sky-400' },
              { id: 'chilled', label: 'Hàng Mát (0°C ~ 5°C)', icon: Snowflake, color: 'text-teal-400' },
              { id: 'ambient', label: 'Hàng Khô (Nhiệt độ phòng)', icon: Sun, color: 'text-amber-400' },
            ].map((temp) => {
              const isSelected = filters.tempCategory === temp.id;
              const Icon = temp.icon;
              return (
                <button
                  key={temp.id}
                  onClick={() => setFilters(prev => ({ ...prev, tempCategory: temp.id }))}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition ${
                    isSelected
                      ? 'bg-slate-800 border-rose-500 text-rose-400'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {Icon && <Icon className={`w-3.5 h-3.5 ${temp.color}`} />}
                  <span>{temp.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Channel Filter */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
            3. Kênh Phân Phối (Delivery Channel):
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Tất cả kênh' },
              { id: 'MT', label: 'Kênh MT (Siêu Thị DC)' },
              { id: 'GT', label: 'Kênh GT (Đại lý/Chợ)' },
              { id: 'EX', label: 'Xuất Khẩu / Cont RF' },
            ].map((ch) => {
              const isSelected = filters.channel === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => setFilters(prev => ({ ...prev, channel: ch.id }))}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold border transition ${
                    isSelected
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {ch.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Load Type & Special Requirement */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
            4. Hình Thức & Đội Xe:
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Tất cả loại hình' },
              { id: 'LTL', label: 'Gửi Ghép (LTL)' },
              { id: 'FTL', label: 'Nguyên Xe (FTL)' },
            ].map((load) => {
              const isSelected = filters.loadType === load.id;
              return (
                <button
                  key={load.id}
                  onClick={() => setFilters(prev => ({ ...prev, loadType: load.id }))}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold border transition ${
                    isSelected
                      ? 'bg-slate-800 border-amber-500 text-amber-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {load.label}
                </button>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
