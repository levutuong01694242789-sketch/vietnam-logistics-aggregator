@echo off
chcp 65001 >nul
title VietLogis Food - Phụ Trách Vận Tải LC FOODS
echo ========================================================
echo   VIETLOGIS FOOD - SÀN SO SÁNH VẬN TẢI THỰC PHẨM LC FOODS
echo ========================================================
echo.
echo Đang mở ứng dụng trên trình duyệt web mặc định...
echo.
start "" "%~dp0VietLogis_Food_LCFoods_App.html"
echo [Xong] Ứng dụng đã mở thành công! Bạn có thể đóng cửa sổ này.
timeout /t 3 >nul
exit
