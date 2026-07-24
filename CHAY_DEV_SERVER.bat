@echo off
chcp 65001 >nul
title VietLogis Food - React Dev Server
echo ========================================================
echo   KHỞI ĐỘNG MÁY CHỦ VIETLOGIS FOOD (REACT + VITE)
echo ========================================================
echo.
echo Đang chạy npm run dev...
start "" "http://localhost:3000"
cmd /c npm run dev
pause
