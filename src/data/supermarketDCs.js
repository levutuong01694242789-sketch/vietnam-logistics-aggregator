export const SUPERMARKET_DCS = [
  {
    id: 'winmart_dc_south',
    name: 'Tổng Kho WinMart DC Miền Nam',
    chain: 'WinMart / WinMart+',
    location: 'KCN Sóng Thần 2, Dĩ An, Bình Dương',
    region: 'Miền Nam',
    receivingHours: '06:00 - 16:00 (Yêu cầu hẹn Time-Slot qua Portal Masan)',
    tempRules: {
      frozen: 'Thực phẩm đông lạnh (Há cảo, sủi cảo, xúc xích): Nhiệt độ đo tại tâm sản phẩm ≤ -18°C. Bề mặt thùng không đọng nước/tan tuyết.',
      chilled: 'Thực phẩm mát (Xúc xích tươi, chả lụa): 0°C đến 4°C.',
      ambient: 'Thực phẩm khô: Nhiệt độ phòng, thùng carton sấy khô.'
    },
    palletSpecs: 'Pallet gỗ/nhựa 1200 x 1000 mm, quấn màng PE tối thiểu 3 lớp, chiều cao không quá 1.6m.',
    latePenaltyNote: 'Trễ hẹn khung giờ (Time-Slot) quá 30 phút bị phạt lùi lịch giao cuối ngày hoặc từ chối nhận hàng.'
  },
  {
    id: 'coop_dc_binhduong',
    name: 'Tổng Kho Saigon Co.op DC Bình Dương',
    chain: 'Co.opmart / Co.opXtra / Co.op Food',
    location: 'KCN Lê Minh Xuân & Dĩ An, Bình Dương',
    region: 'Miền Nam',
    receivingHours: '05:30 - 15:30 (Ưu tiên xe đông lạnh trước 09:00 AM)',
    tempRules: {
      frozen: 'Đông lạnh âm sâu ≤ -18°C. Có bảng ghi nhật ký nhiệt độ xe tải trong suốt hành trình.',
      chilled: '0°C đến 5°C.',
      ambient: 'Khô ráo, có nhãn tem Co.op Barcode trên từng thùng.'
    },
    palletSpecs: 'Standard Pallet 1.2m x 1m. Đảm bảo tem phụ tiếng Việt & Ngày sản xuất/Hạn sử dụng rõ nét.',
    latePenaltyNote: 'Hàng đông lạnh trả về lập biên bản nếu nhiệt độ thùng xe > -15°C.'
  },
  {
    id: 'central_go_dc',
    name: 'Tổng Kho Central Retail (GO! / Big C DC)',
    chain: 'GO! / Big C / Tops Market',
    location: 'KCN Tân Bình & Bắc Ninh',
    region: 'Toàn Quốc',
    receivingHours: '07:00 - 17:00',
    tempRules: {
      frozen: 'Đông lạnh -18°C đến -22°C. Kiểm tra súng nhiệt hồng ngoại ngẫu nhiên 5 vị trí thùng.',
      chilled: '2°C đến 5°C.',
      ambient: 'Khô ráo sạch sẽ.'
    },
    palletSpecs: 'Pallet tiêu chuẩn EU/Vietnam. Chiều cao pallet ≤ 1.7m bao gồm đế.',
    latePenaltyNote: 'Kiểm soát chặt chẽ tỷ lệ thiếu hàng (Shortage penalty 5% trị giá đơn).'
  },
  {
    id: 'bhx_dc_longan',
    name: 'Tổng Kho Bách Hóa Xanh DC',
    chain: 'Bách Hóa Xanh',
    location: 'KCN Tân Đức, Đức Hòa, Long An & Hưng Yên',
    region: 'Toàn Quốc',
    receivingHours: '24/7 (Phân ca hẹn giờ theo xe)',
    tempRules: {
      frozen: 'Giao nhanh, kiểm soát nhiệt độ nghiêm ngặt ≤ -18°C.',
      chilled: '0°C - 4°C.',
      ambient: 'Thùng nguyên đai nguyên kiện.'
    },
    palletSpecs: 'Xếp pallet theo sơ đồ khóa luân phiên chống đổ vỡ.',
    latePenaltyNote: 'Yêu cầu hoàn tất biên bản giao nhận POD điện tử lập tức.'
  }
];
