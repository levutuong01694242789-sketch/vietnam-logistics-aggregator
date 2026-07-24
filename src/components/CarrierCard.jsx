import React from 'react';
import { Star, ShieldCheck, Snowflake, Truck, Check, Award, ChevronRight, Phone, Mail, ArrowUpRight, CheckSquare, Square } from 'lucide-react';

export default function CarrierCard({ carrier, isSelected, onToggleSelect, onRequestQuote }) {
  return (
    <div className={`relative bg-slate-900 border rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl ${
      isSelected
        ? 'border-rose-500 shadow-rose-950/40 ring-2 ring-rose-500/40 bg-slate-900/90'
        : 'border-slate-800 hover:border-slate-700'
    }`}>
      
      {/* Top Bar: Logo, Name, Rating & Select Checkbox */}
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${carrier.themeColor} flex items-center justify-center text-white font-extrabold text-lg shadow-lg`}>
              {carrier.logoText}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-display font-bold text-lg text-white hover:text-rose-400 transition">
                  {carrier.name}
                </h3>
                {carrier.verified && (
                  <span title="Được chứng nhận đối tác uy tín cho LC Foods">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 font-medium">{carrier.type}</p>
              
              {/* Rating & Experience */}
              <div className="flex items-center space-x-3 mt-1.5 text-xs text-slate-300">
                <div className="flex items-center space-x-1 text-amber-400 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{carrier.rating}</span>
                  <span className="text-slate-500 text-[11px]">({carrier.reviewCount})</span>
                </div>
                <span className="text-slate-700">•</span>
                <span className="text-slate-400">Thành lập {carrier.establishedYear}</span>
              </div>
            </div>
          </div>

          {/* Select for Comparison Checkbox */}
          <button
            onClick={() => onToggleSelect(carrier.id)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              isSelected
                ? 'bg-rose-500 text-white shadow-md shadow-rose-900/50'
                : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            {isSelected ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
            <span>{isSelected ? 'Đã chọn' : 'So sánh'}</span>
          </button>
        </div>

        {/* Highlight Stats: Supermarket OTIF Score & Fleet */}
        <div className="grid grid-cols-2 gap-3 mt-5 p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">
              Tỷ Lệ Duyệt Kho MT (OTIF):
            </span>
            <span className="text-sm font-extrabold text-emerald-400 flex items-center space-x-1">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>{carrier.mtOtifScore}% Chuẩn Giờ</span>
            </span>
          </div>

          <div>
            <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">
              Quy Mô Đội Xe:
            </span>
            <span className="text-xs font-bold text-slate-200 truncate block mt-0.5" title={carrier.fleetSize}>
              {carrier.fleetSize}
            </span>
          </div>
        </div>

        {/* Cold Temp Capabilities Badges */}
        <div className="mt-4">
          <span className="block text-[11px] font-bold text-slate-400 mb-2">Dải Nhiệt Độ Đáp Ứng:</span>
          <div className="flex flex-wrap gap-1.5">
            {carrier.coldTempCapabilities.map((cap, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-800 text-sky-300 border border-sky-500/20 flex items-center space-x-1"
              >
                <Snowflake className="w-3 h-3 text-sky-400" />
                <span>{cap}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Supermarket Experience Tags */}
        <div className="mt-3">
          <span className="block text-[11px] font-bold text-slate-400 mb-1.5">Kinh Nghiệm Kho DC Siêu Thị:</span>
          <div className="flex flex-wrap gap-1">
            {carrier.supermarketExperience.map((dc, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-300 border border-rose-500/30">
                {dc}
              </span>
            ))}
          </div>
        </div>

        {/* Reference Pricing Box */}
        <div className="mt-4 p-3 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800/90 space-y-1.5">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Gửi ghép đông lạnh (LTL):</span>
            <span className="font-bold text-rose-400">{carrier.pricing.ltlFrozenKg.toLocaleString('vi-VN')} VND / kg</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Nguyên xe đông lạnh (FTL nội thành):</span>
            <span className="font-bold text-white">{carrier.pricing.ftlShortDistance1_5T.toLocaleString('vi-VN')} VND / chuyến</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Cước FTL đường dài:</span>
            <span className="font-bold text-slate-300">{carrier.pricing.ftlLongDistancePerKm.toLocaleString('vi-VN')} VND / km</span>
          </div>
        </div>

        {/* Key Features Bullet Points */}
        <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
          {carrier.features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Footer: Contact & RFQ Action */}
      <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
        <div className="text-xs text-slate-400">
          <div className="flex items-center space-x-1">
            <Phone className="w-3 h-3 text-slate-500" />
            <span>{carrier.hotline}</span>
          </div>
        </div>

        <button
          onClick={() => onRequestQuote(carrier)}
          className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl font-bold text-xs bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-950/50 transition transform hover:scale-105"
        >
          <span>Gửi RFQ Báo Giá</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
