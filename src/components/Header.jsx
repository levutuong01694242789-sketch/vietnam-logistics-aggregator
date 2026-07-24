import React from 'react';
import { Truck, Snowflake, ShieldCheck, ShoppingBag, MapPin, Calculator, Activity, FileText } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, selectedCarrierCount, onOpenComparison }) {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('carriers')}>
            <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-500 p-0.5 shadow-lg shadow-rose-950/50">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Snowflake className="w-6 h-6 text-rose-500 animate-pulse" />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500 border-2 border-slate-950"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                  VietLogis <span className="text-rose-500">Food</span>
                </span>
                <span className="px-2 py-0.5 text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 rounded-full">
                  LC FOODS Hub
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                Sàn so sánh & Vận tải Thực Phẩm Khô & Đông Lạnh toàn quốc
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800/80">
            <button
              onClick={() => setActiveTab('carriers')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'carriers'
                  ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-md shadow-rose-950/50'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>Tìm & So Sánh Nhà Xe</span>
            </button>

            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'calculator'
                  ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-md shadow-rose-950/50'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Tính Cước Vận Chuyển</span>
            </button>

            <button
              onClick={() => setActiveTab('supermarkets')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'supermarkets'
                  ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-md shadow-rose-950/50'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Quy Chuẩn Kho DC Siêu Thị</span>
            </button>

            <button
              onClick={() => setActiveTab('iot')}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'iot'
                  ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-md shadow-rose-950/50'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Activity className="w-4 h-4 text-sky-400 animate-pulse" />
              <span>Giám Sát Nhiệt IoT</span>
            </button>
          </nav>

          {/* Quick Actions & Comparison Counter */}
          <div className="flex items-center space-x-3">
            {selectedCarrierCount > 0 && (
              <button
                onClick={onOpenComparison}
                className="relative flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all duration-200 transform hover:scale-105"
              >
                <span>So Sánh ({selectedCarrierCount})</span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
                </span>
              </button>
            )}

            <div className="hidden sm:flex items-center space-x-2 text-xs font-semibold px-3 py-2 rounded-xl bg-slate-800/80 text-slate-300 border border-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>LC FOODS Verified</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
