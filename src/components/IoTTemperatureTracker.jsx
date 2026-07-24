import React, { useState, useEffect } from 'react';
import { Activity, Snowflake, ShieldCheck, MapPin, Truck, AlertCircle, RefreshCw, Radio } from 'lucide-react';

// Simulated Datalogger readings (last 12 time ticks)
const INITIAL_LOGS = [
  { time: '08:00', temp: -20.5, status: 'NORMAL' },
  { time: '08:15', temp: -20.2, status: 'NORMAL' },
  { time: '08:30', temp: -19.8, status: 'NORMAL' },
  { time: '08:45', temp: -20.1, status: 'NORMAL' },
  { time: '09:00', temp: -20.4, status: 'NORMAL' },
  { time: '09:15', temp: -20.0, status: 'NORMAL' },
  { time: '09:30', temp: -19.6, status: 'NORMAL' },
  { time: '09:45', temp: -19.9, status: 'NORMAL' },
  { time: '10:00', temp: -20.3, status: 'NORMAL' },
  { time: '10:15', temp: -20.1, status: 'NORMAL' },
  { time: '10:30', temp: -20.4, status: 'NORMAL' },
  { time: '10:45', temp: -20.2, status: 'NORMAL' },
];

export default function IoTTemperatureTracker() {
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [isSimulatingAlert, setIsSimulatingAlert] = useState(false);

  const currentTemp = logs[logs.length - 1].temp;
  const isHealthy = currentTemp <= -18.0;

  const toggleSimulation = () => {
    if (!isSimulatingAlert) {
      // Add a spike up to -16.5°C to simulate an alert
      setLogs(prev => [
        ...prev.slice(1),
        { time: '11:00', temp: -16.2, status: 'BREACH' }
      ]);
      setIsSimulatingAlert(true);
    } else {
      setLogs(INITIAL_LOGS);
      setIsSimulatingAlert(false);
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/30">
              <Activity className="w-7 h-7 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-2xl font-display font-bold text-white">
                  Giám Sát Nhiệt Độ IoT Real-Time (Cold Chain Tracker)
                </h2>
                <span className="flex items-center space-x-1 px-2.5 py-0.5 text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full">
                  <Radio className="w-3 h-3 animate-ping text-emerald-400" />
                  <span>GPS ThermoKing Live</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Theo dõi liên tục 5 phút/lần đảm bảo lô hàng Há cảo & Sủi cảo LC FOODS giữ chuẩn -20°C tới Tổng kho DC WinMart.
              </p>
            </div>
          </div>

          <button
            onClick={toggleSimulation}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs border transition flex items-center space-x-2 ${
              isSimulatingAlert
                ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{isSimulatingAlert ? 'Đặt lại trạng thái chuẩn' : 'Mô phỏng sự cố tăng nhiệt'}</span>
          </button>
        </div>

        {/* Live Truck Details Banner */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Mã Chuyến Hàng:</span>
            <span className="font-extrabold text-white">LC-SHIP-88902</span>
          </div>

          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Biển Số Xe / Nhà Xe:</span>
            <span className="font-bold text-slate-200">51H-982.34 (ABA Cooltrans)</span>
          </div>

          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Tài Xế Phụ Trách:</span>
            <span className="font-bold text-slate-200">Nguyễn Văn Hùng (0903-888-xxx)</span>
          </div>

          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Hành Trình:</span>
            <span className="font-bold text-rose-400">NM LC Foods → DC WinMart BD</span>
          </div>
        </div>

        {/* Big Temperature Gauge & Alert Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          
          {/* Temperature Status Gauge */}
          <div className={`lg:col-span-5 p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
            isHealthy
              ? 'bg-gradient-to-br from-sky-950/40 via-slate-950 to-slate-900 border-sky-500/40 shadow-xl shadow-sky-950/30'
              : 'bg-gradient-to-br from-rose-950/60 via-slate-950 to-slate-900 border-rose-500 shadow-2xl shadow-rose-950/50'
          }`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase">Cảm Biến Thùng Xe #1:</span>
                <span className={`px-2.5 py-1 text-xs font-extrabold rounded-full ${
                  isHealthy ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/50'
                }`}>
                  {isHealthy ? 'Đạt Chuẩn Âm Sâu' : 'CẢNH BÁO TĂNG NHIỆT'}
                </span>
              </div>

              {/* Big Temp Number */}
              <div className="my-6 text-center">
                <span className={`text-6xl font-display font-black tracking-tight ${
                  isHealthy ? 'text-sky-400' : 'text-rose-500 animate-pulse'
                }`}>
                  {currentTemp.toFixed(1)}°C
                </span>
                <span className="block text-xs font-semibold text-slate-400 mt-2">
                  Nhiệt độ mục tiêu: -20.0°C (Ngưỡng tối đa: -18.0°C)
                </span>
              </div>
            </div>

            {/* Health / Alert status description */}
            <div className={`p-4 rounded-2xl border text-xs leading-relaxed ${
              isHealthy
                ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                : 'bg-rose-950/80 border-rose-500 text-rose-200 font-bold'
            }`}>
              {isHealthy ? (
                <div className="flex items-start space-x-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>
                    Chất lượng sủi cảo & há cảo LC Foods hoàn toàn được bảo vệ. Không phát hiện dấu hiệu đứt gãy chuỗi lạnh.
                  </span>
                </div>
              ) : (
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0 animate-bounce" />
                  <span>
                    Cảnh báo! Nhiệt độ vượt ngưỡng -18°C. Hệ thống tự động gửi tin nhắn SMS khẩn cấp tới tài xế & Quản lý vận tải LC Foods!
                  </span>
                </div>
              )}
            </div>

          </div>

          {/* Datalogger Chart Simulation */}
          <div className="lg:col-span-7 p-6 rounded-3xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="font-display font-bold text-sm text-white">Biểu Đồ Nhật Ký Nhiệt Độ Theo Thời Gian (Datalogger)</span>
                <span className="text-xs text-slate-400 font-mono">Đo tự động 15p/lần</span>
              </div>

              {/* Visual Bar Graph Simulation */}
              <div className="mt-6 h-48 flex items-end justify-between space-x-2 px-2 border-b border-slate-800 pb-2 relative">
                
                {/* Threshold Reference Line */}
                <div className="absolute left-0 right-0 top-[35%] border-b border-dashed border-rose-500/60 z-10 flex justify-between px-2">
                  <span className="text-[10px] font-bold text-rose-400 bg-slate-950 px-1 -mt-2.5">
                    Ngưỡng tối đa (-18°C)
                  </span>
                </div>

                {logs.map((log, idx) => {
                  // Map temp (-22 to -15) to bar height percentage
                  const normalizedHeight = Math.min(100, Math.max(10, ((-log.temp - 15) / 8) * 100));
                  const isBreach = log.temp > -18.0;

                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center group relative">
                      {/* Hover Tooltip */}
                      <div className="absolute -top-8 hidden group-hover:block bg-slate-900 border border-slate-700 text-white text-[10px] font-bold px-2 py-1 rounded shadow z-20 whitespace-nowrap">
                        {log.time}: {log.temp}°C
                      </div>

                      {/* Bar */}
                      <div
                        style={{ height: `${normalizedHeight}%` }}
                        className={`w-full max-w-[28px] rounded-t-lg transition-all duration-300 ${
                          isBreach
                            ? 'bg-rose-500 shadow-lg shadow-rose-950'
                            : 'bg-gradient-to-t from-sky-600 to-cyan-400 shadow-md shadow-sky-950'
                        }`}
                      />
                      <span className="text-[10px] font-mono text-slate-400 mt-2 rotate-45 sm:rotate-0">
                        {log.time}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>* Dữ liệu datalogger được tự động lưu trữ trên Cloud phục vụ nghiệm thu với kho siêu thị.</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
