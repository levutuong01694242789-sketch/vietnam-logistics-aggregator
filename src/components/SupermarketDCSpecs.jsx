import React, { useState } from 'react';
import { ShoppingBag, Snowflake, Clock, AlertTriangle, CheckCircle2, ShieldAlert, FileText, ChevronRight } from 'lucide-react';
import { SUPERMARKET_DCS } from '../data/supermarketDCs';

export default function SupermarketDCSpecs() {
  const [selectedDcId, setSelectedDcId] = useState(SUPERMARKET_DCS[0].id);
  const activeDc = SUPERMARKET_DCS.find(dc => dc.id === selectedDcId) || SUPERMARKET_DCS[0];

  return (
    <div className="space-y-8">
      
      {/* Title */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/30">
            <ShoppingBag className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white">
              Cẩm Nang Quy Chuẩn Giao Kho DC Siêu Thị Cho Hàng LC FOODS
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Quy định nhiệt độ giao hàng, tiêu chuẩn Pallet và khung giờ nhận hàng tại các Tổng kho WinMart, Co.op, GO!, Bách Hóa Xanh.
            </p>
          </div>
        </div>

        {/* Supermarket Tabs */}
        <div className="flex flex-wrap gap-3 mt-8 border-b border-slate-800 pb-4">
          {SUPERMARKET_DCS.map(dc => {
            const isSelected = selectedDcId === dc.id;
            return (
              <button
                key={dc.id}
                onClick={() => setSelectedDcId(dc.id)}
                className={`px-5 py-3 rounded-2xl font-bold text-xs transition-all duration-200 flex items-center space-x-2 border ${
                  isSelected
                    ? 'bg-rose-500/20 border-rose-500 text-rose-300 shadow-lg shadow-rose-950/40 ring-1 ring-rose-500/50'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{dc.chain}</span>
              </button>
            );
          })}
        </div>

        {/* Selected DC Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          
          {/* Main Specs */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Header info */}
            <div className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Hệ Thống Tổng Kho:</span>
                <span className="px-3 py-1 text-xs font-extrabold bg-slate-800 text-slate-300 rounded-full">
                  Khu vực: {activeDc.region}
                </span>
              </div>
              <h3 className="text-xl font-display font-extrabold text-white">{activeDc.name}</h3>
              <p className="text-xs text-slate-400 flex items-center space-x-1.5">
                <span>📍 Địa chỉ: {activeDc.location}</span>
              </p>

              <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 pt-2 border-t border-slate-800/80">
                <Clock className="w-4 h-4" />
                <span>Giờ Nhận Hàng: {activeDc.receivingHours}</span>
              </div>
            </div>

            {/* Temperature Rules Section */}
            <div className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800/80 space-y-4">
              <h4 className="font-display font-bold text-base text-white flex items-center space-x-2">
                <Snowflake className="w-5 h-5 text-sky-400" />
                <span>Quy Định Nhiệt Độ Nghiêm Ngặt Khi Giao Kho DC</span>
              </h4>

              <div className="space-y-3 text-xs">
                
                {/* Frozen */}
                <div className="p-4 rounded-2xl bg-sky-950/30 border border-sky-500/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sky-300 text-sm">❄️ Hàng Đông Lạnh (-18°C ~ -25°C):</span>
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-sky-500/20 text-sky-300 rounded">
                      Sủi cảo / Há cảo / Xúc xích đông
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{activeDc.tempRules.frozen}</p>
                </div>

                {/* Chilled */}
                <div className="p-4 rounded-2xl bg-teal-950/30 border border-teal-500/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-teal-300 text-sm">🧊 Hàng Mát (0°C ~ 5°C):</span>
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-teal-500/20 text-teal-300 rounded">
                      Xúc xích tươi / Chả lụa mát
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{activeDc.tempRules.chilled}</p>
                </div>

                {/* Ambient */}
                <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-amber-300 text-sm">☀️ Hàng Khô (Nhiệt độ phòng):</span>
                    <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-500/20 text-amber-300 rounded">
                      Xúc xích tiệt trùng / Đồ lon / Sốt
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{activeDc.tempRules.ambient}</p>
                </div>

              </div>
            </div>

            {/* Pallet Specs */}
            <div className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800/80 space-y-3 text-xs">
              <h4 className="font-display font-bold text-base text-white flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Tiêu Chuẩn Đóng Pallet & Đai Màng PE</span>
              </h4>
              <p className="text-slate-300 bg-slate-900 p-4 rounded-2xl border border-slate-800 leading-relaxed">
                {activeDc.palletSpecs}
              </p>
            </div>

          </div>

          {/* Right Warning & Checklist Side */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Late Penalty Warning Box */}
            <div className="p-6 rounded-3xl bg-rose-950/40 border border-rose-500/40 space-y-3">
              <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm">
                <AlertTriangle className="w-5 h-5" />
                <span>Cảnh Báo Phạt Trễ / Trả Hàng</span>
              </div>
              <p className="text-xs text-rose-200 leading-relaxed">
                {activeDc.latePenaltyNote}
              </p>
              <div className="pt-2 text-[11px] text-rose-300 font-semibold">
                ⚠️ Khuyên dùng các nhà xe có điểm OTIF trên 97% (ABA Cooltrans, Swire Cold, New Transport) để tránh đứt gãy chuỗi cung ứng siêu thị.
              </div>
            </div>

            {/* Quality Checklist for Driver */}
            <div className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800/80 space-y-3 text-xs">
              <h4 className="font-bold text-sm text-white">Checklist Cho Tài Xế Xe Lạnh LC Foods:</h4>
              
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Bật máy lạnh thùng trước khi nhận hàng LC Foods 30 phút.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Cung cấp file log nhiệt độ từ Datalogger cho KCS Siêu thị.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Kiểm tra tem mã vạch barcode trên từng thùng carton.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Chụp hình chụp biên bản giao nhận (POD) gửi về phòng Vận Tải LC Foods.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
