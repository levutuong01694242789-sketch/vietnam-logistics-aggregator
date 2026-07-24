import React, { useState } from 'react';
import { Calculator, Truck, MapPin, Snowflake, Layers, CheckCircle2, ChevronRight, HelpCircle, FileSpreadsheet } from 'lucide-react';
import { LC_FOODS_PRODUCT_GROUPS } from '../data/lcFoodsCategories';
import { CARRIERS_DATA } from '../data/carriersData';

const POPULAR_ROUTES = [
  { name: 'TP.HCM (Nhà máy LC Foods) -> DC WinMart Bình Dương', distance: 35, type: 'Short' },
  { name: 'TP.HCM -> DC Saigon Co.op Lê Minh Xuân', distance: 28, type: 'Short' },
  { name: 'TP.HCM -> Tổng Kho DC Bách Hóa Xanh Long An', distance: 45, type: 'Short' },
  { name: 'TP.HCM -> Cần Thơ & Miền Tây (Kênh GT)', distance: 175, type: 'Medium' },
  { name: 'TP.HCM -> Nha Trang / Khánh Hòa', distance: 430, type: 'Medium' },
  { name: 'TP.HCM -> Đà Nẵng / Miền Trung', distance: 950, type: 'Long' },
  { name: 'TP.HCM -> Hà Nội / Hưng Yên (Bắc - Nam)', distance: 1720, type: 'Long' },
];

const TRUCK_CAPACITIES = [
  { id: '1.5T', name: 'Xe Lạnh 1.5 Tấn', maxKg: 1500, pallets: 2, basePriceShort: 1300000, kmRate: 16000 },
  { id: '3.5T', name: 'Xe Lạnh 3.5 Tấn', maxKg: 3500, pallets: 4, basePriceShort: 1800000, kmRate: 21000 },
  { id: '5.0T', name: 'Xe Lạnh 5 Tấn', maxKg: 5000, pallets: 6, basePriceShort: 2400000, kmRate: 26000 },
  { id: '8.0T', name: 'Xe Lạnh 8 Tấn', maxKg: 8000, pallets: 10, basePriceShort: 3600000, kmRate: 34000 },
  { id: '15T', name: 'Xe Lạnh 15 Tấn (Nặng)', maxKg: 15000, pallets: 18, basePriceShort: 5800000, kmRate: 45000 },
  { id: '40RF', name: 'Container Lạnh 40ft RF', maxKg: 26000, pallets: 24, basePriceShort: 8500000, kmRate: 55000 },
];

