import React from 'react';
import { X, Check, Award, Snowflake, ShieldCheck, DollarSign, Truck, FileText, ChevronRight } from 'lucide-react';

export default function CarrierComparisonTable({ carriers, onClose, onRequestQuote }) {
  if (!carriers || carriers.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-950/90">
          <div>
            <h2 className="text-xl font-display font-bold text-white flex items-center space-x-2">
              <Award className="w-6 h-6 text-rose-500" />
              <span>Bảng So Sánh Sóng Đôi ({carriers.length} Nhà Vận Chuyển)</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Đánh giá cước phí, năng lực kiểm soát nhiệt độ & độ uy tín kho DC cho sản phẩm LC FOODS.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Table Content */}
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="p-3 text-xs font-bold text-slate-400 uppercase w-48 bg-slate-950/40 sticky left-0 z-10 backdrop-blur">
                  Tiêu Chí So Sánh
                </th>
                {carriers.map((carrier) => (
                  <th key={carrier.id} className="p-4 text-center min-w-[220px]">
                    <div className={`w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br ${carrier.themeColor} flex items-center justify-center text-white font-extrabold text-base shadow-md mb-2`}>
                      {carrier.logoText}
                    </div>
                    <span className="font-bold text-sm text-white block">{carrier.name}</span>
                    <span className="text-xs text-slate-400 font-normal">{carrier.type}</span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800/60 text-xs">
              
              {/* 1. Rating & OTIF Score */}
              <tr>
                <td className="p-3 font-bold text-slate-300 bg-slate-950/40 sticky left-0 backdrop-blur">
                  Đánh Giá & OTIF DC Siêu Thị
                </td>
                {carriers.map((c) => (
                  <td key={c.id} className="p-4 text-center">
                    <div className="font-extrabold text-emerald-400 text-sm">{c.mtOtifScore}% Chuẩn Giờ</div>
                    <div className="text-slate-400 mt-0.5 font-medium">{c.rating} ⭐ ({c.reviewCount} đánh giá)</div>
                  </td>
                ))}
              </tr>

              {/* 2. Frozen LTL Freight Rate */}
              <tr className="bg-slate-950/30">
                <td className="p-3 font-bold text-rose-300 bg-slate-950/40 sticky left-0 backdrop-blur">
                  Cước Đông Lạnh Gửi Ghép (LTL)
                </td>
                {carriers.map((c) => (
                  <td key={c.id} className="p-4 text-center">
                    <span className="text-base font-extrabold text-rose-400">
                      {c.pricing.ltlFrozenKg.toLocaleString('vi-VN')} VND
                    </span>
                    <span className="block text-[10px] text-slate-500">trên 1 kg</span>
                  </td>
                ))}
              </tr>

              {/* 3. Short FTL 1.5T Freight Rate */}
              <tr>
                <td className="p-3 font-bold text-slate-300 bg-slate-950/40 sticky left-0 backdrop-blur">
                  Cước FTL Nội Thành (Xe 1.5T)
                </td>
                {carriers.map((c) => (
                  <td key={c.id} className="p-4 text-center">
                    <span className="font-bold text-white">
                      {c.pricing.ftlShortDistance1_5T.toLocaleString('vi-VN')} VND
                    </span>
                    <span className="block text-[10px] text-slate-500">trên chuyến</span>
                  </td>
                ))}
              </tr>

              {/* 4. Long Distance FTL Freight Rate */}
              <tr className="bg-slate-950/30">
                <td className="p-3 font-bold text-slate-300 bg-slate-950/40 sticky left-0 backdrop-blur">
                  Cước FTL Đường Dài (VND/km)
                </td>
                {carriers.map((c) => (
                  <td key={c.id} className="p-4 text-center font-semibold text-slate-200">
                    {c.pricing.ftlLongDistancePerKm.toLocaleString('vi-VN')} VND / km
                  </td>
                ))}
              </tr>

              {/* 5. Temperature Range & Monitoring */}
              <tr>
                <td className="p-3 font-bold text-sky-300 bg-slate-950/40 sticky left-0 backdrop-blur">
                  Dải Nhiệt Đông/Mát & IoT
                </td>
                {carriers.map((c) => (
                  <td key={c.id} className="p-4 text-center">
                    <div className="space-y-1">
                      {c.coldTempCapabilities.map((cap, idx) => (
                        <span key={idx} className="inline-block px-2 py-0.5 text-[10px] font-semibold bg-sky-500/10 text-sky-300 rounded border border-sky-500/30 mr-1">
                          {cap}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* 6. Certifications */}
              <tr className="bg-slate-950/30">
                <td className="p-3 font-bold text-amber-300 bg-slate-950/40 sticky left-0 backdrop-blur">
                  Chứng Chỉ ATVSTP & HACCP
                </td>
                {carriers.map((c) => (
                  <td key={c.id} className="p-4 text-center">
                    <div className="flex flex-wrap justify-center gap-1">
                      {c.certifications.map((cert, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-[10px] font-bold bg-amber-500/10 text-amber-300 rounded">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* 7. Supermarket DC Experience */}
              <tr>
                <td className="p-3 font-bold text-slate-300 bg-slate-950/40 sticky left-0 backdrop-blur">
                  Kinh Nghiệm Giao Kho Siêu Thị
                </td>
                {carriers.map((c) => (
                  <td key={c.id} className="p-4 text-center">
                    <div className="flex flex-wrap justify-center gap-1">
                      {c.supermarketExperience.map((dc, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-[10px] font-semibold bg-slate-800 text-slate-300 rounded">
                          {dc}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* 8. Action Row */}
              <tr>
                <td className="p-3 bg-slate-950/40 sticky left-0 backdrop-blur"></td>
                {carriers.map((c) => (
                  <td key={c.id} className="p-4 text-center">
                    <button
                      onClick={() => {
                        onClose();
                        onRequestQuote(c);
                      }}
                      className="w-full py-2.5 px-4 rounded-xl font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-950/50 transition"
                    >
                      Báo Giá Ngay
                    </button>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <span>* Bảng cước chưa bao gồm thuế VAT & phụ phí hạ bốc xếp nếu có.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
}
