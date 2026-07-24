export const LC_FOODS_PRODUCT_GROUPS = [
  {
    id: 'frozen_dimsum',
    name: 'Há Cảo & Sủi Cảo Đông Lạnh',
    tempCategory: 'frozen',
    tempRange: '-18°C đến -25°C',
    tempTarget: -20,
    icon: '❄️',
    description: 'Sủi cảo tôm thịt, há cảo ngọc bích, bánh xếp Hàn Quốc, xíu mại, chả giò...',
    mtRequirements: 'Nhiệt độ giao kho DC ≤ -18°C. Thùng carton cứng không bóp méo. Bát đĩa khay nhựa nén giữ nguyên nếp.',
    gtRequirements: 'Xe tải đông lạnh nhỏ hoặc thùng cách nhiệt bảo quản đá khô/gel lạnh trong 6-8 tiếng.',
    storageAdvice: 'Yêu cầu chạy máy lạnh trước 30 phút trước khi xuất kho LC Foods.'
  },
  {
    id: 'frozen_meat_sausage',
    name: 'Xúc Xích & Viên Chiên Đông Lạnh',
    tempCategory: 'frozen',
    tempRange: '-18°C đến -22°C',
    tempTarget: -18,
    icon: '🍢',
    description: 'Xúc xích Đức, xúc xích hồ lô, bò viên, cá viên, tôm viên, chả cá chiên...',
    mtRequirements: 'Đóng pallet gỗ/nhựa chuẩn 1.2m x 1m. Niêm phong tem nhiệt độ trên pallet.',
    gtRequirements: 'Phân phối giao đơn LTL ghép kho đại lý tỉnh. Đơn hàng từ 20kg trở lên.'
  },
  {
    id: 'frozen_processed',
    name: 'Thịt Nguội & Pizza Đông Lạnh',
    tempCategory: 'frozen',
    tempRange: '-18°C đến -22°C',
    tempTarget: -18,
    icon: '🍕',
    description: 'Pizza La Cusina, Bacon hun khói, Jambon, Ba rọi hun khói, Thịt nguội lát...',
    mtRequirements: 'Phân loại theo SKU từng chuỗi siêu thị. Tem phụ barcode rõ ràng.',
    gtRequirements: 'Giao nhà hàng, chuỗi quán ăn, đại lý sỉ.'
  },
  {
    id: 'chilled_sausage',
    name: 'Xúc Xích Tươi & Chả Lụa Mát',
    tempCategory: 'chilled',
    tempRange: '0°C đến 5°C',
    tempTarget: 2,
    icon: '🌭',
    description: 'Xúc xích cocktail mát, chả lụa tươi, pate tươi, giò thủ mát...',
    mtRequirements: 'Thời gian lưu kho siêu thị ngắn (Short lead time). Xe lạnh duy trì 0-4°C.',
    gtRequirements: 'Giao trong ngày (Same-day delivery). Hạn chế rung lắc mạnh.'
  },
  {
    id: 'ambient_sausage',
    name: 'Xúc Xích Tiệt Trùng (Thường)',
    tempCategory: 'ambient',
    tempRange: '15°C đến 30°C (Nhiệt độ phòng)',
    tempTarget: 25,
    icon: '🥓',
    description: 'Xúc xích tiệt trùng Vườn Cây, Xúc xích Heo/Bò tiệt trùng ăn liền...',
    mtRequirements: 'Xe thùng kín chống mưa ẩm. Xếp lớp theo chiều đứng hạn chế móp hộp.',
    gtRequirements: 'Vận chuyển linh hoạt bằng xe tải mui bạt / thùng kín tiêu chuẩn.'
  },
  {
    id: 'ambient_canned_sauce',
    name: 'Đồ Đóng Hộp & Gia Vị Xốt',
    tempCategory: 'ambient',
    tempRange: 'Nhiệt độ phòng (Khô ráo)',
    tempTarget: 25,
    icon: '🥫',
    description: 'Pate lon, sốt ớt, nước xốt chấm La Cusina, gia vị hoàn chỉnh...',
    mtRequirements: 'Đóng thùng carton 24/48 lon. Quấn màng PE co định hình Pallet.',
    gtRequirements: 'Vận chuyển số lượng lớn đường dài Bắc - Nam, Miền Tây, Tây Nguyên.'
  }
];

export const DISTRIBUTION_CHANNELS = [
  {
    id: 'MT',
    name: 'Kênh MT (Modern Trade - Siêu Thị)',
    subtext: 'DC WinMart, Co.opmart, GO!, BHX, Aeon, Lotte Mart',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
    keyFeatures: [
      'Giao theo khung giờ hẹn (Strict Time-Slot)',
      'Quy chuẩn Pallet & Màng quấn PE',
      'Đủ hồ sơ ATVSTP / HACCP / Kiểm nghiệm lô hàng',
      'Cam kết tỷ lệ trễ giờ (Penalties for Late Delivery) ≤ 1%'
    ]
  },
  {
    id: 'GT',
    name: 'Kênh GT (General Trade - Truyền Thống)',
    subtext: 'Nhà phân phối tỉnh, Đại lý Cấp 1, Chợ đầu mối, HORECA',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    keyFeatures: [
      'Giao đa điểm (Multi-drop delivery: 5-15 điểm/tuyến)',
      'Xe tải nhỏ 1.5T - 3.5T vào phố cấm giờ',
      'Dịch vụ thu hộ tiền hàng (COD) & Kiểm đếm tại chỗ',
      'Ghép chuyến tiết kiệm cước (LTL Cold Chain)'
    ]
  },
  {
    id: 'EX',
    name: 'Kênh Xuất Khẩu & Container',
    subtext: 'Cảng Cát Lái, Cảng Hải Phòng, Cửa khẩu Tân Thanh / Móng Cái',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    keyFeatures: [
      'Container lạnh 20ft / 40ft Reefer (RF)',
      'Cài đặt dải nhiệt âm sâu -25°C',
      'Giám sát hành trình GPS & Datalogger 24/7'
    ]
  }
];