export default function ShippingCostCalculator({ onRequestQuote }) {
  const [productGroup, setProductGroup] = useState('frozen_dimsum');
  const [channel, setChannel] = useState('MT');
  const [weightKg, setWeightKg] = useState(2500);
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(0);
  const [customDistanceKm, setCustomDistanceKm] = useState(35);
  const [shipmentMode, setShipmentMode] = useState('FTL'); // FTL vs LTL
  const [selectedTruckId, setSelectedTruckId] = useState('3.5T');
  
  // Extra options
  const [hasSupermarketWaitFee, setHasSupermarketWaitFee] = useState(true);
  const [hasHandlingService, setHasHandlingService] = useState(true);
  const [gtDropCount, setGtDropCount] = useState(1);

  // Calculation Logic
  const distanceKm = selectedRouteIndex === -1 ? customDistanceKm : POPULAR_ROUTES[selectedRouteIndex].distance;
  const currentProduct = LC_FOODS_PRODUCT_GROUPS.find(g => g.id === productGroup) || LC_FOODS_PRODUCT_GROUPS[0];
  const isFrozen = currentProduct.tempCategory === 'frozen';
  const isChilled = currentProduct.tempCategory === 'chilled';

  // Base Freight calculation
  let baseFreight = 0;
  if (shipmentMode === 'LTL') {
    // Per kg rate base
    const ratePerKg = isFrozen ? 3800 : isChilled ? 3200 : 1800;
    const distanceFactor = Math.max(1, distanceKm / 100);
    baseFreight = Math.round(weightKg * ratePerKg * (distanceKm < 50 ? 0.35 : distanceFactor * 0.25));
  } else {
    // FTL Truck based
    const truck = TRUCK_CAPACITIES.find(t => t.id === selectedTruckId) || TRUCK_CAPACITIES[1];
    if (distanceKm <= 40) {
      baseFreight = truck.basePriceShort;
    } else {
      baseFreight = truck.basePriceShort + (distanceKm - 40) * truck.kmRate;
    }
  }

  // Cold Surcharge
  const tempSurcharge = isFrozen ? Math.round(baseFreight * 0.15) : isChilled ? Math.round(baseFreight * 0.08) : 0;

  // MT DC Handling & Waiting Fees
  const supermarketSlotFee = (channel === 'MT' && hasSupermarketWaitFee) ? 250000 : 0;
  const handlingFee = hasHandlingService ? Math.round((weightKg / 1000) * 120000) : 0;
  const multiDropFee = (channel === 'GT' && gtDropCount > 1) ? (gtDropCount - 1) * 150000 : 0;

  // Total Estimated Cost
  const totalEstimatedCost = baseFreight + tempSurcharge + supermarketSlotFee + handlingFee + multiDropFee;

  return (
    <div className="space-y-8">
      
      {/* Title */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/30">
            <Calculator className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white">
              Công Cụ Ước Tính Cước Vận Chuyển Chuyên Cho LC FOODS
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Tự động tính cước xe lạnh/xe khô theo khoảng cách địa lý, khối lượng và phụ phí giao kho siêu thị DC / kênh GT.
            </p>
          </div>
        </div>

        {/* Input Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          
          {/* Left Column: Config Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Product & Temp */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                1. Loại Sản Phẩm LC Foods:
              </label>
              <select
                value={productGroup}
                onChange={(e) => setProductGroup(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white font-semibold focus:border-rose-500 focus:outline-none"
              >
                {LC_FOODS_PRODUCT_GROUPS.map(g => (
                  <option key={g.id} value={g.id}>
                    {g.icon} {g.name} ({g.tempRange})
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Route Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                2. Tuyến Đường Vận Chuyển:
              </label>
              <select
                value={selectedRouteIndex}
                onChange={(e) => setSelectedRouteIndex(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white font-semibold focus:border-rose-500 focus:outline-none mb-3"
              >
                {POPULAR_ROUTES.map((r, idx) => (
                  <option key={idx} value={idx}>
                    {r.name} ({r.distance} km)
                  </option>
                ))}
                <option value={-1}>-- Nhập Quãng Đường Tùy Chỉnh (km) --</option>
              </select>

              {selectedRouteIndex === -1 && (
                <div className="flex items-center space-x-3 mt-2">
                  <span className="text-xs text-slate-400">Khoảng cách:</span>
                  <input
                    type="number"
                    value={customDistanceKm}
                    onChange={(e) => setCustomDistanceKm(Number(e.target.value))}
                    className="w-32 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white font-bold"
                  />
                  <span className="text-xs text-slate-400">km</span>
                </div>
              )}
            </div>

            {/* 3. Shipment Mode: FTL vs LTL */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                3. Hình Thức Vận Chuyển:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setShipmentMode('FTL')}
                  className={`p-3.5 rounded-2xl border text-left font-bold text-xs transition ${
                    shipmentMode === 'FTL'
                      ? 'bg-rose-500/10 border-rose-500 text-white shadow-lg shadow-rose-950/30 ring-1 ring-rose-500'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Nguyên Xe (FTL)</span>
                    <Truck className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="text-[11px] font-normal text-slate-400">Thuê riêng trọn gói 1 xe đông lạnh</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShipmentMode('LTL')}
                  className={`p-3.5 rounded-2xl border text-left font-bold text-xs transition ${
                    shipmentMode === 'LTL'
                      ? 'bg-rose-500/10 border-rose-500 text-white shadow-lg shadow-rose-950/30 ring-1 ring-rose-500'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm">Gửi Ghép (LTL)</span>
                    <Layers className="w-4 h-4 text-rose-400" />
                  </div>
                  <span className="text-[11px] font-normal text-slate-400">Ghép lô nhỏ chung xe tải lạnh</span>
                </button>
              </div>
            </div>

            {/* 4. Weight / Truck Selection */}
            {shipmentMode === 'FTL' ? (
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  4. Chọn Trọng Tải Xe Lạnh:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {TRUCK_CAPACITIES.map(truck => (
                    <button
                      key={truck.id}
                      type="button"
                      onClick={() => setSelectedTruckId(truck.id)}
                      className={`p-3 rounded-xl border text-left transition ${
                        selectedTruckId === truck.id
                          ? 'bg-slate-800 border-amber-500 text-amber-300 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span className="text-xs block font-bold">{truck.name}</span>
                      <span className="text-[10px] text-slate-500 block">Sức chứa: {truck.pallets} Pallets ({truck.maxKg / 1000} Tấn)</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  4. Tổng Khối Lượng Hàng Lô Ghép (Kg):
                </label>
                <input
                  type="number"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white font-bold"
                  placeholder="Nhập số kg..."
                />
              </div>
            )}

            {/* 5. Channel & Extra Surcharges */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                5. Kênh Phân Phối & Phụ Phí Vận Hành:
              </label>
              <div className="flex space-x-3 mb-3">
                <button
                  type="button"
                  onClick={() => setChannel('MT')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border ${
                    channel === 'MT' ? 'bg-rose-500/20 border-rose-500 text-rose-300' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  Kênh MT (Siêu Thị DC)
                </button>
                <button
                  type="button"
                  onClick={() => setChannel('GT')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border ${
                    channel === 'GT' ? 'bg-amber-500/20 border-amber-500 text-amber-300' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  Kênh GT (Đại lý / Chợ)
                </button>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                {channel === 'MT' ? (
                  <label className="flex items-center space-x-2 bg-slate-950/80 p-3 rounded-xl border border-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasSupermarketWaitFee}
                      onChange={(e) => setHasSupermarketWaitFee(e.target.checked)}
                      className="rounded accent-rose-500"
                    />
                    <span>Phí lưu đêm & hẹn Time-Slot kho DC Siêu thị (250,000 VND)</span>
                  </label>
                ) : (
                  <div className="flex items-center space-x-3 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                    <span>Số điểm giao (Drop-off points):</span>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      value={gtDropCount}
                      onChange={(e) => setGtDropCount(Number(e.target.value))}
                      className="w-16 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-white font-bold text-center"
                    />
                    <span className="text-[11px] text-slate-400">(Giao từ điểm thứ 2: +150k/điểm)</span>
                  </div>
                )}

                <label className="flex items-center space-x-2 bg-slate-950/80 p-3 rounded-xl border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasHandlingService}
                    onChange={(e) => setHasHandlingService(e.target.checked)}
                    className="rounded accent-rose-500"
                  />
                  <span>Dịch vụ bốc xếp & kiểm đếm tại kho xuất/nhập (120,000 VND / Tấn)</span>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Itemized Receipt & Best Carrier Recommendation */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="font-display font-bold text-lg text-white">Bảng Tính Cước Chi Tiết</span>
                <span className="px-2.5 py-1 text-[10px] font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 rounded-full">
                  Ước Tính Hợp Lệ
                </span>
              </div>

              {/* Itemized List */}
              <div className="py-6 space-y-3.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Sản phẩm:</span>
                  <span className="font-bold text-white text-right">{currentProduct.name}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Tuyến & Quãng đường:</span>
                  <span className="font-bold text-slate-200">{distanceKm} km</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Cước vận chuyển cơ bản ({shipmentMode}):</span>
                  <span className="font-extrabold text-white">{baseFreight.toLocaleString('vi-VN')} VND</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Phụ phí nhiệt độ ({currentProduct.tempRange}):</span>
                  <span className="font-bold text-sky-400">+{tempSurcharge.toLocaleString('vi-VN')} VND</span>
                </div>

                {supermarketSlotFee > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Phí Time-slot & Chờ kho DC:</span>
                    <span className="font-bold text-amber-400">+{supermarketSlotFee.toLocaleString('vi-VN')} VND</span>
                  </div>
                )}

                {multiDropFee > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Phí giao đa điểm GT ({gtDropCount} điểm):</span>
                    <span className="font-bold text-amber-400">+{multiDropFee.toLocaleString('vi-VN')} VND</span>
                  </div>
                )}

                {handlingFee > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Phí bốc xếp & hạ pallet:</span>
                    <span className="font-bold text-slate-300">+{handlingFee.toLocaleString('vi-VN')} VND</span>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-800 flex justify-between items-end">
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase">Tổng Chi Phí Ước Tính:</span>
                    <span className="text-2xl font-display font-extrabold text-rose-500">
                      {totalEstimatedCost.toLocaleString('vi-VN')} VND
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 mb-1">(Chưa VAT)</span>
                </div>
              </div>

              {/* Top Carrier Recommendation */}
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 mt-2">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                  💡 Nhà Xe Đề Xuất Tốt Nhất Cho Chuyến Này:
                </span>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white text-xs">
                      ABA
                    </div>
                    <div>
                      <span className="font-bold text-xs text-white block">ABA Cooltrans Logistics</span>
                      <span className="text-[10px] text-slate-400">Duyệt kho MT: 98.5% • Đủ máy ThermoKing</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onRequestQuote(CARRIERS_DATA[0])}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white transition"
                  >
                    Báo giá
                  </button>
                </div>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <button
                onClick={() => onRequestQuote(CARRIERS_DATA[0])}
                className="w-full py-3.5 rounded-2xl font-display font-bold text-sm bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white shadow-xl shadow-rose-950/60 flex items-center justify-center space-x-2 transition transform hover:scale-102"
              >
                <span>Yêu Cầu Các Nhà Xe Báo Giá Cạnh Tranh</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
