# VietLogis Food 🚛❄️
> **Sàn Tìm Kiếm, So Sánh & Kết Nối Nhà Vận Chuyển Thực Phẩm Khô & Đông Lạnh Toàn Quốc Tối Ưu Cho LC FOODS (La Cusina)**

[![React Version](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite Version](https://img.shields.io/badge/Vite-4.4.5-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-38BDF8.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![LC FOODS Verified](https://img.shields.io/badge/LC%20FOODS-Verified-rose.svg)](https://lcfoods.vn)

---

## 📌 Giới Thiệu Dự Án

**VietLogis Food** là nền tảng web application chuyên biệt phục vụ công tác quản lý, so sánh cước phí và lựa chọn đơn vị vận tải (logistics) thực phẩm hàng đầu tại Việt Nam. Nền tảng được thiết kế đặc thù theo bài toán phân phối đa dạng ngành hàng của **LC FOODS (La Cusina)**:

- **Hàng Đông Lạnh (-18°C ~ -25°C)**: Há Cảo, Sủi Cảo, Xúc Xích Đông Lạnh, Bò/Cá/Tôm Viên Chiên, Pizza, Thịt Nguội Hun Khói, Bacon... *(Đòi hỏi chuỗi cung ứng lạnh tuyệt đối không ngắt quãng)*.
- **Hàng Mát (0°C ~ 5°C)**: Xúc Xích Tươi, Chả Lụa Mát, Pate...
- **Hàng Khô / Tiệt Trùng (Ambient)**: Xúc Xích Tiệt Trùng Vườn Cây, Đồ Đóng Hộp, Nước Xốt Chấm La Cusina...
- **Đa Kênh Phân Phối**:
  - **Kênh MT (Modern Trade)**: Siêu thị & Tổng kho DC (WinMart DC, Saigon Co.op DC, GO! / Central Retail DC, Bách Hóa Xanh DC, Aeon, Lotte Mart).
  - **Kênh GT (General Trade)**: Đại lý 63 tỉnh thành, Nhà phân phối Cấp 1, Trường học, HORECA.

---

## 🔥 Các Tính Năng Nổi Bật

### 1. 🚛 Cơ Sở Dữ Liệu 12+ Nhà Vận Chuyển Hàng Đầu Việt Nam
Hệ thống tích hợp dữ liệu chi tiết cước phí, dải nhiệt độ, điểm uy tín và chứng chỉ của 12 đơn vị vận tải lạnh & khô lớn nhất:
- **ABA Cooltrans Logistics** *(Số 1 vận tải lạnh Miền Nam & Bắc - Nam)*
- **Swire Cold Storage Vietnam** *(Kho & Vận tải lạnh chuẩn BRC quốc tế)*
- **Viettel Post Cold Chain** *(Bưu chính & Vận tải lạnh 63 tỉnh thành)*
- **New Transport Cold Logistics** *(Chuyên tuyến đường dài Bắc - Nam)*
- **Tân Bảo An Cold Logistics** *(Chuyên tuyến 13 tỉnh Miền Tây ĐBSCL)*
- **Konoike Vina Logistics** *(Tiêu chuẩn vận tải lạnh khắt khe chuẩn Nhật)*
- **Lotte Global Logistics Vietnam** *(Chuỗi cung ứng bán lẻ & kho siêu thị Hàn Quốc)*
- **Nam Hà Nội Coldstream Logistics** *(Đơn vị kho & xe lạnh hàng đầu Miền Bắc)*
- **Mekong Cold Chain Logistics** *(Chuyên xe lạnh Polyurethane vùng ĐBSCL)*
- **Lalamove Refrigerated Van** *(Giao xe van lạnh hỏa tốc 15-30p bù hàng nội thành)*
- **Vinafco Cold Logistics** *(Tập đoàn logistics 35+ năm kinh nghiệm 3 miền)*
- **DHL Supply Chain Vietnam (Cold Division)** *(Dịch vụ logistics 5 sao chuẩn toàn cầu)*

### 2. 🔍 Bộ Lọc Thông Minh (Smart Filters)
- Lọc theo dòng sản phẩm LC Foods (Há Cảo/Sủi Cảo, Xúc Xích Tươi, Đồ Lon/Khô).
- Lọc theo dải nhiệt độ (-18°C đông âm, 0-5°C mát, Ambient khô).
- Lọc theo Vùng Miền: Miền Bắc / Hà Nội, Miền Nam / TP.HCM, Miền Tây / ĐBSCL, Trục Bắc - Nam.
- Lọc theo Kênh Phân Phối (MT Siêu thị vs. GT Truyền thống).

### 3. 📊 Bảng So Sánh Sóng Đôi (Side-by-Side Carrier Comparison)
- So sánh chi tiết cước LTL đông lạnh (VND/kg), FTL nội thành (VND/chuyến), FTL km.
- So sánh điểm **OTIF giao kho DC siêu thị (On-Time In-Full Score)**.
- So sánh chứng nhận HACCP, ISO 22000, BRC & cam kết bồi thường rủi ro.

### 4. 🧮 Công Cụ Tính Cước Tự Động (Shipping Cost Calculator)
- Tính toán tự động theo khoảng cách (km), trọng tải xe (1.5T, 3.5T, 5T, 8T, 15T, Cont 40RF).
- Tính phụ phí nhiệt độ đông lạnh, phụ phí Time-slot & hạ kho DC siêu thị.

### 5. 🏢 Cẩm Nang Quy Chuẩn Giao Kho DC Siêu Thị (Supermarket DC Specs)
- Hướng dẫn khung giờ nhận hàng, quy định nhiệt độ tâm sản phẩm (≤ -18°C), quy chuẩn đóng màng PE & chiều cao Pallet (≤ 1.6m) tại các Tổng kho WinMart, Co.op, GO!, BHX.

### 6. 📡 Mô Phỏng Giám Sát Nhiệt Độ IoT Real-Time (IoT Temperature Tracker)
- Biểu đồ nhật ký nhiệt độ Datalogger 5p/lần (ThermoKing), cảnh báo tức thì khi vượt ngưỡng -18°C.

### 7. ➕ Tính Năng Chủ Động Thêm Nhà Xe Mới
- Cho phép phòng Vận Tải LC Foods tự thêm các đối tác nhà xe quen thuộc vào hệ thống quản lý nội bộ.

---

## 📂 Cấu Trúc Thư Mục Dự Án

```
vietnam-logistics-aggregator/
├── CHAY_APP_1_CHAM.bat               # Batch script 1-Click mở app trên trình duyệt
├── CHAY_DEV_SERVER.bat               # Batch script khởi động React Dev Server
├── VietLogis_Food_LCFoods_App.html   # File Web App HTML/JS 1-Click chạy độc lập
├── index.html                        # Template HTML gốc cho Vite
├── package.json                      # Khai báo dependencies
├── vite.config.js                    # Cấu hình Vite Build & Server
├── LICENSE                           # Giấy phép bản quyền MIT
├── README.md                         # Tài liệu hướng dẫn dự án
└── src/
    ├── main.jsx                      # Entrypoint React
    ├── App.jsx                       # Main App Container
    ├── index.css                     # Tailwind CSS Custom Tokens
    ├── data/
    │   ├── lcFoodsCategories.js      # Dữ liệu danh mục hàng LC Foods & Kênh MT/GT
    │   ├── carriersData.js           # Cơ sở dữ liệu 12+ Nhà vận chuyển toàn quốc
    │   └── supermarketDCs.js         # Quy chuẩn giao hàng các Tổng kho DC Siêu thị
    └── components/
        ├── Header.jsx                # Thanh điều hướng & Logo LC Foods
        ├── SmartFilterBar.jsx        # Bộ lọc thông minh đa tiêu chí
        ├── CarrierCard.jsx           # Thẻ thông tin nhà xe & cước phí
        ├── CarrierComparisonTable.jsx# Bảng so sánh sóng đôi
        ├── ShippingCostCalculator.jsx# Công cụ tính cước chi tiết
        ├── SupermarketDCSpecs.jsx    # Cẩm nang giao kho DC Siêu thị
        ├── IoTTemperatureTracker.jsx # Giám sát cảm biến nhiệt IoT Realtime
        └── RFQBookingModal.jsx       # Form gửi yêu cầu báo giá chào thầu
```

---

## ⚡ Hướng Dẫn Chạy Ứng Dụng

### Cách 1: Chạy 1-Click Không Cần Cài Đặt (Dành cho người dùng Windows)
1. Mở thư mục dự án `vietnam-logistics-aggregator`.
2. **Nhấp đúp (Double-click)** vào file **`CHAY_APP_1_CHAM.bat`** (hoặc file `VietLogis_Food_LCFoods_App.html`).
3. Trình duyệt Chrome / Edge sẽ tự động mở ứng dụng và hoạt động ngay lập tức!

### Cách 2: Chạy Môi Trường Dev (Node.js & React)
```bash
# 1. Di chuyển vào thư mục dự án
cd "C:\Users\My ROG\.gemini\antigravity\scratch\vietnam-logistics-aggregator"

# 2. Cài đặt các thư viện (Dependencies)
npm install

# 3. Khởi chạy máy chủ Dev Server
npm run dev
```
Sau đó truy cập đường dẫn: **`http://localhost:3000`**

### Cách 3: Build Bản Sản Xuất (Production Build)
```bash
npm run build
```
Bản build hoàn chỉnh sẽ được tạo tại thư mục `dist/`.

---

## ⚖️ Giấy Phép (License)
Dự án được phân phối dưới giấy phép [MIT License](LICENSE).

---
*Phát triển bởi Đội ngũ Vận Tải & Logistics **LC FOODS (La Cusina)** © 2026.*
