import React, { useState } from 'react';
import { X, Send, Truck, Calendar, MapPin, Package, CheckCircle2, ShieldCheck } from 'lucide-react';
import { LC_FOODS_PRODUCT_GROUPS } from '../data/lcFoodsCategories';

export default function RFQBookingModal({ carrier, onClose, onSuccess }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: 'Công ty Cổ phần Thực phẩm LC FOODS',
    contactPerson: 'Nguyễn Văn Minh (Phòng Vận Tải LC Foods)',
    phone: '0988 123 456',
    email: 'logistics@lcfoods.vn',
    productGroup: 'frozen_dimsum',
    channel: 'MT',
    pickupAddress: 'Nhà máy LC FOODS - Đường 14, KCN Sóng Thần 2, Dĩ An, Bình Dương',
    deliveryAddress: 'Tổng Kho DC WinMart Miền Nam - KCN Sóng Thần 2, Dĩ An, Bình Dương',
    pickupDate: '2026-07-28',
    pickupTime: '08:00',
    weightTons: '3.5',
    palletCount: '6',
    specialNotes: 'Giao kho DC siêu thị WinMart đúng Time-Slot 09:30 AM. Yêu cầu bật máy lạnh trước 30p, nhiệt độ thùng ≤ -18°C. Trả hóa đơn POD trong 48h.'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      if (onSuccess) onSuccess();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-950/90">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-600 to-amber-500 flex items-center justify-center text-white font-extrabold text-sm shadow">
              {carrier ? carrier.logoText : 'LC'}
            </div>
            <div>
              <h2 className="text-lg font-display font-bold text-white">
                Gửi Yêu Cầu Báo Giá (RFQ) Cho {carrier ? carrier.name : 'Nhà Vận Chuyển'}
              </h2>
              <p className="text-xs text-slate-400">
                Mẫu yêu cầu đặt dịch vụ xe lạnh & xe khô dành riêng cho LC FOODS
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-950/50">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white">Gửi Yêu Cầu Báo Giá Thành Công!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Yêu cầu báo giá chuyến hàng của **LC FOODS** đã được gửi tới hệ thống của **{carrier ? carrier.name : 'Nhà xe'}**. Bộ phận điều xe sẽ phản hồi báo giá chi tiết trong vòng 15 phút.
            </p>
            <div className="pt-4 text-xs font-mono text-slate-400">
              Mã RFQ: <span className="text-rose-400 font-bold">RFQ-LCFOODS-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 text-xs">
            
            {/* Row 1: Company & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-bold mb-1.5">Tên Doanh Nghiệp Gửi Hàng:</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white font-semibold"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1.5">Người Liêu Hệ Vận Tải:</label>
                <input
                  type="text"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white font-semibold"
                  required
                />
              </div>
            </div>

            {/* Row 2: Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-bold mb-1.5">Số Điện Thoại Hotline:</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white font-bold"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1.5">Email Nhận Báo Giá:</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white font-semibold"
                  required
                />
              </div>
            </div>

            {/* Row 3: Product Group & Channel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-bold mb-1.5">Loại Hàng LC Foods:</label>
                <select
                  value={formData.productGroup}
                  onChange={(e) => setFormData({ ...formData, productGroup: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white font-semibold"
                >
                  {LC_FOODS_PRODUCT_GROUPS.map(g => (
                    <option key={g.id} value={g.id}>{g.icon} {g.name} ({g.tempRange})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1.5">Kênh Giao Hàng:</label>
                <select
                  value={formData.channel}
                  onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white font-semibold"
                >
                  <option value="MT">Kênh MT - Tổng Kho DC Siêu Thị (WinMart, Co.op, GO!...)</option>
                  <option value="GT">Kênh GT - Đại lý / Nhà phân phối tỉnh / HORECA</option>
                  <option value="EX">Kênh Xuất Khẩu / Container RF</option>
                </select>
              </div>
            </div>

            {/* Row 4: Route Locations */}
            <div className="space-y-3">
              <div>
                <label className="block text-slate-300 font-bold mb-1">Địa Điểm Lấy Hàng (Pickup):</label>
                <input
                  type="text"
                  value={formData.pickupAddress}
                  onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Địa Điểm Giao Hàng (Drop-off):</label>
                <input
                  type="text"
                  value={formData.deliveryAddress}
                  onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                  required
                />
              </div>
            </div>

            {/* Row 5: Date, Time & Quantity */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-slate-300 font-bold mb-1">Ngày Lấy Hàng:</label>
                <input
                  type="date"
                  value={formData.pickupDate}
                  onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Khung Giờ Lấy:</label>
                <input
                  type="time"
                  value={formData.pickupTime}
                  onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-mono"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Trọng Lượng (Tấn):</label>
                <input
                  type="text"
                  value={formData.weightTons}
                  onChange={(e) => setFormData({ ...formData, weightTons: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-bold"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Số Pallet:</label>
                <input
                  type="text"
                  value={formData.palletCount}
                  onChange={(e) => setFormData({ ...formData, palletCount: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white font-bold"
                  required
                />
              </div>
            </div>

            {/* Row 6: Special Instructions */}
            <div>
              <label className="block text-slate-300 font-bold mb-1">Ghi Chú Đặc Thù Vận Tải LC Foods:</label>
              <textarea
                rows={3}
                value={formData.specialNotes}
                onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-xs leading-relaxed"
              />
            </div>

            {/* Submit Buttons */}
            <div className="pt-4 border-t border-slate-800 flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl font-bold bg-slate-800 hover:bg-slate-700 text-slate-300"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-950/50 flex items-center space-x-2 transition"
              >
                <Send className="w-4 h-4" />
                <span>Gửi Yêu Cầu Báo Giá</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
