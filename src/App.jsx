import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SmartFilterBar from './components/SmartFilterBar';
import CarrierCard from './components/CarrierCard';
import CarrierComparisonTable from './components/CarrierComparisonTable';
import ShippingCostCalculator from './components/ShippingCostCalculator';
import SupermarketDCSpecs from './components/SupermarketDCSpecs';
import IoTTemperatureTracker from './components/IoTTemperatureTracker';
import RFQBookingModal from './components/RFQBookingModal';

import { CARRIERS_DATA } from './data/carriersData';
import { LC_FOODS_PRODUCT_GROUPS } from './data/lcFoodsCategories';
import { Snowflake, Truck, ShieldCheck, ShoppingBag, Award, ArrowUpRight, BarChart3, Plus } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('carriers');
  const [carriersList, setCarriersList] = useState(CARRIERS_DATA);

  // Smart Filters
  const [filters, setFilters] = useState({
    searchQuery: '',
    selectedProductGroup: '',
    tempCategory: 'all',
    channel: 'all',
    loadType: 'all',
    region: 'all'
  });

  // Selected Carriers for Comparison
  const [selectedCarrierIds, setSelectedCarrierIds] = useState([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  // RFQ Modal
  const [selectedCarrierForRfq, setSelectedCarrierForRfq] = useState(null);
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);

  const resetFilters = () => {
    setFilters({
      searchQuery: '',
      selectedProductGroup: '',
      tempCategory: 'all',
      channel: 'all',
      loadType: 'all',
      region: 'all'
    });
  };

  const handleToggleSelectCarrier = (carrierId) => {
    setSelectedCarrierIds(prev =>
      prev.includes(carrierId) ? prev.filter(id => id !== carrierId) : [...prev, carrierId]
    );
  };

  const handleOpenRfq = (carrier) => {
    setSelectedCarrierForRfq(carrier);
    setIsRfqModalOpen(true);
  };

  // Filtered Carriers Logic
  const filteredCarriers = useMemo(() => {
    return carriersList.filter(carrier => {
      // 1. Search Query
      if (filters.searchQuery) {
        const q = filters.searchQuery.toLowerCase();
        const matchName = carrier.name.toLowerCase().includes(q) || carrier.shortName?.toLowerCase().includes(q);
        const matchCoverage = carrier.gtDropCoverage?.toLowerCase().includes(q) || carrier.region?.toLowerCase().includes(q);
        const matchDC = carrier.supermarketExperience?.some(dc => dc.toLowerCase().includes(q));
        if (!matchName && !matchCoverage && !matchDC) return false;
      }

      // 2. Region Filter
      if (filters.region !== 'all') {
        if (!carrier.region?.includes(filters.region)) return false;
      }

      // 3. Temp Category
      if (filters.tempCategory === 'frozen') {
        const hasFrozen = carrier.coldTempCapabilities?.some(c => c.includes('Đông'));
        if (!hasFrozen && carrier.coldTempCapabilities) return false;
      } else if (filters.tempCategory === 'chilled') {
        const hasChilled = carrier.coldTempCapabilities?.some(c => c.includes('Mát'));
        if (!hasChilled && carrier.coldTempCapabilities) return false;
      }

      // 4. Channel
      if (filters.channel === 'MT') {
        if (carrier.mtOtifScore < 95.0) return false;
      }

      return true;
    });
  }, [carriersList, filters]);

  const selectedCarriers = useMemo(() => {
    return carriersList.filter(c => selectedCarrierIds.includes(c.id));
  }, [carriersList, selectedCarrierIds]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCarrierCount={selectedCarrierIds.length}
        onOpenComparison={() => setIsComparisonOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Hero Section Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-rose-950/40 to-slate-900 border border-slate-800 p-8 sm:p-10 shadow-2xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold">
              <Snowflake className="w-4 h-4 text-rose-400 animate-spin" />
              <span>Nền Tảng Vận Tải Chuyên Biệt Cho LC FOODS (La Cusina)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
              Sàn So Sánh <span className="text-rose-500">{carriersList.length}+ Nhà Vận Chuyển Thực Phẩm</span> Toàn Quốc
            </h1>

            <p className="text-sm text-slate-300 leading-relaxed">
              Giải pháp tối ưu cước phí & chất lượng chuỗi lạnh **-18°C ~ -25°C** cho Há Cảo, Sủi Cảo, Xúc Xích Đông Lạnh LC FOODS. Đáp ứng khung giờ hẹn (Time-Slot) giao kho **DC Siêu Thị (MT)** & mạng lưới phân phối đại lý (GT) 63 tỉnh thành.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80 text-xs">
              <div>
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Nhà Vận Chuyển Lạnh:</span>
                <span className="text-lg font-extrabold text-white">{carriersList.length} Đơn vị uy tín</span>
              </div>
              <div>
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Tỷ Lệ Duyệt Kho MT:</span>
                <span className="text-lg font-extrabold text-emerald-400">98.5% OTIF</span>
              </div>
              <div>
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Chuẩn Nhiệt Độ:</span>
                <span className="text-lg font-extrabold text-sky-400">-25°C đến +25°C</span>
              </div>
              <div>
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Độ Phủ Mạng Lưới:</span>
                <span className="text-lg font-extrabold text-amber-300">63 Tỉnh Thành</span>
              </div>
            </div>

          </div>
        </div>

        {/* Tab 1: Carrier Listing & Filter */}
        {activeTab === 'carriers' && (
          <div className="space-y-8">
            {/* Smart Filter */}
            <SmartFilterBar
              filters={filters}
              setFilters={setFilters}
              onResetFilters={resetFilters}
            />

            {/* Region Filter Bar */}
            <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 p-3 rounded-2xl text-xs font-bold overflow-x-auto">
              <span className="text-slate-400 pl-2">Lọc theo miền:</span>
              {[
                { id: 'all', label: 'Tất cả khu vực' },
                { id: 'Bắc', label: 'Miền Bắc / Hà Nội' },
                { id: 'Nam', label: 'Miền Nam / TP.HCM' },
                { id: 'Tây', label: 'Miền Tây / ĐBSCL' },
                { id: 'Bắc - Nam', label: 'Trục Bắc - Nam' },
              ].map(r => (
                <button
                  key={r.id}
                  onClick={() => setFilters(prev => ({ ...prev, region: r.id }))}
                  className={`px-3.5 py-1.5 rounded-xl transition ${
                    filters.region === r.id
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>

            {/* Results Counter & Actions Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-display font-bold text-white flex items-center space-x-2">
                  <span>Danh Sách Đơn Vị Vận Chuyển Phù Hợp</span>
                  <span className="px-2.5 py-0.5 text-xs font-bold bg-slate-800 text-rose-400 rounded-full border border-slate-700">
                    {filteredCarriers.length} / {carriersList.length} nhà xe
                  </span>
                </h3>
              </div>

              {selectedCarrierIds.length > 0 && (
                <button
                  onClick={() => setIsComparisonOpen(true)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition flex items-center justify-center space-x-2"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Xem Bảng So Sánh Sóng Đôi ({selectedCarrierIds.length})</span>
                </button>
              )}
            </div>

            {/* Carriers Grid */}
            {filteredCarriers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCarriers.map(carrier => (
                  <CarrierCard
                    key={carrier.id}
                    carrier={carrier}
                    isSelected={selectedCarrierIds.includes(carrier.id)}
                    onToggleSelect={handleToggleSelectCarrier}
                    onRequestQuote={handleOpenRfq}
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-slate-900 border border-slate-800 rounded-3xl space-y-3">
                <p className="text-base text-slate-400">Không tìm thấy nhà vận chuyển khớp với bộ lọc hiện tại.</p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white"
                >
                  Đặt lại tất cả bộ lọc
                </button>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Shipping Cost Calculator */}
        {activeTab === 'calculator' && (
          <ShippingCostCalculator onRequestQuote={handleOpenRfq} />
        )}

        {/* Tab 3: Supermarket DC Specifications */}
        {activeTab === 'supermarkets' && (
          <SupermarketDCSpecs />
        )}

        {/* Tab 4: IoT Temperature Monitoring Simulator */}
        {activeTab === 'iot' && (
          <IoTTemperatureTracker />
        )}

      </main>

      {/* Comparison Modal */}
      {isComparisonOpen && (
        <CarrierComparisonTable
          carriers={selectedCarriers}
          onClose={() => setIsComparisonOpen(false)}
          onRequestQuote={handleOpenRfq}
        />
      )}

      {/* RFQ Booking Modal */}
      {isRfqModalOpen && (
        <RFQBookingModal
          carrier={selectedCarrierForRfq}
          onClose={() => setIsRfqModalOpen(false)}
          onSuccess={() => setIsRfqModalOpen(false)}
        />
      )}

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500 space-y-2">
          <p className="font-bold text-slate-400">
            VietLogis Food © 2026 — Sàn Vận Tải Thực Phẩm LC FOODS (La Cusina)
          </p>
          <p>
            Tối ưu hóa chi phí & chất lượng chuỗi cung ứng lạnh cho Há Cảo, Sủi Cảo, Xúc Xích & Đồ Đóng Hộp trên 63 Tỉnh Thành Việt Nam.
          </p>
        </div>
      </footer>

    </div>
  );
}
