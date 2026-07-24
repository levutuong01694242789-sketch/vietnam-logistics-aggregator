@echo off
chcp 65001 >nul
title Đăng Repo VietLogis Food Lên GitHub
echo ========================================================
echo   ĐĂNG REPO VIETLOGIS FOOD LÊN GITHUB (USER: levutuong01694242789-sketch)
echo ========================================================
echo.
echo Đang tiến hành Push dữ liệu lên GitHub...
echo.
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo --------------------------------------------------------
    echo [LƯU Ý]: Nếu báo "Repository not found", bạn vui lòng:
    echo 1. Truy cập https://github.com/new
    echo 2. Tạo Repo mới tên: vietnam-logistics-aggregator
    echo 3. Sau đó chạy lại file DANG_LEN_GITHUB.bat này là xong!
    echo --------------------------------------------------------
) else (
    echo.
    echo [THÀNH CÔNG] Repo đã được đăng tải lên GitHub thành công!
    echo Link: https://github.com/levutuong01694242789-sketch/vietnam-logistics-aggregator
)

echo.
pause
