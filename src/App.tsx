import React, { useState, useEffect } from 'react';

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzYUQubGlxVwHx8A7Fmr7tqJnBHfm5ISq6B8cGv3pTSVIdWgNvhiBePuBk4tl-tyF3_/exec";

export default function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  return (
    <div className="font-sans min-h-screen bg-gray-50 flex">
      {/* SIDEBAR TRÁI */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between hidden md:flex">
        <div>
          {/* Logo Brand */}
          <div className="p-6 border-b border-gray-100 flex items-center gap-3">
            <div className="bg-emerald-600 text-white font-black p-2.5 rounded-xl text-lg shadow-sm">G</div>
            <div>
              <h1 className="font-black text-gray-900 leading-tight">Go Art Merry</h1>
              <p className="text-[11px] text-gray-400 font-medium tracking-wide">HỆ THỐNG QUẢN LÝ</p>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-4 space-y-6 text-sm font-medium">
            <div className="space-y-1">
              <p className="px-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Vận hành</p>
              <SidebarItem label="Bảng điều khiển" active={currentTab === 'dashboard'} onClick={() => setCurrentTab('dashboard')} />
              <SidebarItem label="Điểm danh & Nhận xét" active={currentTab === 'diemdanh'} onClick={() => setCurrentTab('diemdanh')} />
              <SidebarItem label="Hành trình học" active={currentTab === 'hanhtrinh'} onClick={() => setCurrentTab('hanhtrinh')} />
              <SidebarItem label="Cổng Giáo Viên (Teacher View)" active={currentTab === 'teacherview'} onClick={() => setCurrentTab('teacherview')} />
              <SidebarItem label="Check-in ca dạy" active={currentTab === 'checkin'} onClick={() => setCurrentTab('checkin')} />
              <SidebarItem label="Báo học phí" active={currentTab === 'baohocphi'} onClick={() => setCurrentTab('baohocphi')} />
              <SidebarItem label="Tính lương GV" active={currentTab === 'tinhluong'} onClick={() => setCurrentTab('tinhluong')} />
            </div>

            <div className="space-y-1">
              <p className="px-3 text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Quản lý dữ liệu</p>
              <SidebarItem label="Học viên" active={currentTab === 'hocvien'} onClick={() => setCurrentTab('hocvien')} />
              <SidebarItem label="Xếp lớp" active={currentTab === 'xeplop'} onClick={() => setCurrentTab('xeplop')} />
              <SidebarItem label="Khóa học" active={currentTab === 'khoahoc'} onClick={() => setCurrentTab('khoahoc')} />
              <SidebarItem label="Lớp học" active={currentTab === 'lophoc'} onClick={() => setCurrentTab('lophoc')} />
              <SidebarItem label="Nhân sự" active={currentTab === 'nhansu'} onClick={() => setCurrentTab('nhansu')} />
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-100">
          <button onClick={() => setCurrentTab('parentportal')} className="w-full bg-pink-50 text-pink-600 hover:bg-pink-100 p-2.5 rounded-lg text-xs font-bold transition">
            ✨ Chuyển sang Parent Portal
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto h-screen p-8">
        {currentTab === 'dashboard' && <DashboardView />}
        {currentTab === 'diemdanh' && <DiemDanhView />}
        {currentTab === 'hanhtrinh' && <HanhTrinhView />}
        {currentTab === 'teacherview' && <TeacherPortalView />}
        {currentTab === 'checkin' && <CheckInView />}
        {currentTab === 'baohocphi' && <BaoHocPhiView />}
        {currentTab === 'tinhluong' && <TinhLuongView />}
        {currentTab === 'hocvien' && <HocVienView />}
        {currentTab === 'xeplop' && <XepLopView />}
        {currentTab === 'khoahoc' && <KhoaHocView />}
        {currentTab === 'lophoc' && <LopHocView />}
        {currentTab === 'nhansu' && <NhanSuView />}
        {currentTab === 'parentportal' && <ParentPortalView />}
      </main>
    </div>
  );
}

function SidebarItem({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full text-left px-3 py-2 rounded-lg transition font-medium text-xs flex items-center justify-between ${active ? 'bg-emerald-50 text-emerald-700 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
    >
      <span>{label}</span>
      {active && <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>}
    </button>
  );
}

// ==================== CÁC VIEW CHỨC NĂNG ====================
function DashboardView() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-black text-gray-800">Bảng Điều Khiển Tổng Quan</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-purple-600 mb-1">● TỔNG HỌC VIÊN</p>
          <p className="text-3xl font-black text-gray-900">32</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-blue-600 mb-1">● LỚP HỌC HOẠT ĐỘNG</p>
          <p className="text-3xl font-black text-gray-900">6</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-emerald-600 mb-1">● ĐI HỌC HÔM NAY</p>
          <p className="text-3xl font-black text-gray-900">18</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-red-600 mb-1">● CẦN ĐÓNG HỌC PHÍ</p>
          <p className="text-3xl font-black text-gray-900">3</p>
        </div>
      </div>
    </div>
  );
}

function DiemDanhView() {
  const [selectedDate, setSelectedDate] = useState('2026-10-08');
  const [selectedClass, setSelectedClass] = useState('Piano T7-CN');

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Điểm danh & Nhận xét</h2>
          <p className="text-xs text-gray-400">Ghi nhận sự mặt và quá trình học tập của học viên[cite: 4]</p>
        </div>
        <div className="flex gap-3">
          <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} className="p-2 border rounded-xl text-xs bg-gray-50 font-medium" />
          <select value={selectedClass} onChange={e => setSelectedClass(e.target.value)} className="p-2 border rounded-xl text-xs bg-white font-medium">
            <option value="Piano T7-CN">Piano T7-CN</option>
            <option value="Art Chiều T3">Art Chiều T3</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {/* Dòng 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-gray-50 rounded-xl gap-4 border border-gray-100">
          <div>
            <p className="font-bold text-gray-900">Nguyễn Văn A</p>
            <p className="text-xs text-orange-600 font-semibold mt-0.5">Còn 2 buổi &bull; <span className="text-gray-400 font-normal">Luật vắng (3/4)</span></p>
          </div>
          <div className="flex gap-2">
            {['Có mặt', 'Vắng có phép', 'Vắng không phép', 'Đi học bù'].map((status, idx) => (
              <button key={idx} className="px-3 py-1.5 rounded-lg text-xs font-semibold border bg-white hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-700 transition">
                {status}
              </button>
            ))}
          </div>
          <input type="text" placeholder="Ghi chú buổi học, sự tiến bộ..." className="p-2 border rounded-xl text-xs w-64 bg-white" />
        </div>

        {/* Dòng 2 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-gray-50 rounded-xl gap-4 border border-gray-100">
          <div>
            <p className="font-bold text-gray-900">Trần Thị B</p>
            <p className="text-xs text-emerald-600 font-semibold mt-0.5">Còn 10 buổi &bull; <span className="text-gray-400 font-normal">Luật vắng (0/4)</span></p>
          </div>
          <div className="flex gap-2">
            {['Có mặt', 'Vắng có phép', 'Vắng không phép', 'Đi học bù'].map((status, idx) => (
              <button key={idx} className="px-3 py-1.5 rounded-lg text-xs font-semibold border bg-white hover:bg-emerald-50 hover:border-emerald-600 hover:text-emerald-700 transition">
                {status}
              </button>
            ))}
          </div>
          <input type="text" placeholder="Ghi chú buổi học, sự tiến bộ..." className="p-2 border rounded-xl text-xs w-64 bg-white" />
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold shadow transition">
          ✓ Lưu Điểm danh & Hành trình[cite: 4]
        </button>
      </div>
    </div>
  );
}

function HanhTrinhView() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Hành trình Học viên</h2>
          <p className="text-xs text-gray-400">Theo dõi sự tiến bộ qua từng buổi học</p>
        </div>
        <select className="p-2 border rounded-xl text-xs font-medium bg-white">
          <option>Nguyễn Văn A - 0901234567</option>
          <option>Trần Thị B - 0909876543</option>
        </select>
      </div>

      <div className="border-l-2 border-emerald-500 pl-4 space-y-2 py-2">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-gray-500">01/10/2026 &bull; Piano T7-CN</span>
          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">Có mặt</span>
        </div>
        <p className="text-xs text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100">
          Con hoàn thành tốt bài nhạc Minuet. Cần chú ý thế tay trái.
        </p>
      </div>
    </div>
  );
}

function CheckInView() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Check-in Ca Dạy (Lễ tân)[cite: 7]</h2>
          <p className="text-xs text-gray-400">Xác nhận ca trực của giáo viên và trợ giảng</p>
        </div>
        <input type="date" defaultValue="2026-10-08" className="p-2 border rounded-xl text-xs font-medium bg-gray-50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-2xl space-y-3 bg-gray-50">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-900">Piano T7-CN</h3>
            <span className="text-[11px] text-gray-400">Thời lượng: 1.5 giờ/ca[cite: 7]</span>
          </div>
          <div className="bg-white p-3 rounded-xl border flex justify-between items-center text-xs">
            <span className="font-medium">Thầy Tùng <span className="text-emerald-600 font-bold">(GV)</span>[cite: 7]</span>
            <button className="bg-emerald-50 text-emerald-700 font-bold px-3 py-1 rounded-lg border border-emerald-200">Check-in[cite: 7]</button>
          </div>
        </div>

        <div className="p-4 border rounded-2xl space-y-3 bg-gray-50">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-900">Art Chiều T3</h3>
            <span className="text-[11px] text-gray-400">Thời lượng: 1.5 giờ/ca[cite: 7]</span>
          </div>
          <div className="bg-white p-3 rounded-xl border flex justify-between items-center text-xs">
            <span className="font-medium">Cô Mai <span className="text-emerald-600 font-bold">(GV)</span>[cite: 7]</span>
            <button className="bg-emerald-50 text-emerald-700 font-bold px-3 py-1 rounded-lg border border-emerald-200">Check-in[cite: 7]</button>
          </div>
          <div className="bg-white p-3 rounded-xl border flex justify-between items-center text-xs">
            <span className="font-medium">Trợ giảng A <span className="text-blue-600 font-bold">(TG)</span>[cite: 7]</span>
            <button className="bg-emerald-50 text-emerald-700 font-bold px-3 py-1 rounded-lg border border-emerald-200">Check-in[cite: 7]</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BaoHocPhiView() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
      <div>
        <h2 className="text-lg font-bold text-gray-900">Cảnh báo Học phí (Sắp hết khóa)[cite: 8]</h2>
        <p className="text-xs text-gray-400">Danh sách học viên cần nhắc nộp học phí gia hạn</p>
      </div>

      <div className="overflow-x-auto border rounded-xl">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-gray-100 border-b text-gray-600">
              <th className="p-3">Học viên</th>
              <th className="p-3">Lớp / Khóa</th>
              <th className="p-3">Tình trạng</th>
              <th className="p-3">Cần đóng</th>
              <th className="p-3 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-medium">
            <tr>
              <td className="p-3 font-bold text-gray-900">Nguyễn Văn A</td>
              <td className="p-3">Piano T7-CN <span className="block text-[10px] text-gray-400 font-normal">Piano Cơ Bản 12 Buổi</span>[cite: 8]</td>
              <td className="p-3"><span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-[11px] font-bold">Còn 2 buổi[cite: 8]</span></td>
              <td className="p-3 font-bold text-purple-700">4.500.000 đ <span className="block text-[10px] text-emerald-600 font-normal">Giảm 10%</span>[cite: 8]</td>
              <td className="p-3 text-right"><button className="bg-emerald-50 text-emerald-700 font-bold px-3 py-1.5 rounded-lg border border-emerald-200">Xuất File[cite: 8]</button></td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-gray-900">Lê Hoàng C</td>
              <td className="p-3">Art Chiều T3 <span className="block text-[10px] text-gray-400 font-normal">Mỹ Thuật Sáng Tạo 8 Buổi</span>[cite: 8]</td>
              <td className="p-3"><span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-[11px] font-bold">Còn 1 buổi[cite: 8]</span></td>
              <td className="p-3 font-bold text-purple-700">2.400.000 đ <span className="block text-[10px] text-emerald-600 font-normal">Giảm 20%</span>[cite: 8]</td>
              <td className="p-3 text-right"><button className="bg-emerald-50 text-emerald-700 font-bold px-3 py-1.5 rounded-lg border border-emerald-200">Xuất File[cite: 8]</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TinhLuongView() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
      <div>
        <h2 className="text-lg font-bold text-gray-900">Bảng Tính Lương Giáo Viên</h2>
        <p className="text-xs text-gray-400">Tổng hợp thu nhập giáo viên dựa trên số ca và giờ dạy</p>
      </div>
      <div className="overflow-x-auto border rounded-xl">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-gray-100 border-b text-gray-600">
              <th className="p-3">Giáo viên</th>
              <th className="p-3">Mức lương / Giờ</th>
              <th className="p-3 text-center">Tổng ca dạy</th>
              <th className="p-3 text-center">Tổng giờ</th>
              <th className="p-3 text-right">Tổng lương nhận</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="p-3 font-bold text-gray-900">Thầy Tùng</td>
              <td className="p-3">200.000 đ</td>
              <td className="p-3 text-center">8</td>
              <td className="p-3 text-center">12h</td>
              <td className="p-3 text-right font-black text-emerald-700">2.400.000 đ</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-gray-900">Cô Mai</td>
              <td className="p-3">180.000 đ</td>
              <td className="p-3 text-center">10</td>
              <td className="p-3 text-center">15h</td>
              <td className="p-3 text-right font-black text-emerald-700">2.700.000 đ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function HocVienView() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Quản lý Học viên[cite: 3]</h2>
          <p className="text-xs text-gray-400">Dữ liệu nền tảng hệ thống[cite: 3]</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm">+ Thêm mới[cite: 3]</button>
      </div>
      <div className="overflow-x-auto border rounded-xl">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-gray-100 border-b text-gray-600">
              <th className="p-3">Mã[cite: 3]</th>
              <th className="p-3">Tên học viên[cite: 3]</th>
              <th className="p-3">Điện thoại[cite: 3]</th>
              <th className="p-3 text-right">Thao tác[cite: 3]</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-medium">
            <tr>
              <td className="p-3 font-semibold text-gray-500">S1[cite: 3]</td>
              <td className="p-3 font-bold text-gray-900">Nguyễn Văn A[cite: 3]</td>
              <td className="p-3 text-gray-600">0901234567[cite: 3]</td>
              <td className="p-3 text-right space-x-2">
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">✏️</button>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">🗑️</button>
              </td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-gray-500">S2[cite: 3]</td>
              <td className="p-3 font-bold text-gray-900">Trần Thị B[cite: 3]</td>
              <td className="p-3 text-gray-600">0909876543[cite: 3]</td>
              <td className="p-3 text-right space-x-2">
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">✏️</button>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">🗑️</button>
              </td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-gray-500">S3[cite: 3]</td>
              <td className="p-3 font-bold text-gray-900">Lê Hoàng C[cite: 3]</td>
              <td className="p-3 text-gray-600">0912341234[cite: 3]</td>
              <td className="p-3 text-right space-x-2">
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">✏️</button>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function XepLopView() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Quản lý Xếp lớp (Ghi danh)[cite: 6]</h2>
          <p className="text-xs text-gray-400">Liên kết học viên vào lớp học[cite: 6]</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm">+ Thêm mới[cite: 6]</button>
      </div>
      <div className="overflow-x-auto border rounded-xl">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-gray-100 border-b text-gray-600">
              <th className="p-3">Mã[cite: 6]</th>
              <th className="p-3">Học viên[cite: 6]</th>
              <th className="p-3">Lớp học[cite: 6]</th>
              <th className="p-3">Tiến độ & Học phí[cite: 6]</th>
              <th className="p-3 text-right">Thao tác[cite: 6]</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-medium">
            <tr>
              <td className="p-3 font-semibold text-gray-500">E1[cite: 6]</td>
              <td className="p-3 font-bold text-gray-900">Nguyễn Văn A[cite: 6]</td>
              <td className="p-3 text-emerald-700 font-semibold">Piano T7-CN[cite: 6]</td>
              <td className="p-3 text-orange-600 font-semibold">Còn 2 buổi <span className="block text-[10px] text-gray-400 font-normal">Giảm: 10%[cite: 6]</span></td>
              <td className="p-3 text-right space-x-2">
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">✏️</button>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">🗑️</button>
              </td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-gray-500">E2[cite: 6]</td>
              <td className="p-3 font-bold text-gray-900">Trần Thị B[cite: 6]</td>
              <td className="p-3 text-emerald-700 font-semibold">Piano T7-CN[cite: 6]</td>
              <td className="p-3 text-emerald-600 font-semibold">Còn 10 buổi <span className="block text-[10px] text-gray-400 font-normal">Giảm: 0%[cite: 6]</span></td>
              <td className="p-3 text-right space-x-2">
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">✏️</button>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">🗑️</button>
              </td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-gray-500">E3[cite: 6]</td>
              <td className="p-3 font-bold text-gray-900">Lê Hoàng C[cite: 6]</td>
              <td className="p-3 text-emerald-700 font-semibold">Art Chiều T3[cite: 6]</td>
              <td className="p-3 text-orange-600 font-semibold">Còn 1 buổi <span className="block text-[10px] text-gray-400 font-normal">Giảm: 20%[cite: 6]</span></td>
              <td className="p-3 text-right space-x-2">
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">✏️</button>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function KhoaHocView() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Quản lý Khóa học</h2>
          <p className="text-xs text-gray-400">Cấu hình thông tin khóa học chuẩn</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm">+ Thêm mới</button>
      </div>
      <div className="overflow-x-auto border rounded-xl">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-gray-100 border-b text-gray-600">
              <th className="p-3">Mã</th>
              <th className="p-3">Tên khóa học</th>
              <th className="p-3">Thông tin giá & buổi</th>
              <th className="p-3 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-medium">
            <tr>
              <td className="p-3 font-semibold text-gray-500">C1</td>
              <td className="p-3 font-bold text-gray-900">Piano Cơ Bản 12 Buổi</td>
              <td className="p-3 text-emerald-700 font-semibold">12 buổi - 5.000.000 đ <span className="block text-[10px] text-gray-400 font-normal">Luật vắng tối đa: 4 buổi</span></td>
              <td className="p-3 text-right space-x-2">
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">✏️</button>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LopHocView() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Quản lý Lớp học[cite: 2]</h2>
          <p className="text-xs text-gray-400">Danh sách các lớp đang vận hành[cite: 2]</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm">+ Thêm mới[cite: 2]</button>
      </div>
      <div className="overflow-x-auto border rounded-xl">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-gray-100 border-b text-gray-600">
              <th className="p-3">MÃ[cite: 2]</th>
              <th className="p-3">TÊN LỚP HỌC[cite: 2]</th>
              <th className="p-3 text-right">THAO TÁC[cite: 2]</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-medium">
            <tr>
              <td className="p-3 font-semibold text-gray-500">CL1[cite: 2]</td>
              <td className="p-3 font-bold text-gray-900">Piano T7-CN[cite: 2]</td>
              <td className="p-3 text-right space-x-2">
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">✏️[cite: 2]</button>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">🗑️[cite: 2]</button>
              </td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-gray-500">CL2[cite: 2]</td>
              <td className="p-3 font-bold text-gray-900">Art Chiều T3[cite: 2]</td>
              <td className="p-3 text-right space-x-2">
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">✏️[cite: 2]</button>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">🗑️[cite: 2]</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function NhanSuView() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Quản lý Nhân sự</h2>
          <p className="text-xs text-gray-400">Giáo viên và trợ giảng trung tâm</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm">+ Thêm mới</button>
      </div>
      <div className="overflow-x-auto border rounded-xl">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-gray-100 border-b text-gray-600">
              <th className="p-3">Mã</th>
              <th className="p-3">Tên nhân sự</th>
              <th className="p-3">Mức lương / giờ</th>
              <th className="p-3 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-medium">
            <tr>
              <td className="p-3 font-semibold text-gray-500">T1</td>
              <td className="p-3 font-bold text-gray-900">Thầy Tùng <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded ml-2 font-semibold">Giáo viên</span></td>
              <td className="p-3 font-semibold text-blue-600">200.000 đ</td>
              <td className="p-3 text-right space-x-2">
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">✏️</button>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">🗑️</button>
              </td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-gray-500">T3</td>
              <td className="p-3 font-bold text-gray-900">Trợ giảng A <span className="bg-blue-100 text-blue-800 text-[10px] px-2 py-0.5 rounded ml-2 font-semibold">Trợ giảng</span></td>
              <td className="p-3 font-semibold text-blue-600">100.000 đ</td>
              <td className="p-3 text-right space-x-2">
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">✏️</button>
                <button className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ParentPortalView() {
  const [maHVInput, setMaHVInput] = useState('HV001');
  const [dsHocVien, setDsHocVien] = useState([]);
  const [dsLop, setDsLop] = useState([]);
  const [lopCuaBe, setLopCuaBe] = useState([]);
  const [dsHocPhiCuaBe, setDsHocPhiCuaBe] = useState([]);
  const [formNghiPhep, setFormNghiPhep] = useState({ MaLop: '', NgayNghi: '', LyDo: '' });

  useEffect(() => {
    fetch(`${WEB_APP_URL}?action=getHocVien`).then(res => res.json()).then(data => { if (data.status === 'success') setDsHocVien(data.data); });
    fetch(`${WEB_APP_URL}?action=getLopHoc`).then(res => res.json()).then(data => { if (data.status === 'success') setDsLop(data.data); });
    fetch(`${WEB_APP_URL}?action=getHocPhi`).then(res => res.json()).then(data => {
      if (data.status === 'success') setDsHocPhiCuaBe(data.data.filter(hp: any => hp.MaHV === maHVInput));
    });
  }, [maHVInput]);

  useEffect(() => {
    const currentHV = dsHocVien.find(hv => hv.MaHV === maHVInput);
    if (currentHV) {
      setLopCuaBe(dsLop); 
    } else {
      setLopCuaBe([]);
    }
  }, [maHVInput, dsHocVien, dsLop]);

  const handleXinNghi = async (e) => {
    e.preventDefault();
    const res = await fetch(WEB_APP_URL, { method: 'POST', body: JSON.stringify({ action: 'guiYeuCauBaoNghi', MaHV: maHVInput, ...formNghiPhep }) });
    const result = await res.json(); alert(result.message);
  };

  const handleNhanBaoCaoThang = async () => {
    const res = await fetch(WEB_APP_URL, { method: 'POST', body: JSON.stringify({ action: 'guiBaoCaoThang', MaHV: maHVInput, ThangNam: 'Tháng 10/2026' }) });
    const result = await res.json(); alert(result.message);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div>
          <label className="text-xs text-gray-500 block mb-1 font-medium">Mã Học Viên của bé:</label>
          <input type="text" value={maHVInput} onChange={e => setMaHVInput(e.target.value)} className="p-2 border rounded-xl font-medium text-xs bg-gray-50" />
        </div>
        <div>
          <button onClick={handleNhanBaoCaoThang} className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2.5 rounded-xl font-bold transition text-xs shadow-sm">
            💌 Gửi Báo Cáo Hành Trình Tháng (HTML Email) Qua Gmail
          </button>
        </div>
      </div>

      {/* HÓA ĐƠN ĐIỆN TỬ & CÔNG NỢ CỦA BÉ */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
        <h2 className="text-base font-bold text-pink-700">💳 Hóa Đơn & Tình Trạng Học Phí Của Bé</h2>
        {dsHocPhiCuaBe.length === 0 ? (
          <p className="text-xs text-gray-500 italic p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">Chưa có thông tin hóa đơn học phí cho mã học viên này.</p>
        ) : (
          <div className="overflow-x-auto border rounded-xl">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="bg-gray-100 border-b text-gray-600">
                  <th className="p-3">Mã HĐ</th>
                  <th className="p-3">Khóa Học</th>
                  <th className="p-3">Tổng Tiền</th>
                  <th className="p-3">Trạng Thái</th>
                  <th className="p-3">Hạn Nộp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium">
                {dsHocPhiCuaBe.map((hp, idx) => (
                  <tr key={idx}>
                    <td className="p-3 font-semibold text-gray-500">{hp.MaHD}</td>
                    <td className="p-3 font-bold text-gray-900">{hp.KhoaHoc}</td>
                    <td className="p-3 font-bold text-blue-600">{Number(hp.TongTien || 0).toLocaleString()} VNĐ</td>
                    <td className="p-3"><span className={`px-2 py-1 rounded text-[11px] font-bold ${hp.TrangThai === 'Đã đóng' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>{hp.TrangThai}</span></td>
                    <td className="p-3 text-gray-600">{hp.HanNop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
        <h2 className="text-base font-bold text-pink-700">Form Báo Nghỉ Phép</h2>
        <form onSubmit={handleXinNghi} className="space-y-4 text-xs">
          <div>
            <label className="text-gray-500 block mb-1 font-medium">Chọn lớp học xin nghỉ:</label>
            <select value={formNghiPhep.MaLop} onChange={e => setFormNghiPhep({...formNghiPhep, MaLop: e.target.value})} className="p-2 border rounded-xl w-full bg-white font-medium" required>
              <option value="">-- Chọn lớp học --</option>
              {dsLop.map((lop, idx) => (<option key={idx} value={lop.MaLop}>{lop.MaLop} - {lop.TenLop}</option>))}
            </select>
          </div>
          <div>
            <label className="text-gray-500 block mb-1 font-medium">Ngày xin nghỉ:</label>
            <input type="date" className="p-2 border rounded-xl w-full bg-gray-50 font-medium" onChange={e => setFormNghiPhep({...formNghiPhep, NgayNghi: e.target.value})} required />
          </div>
          <div>
            <label className="text-gray-500 block mb-1 font-medium">Lý do xin nghỉ phép:</label>
            <textarea rows="3" className="p-2 border rounded-xl w-full font-medium" onChange={e => setFormNghiPhep({...formNghiPhep, LyDo: e.target.value})} required />
          </div>
          <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white p-2.5 rounded-xl font-bold transition shadow-sm">
            📤 Gửi Yêu Cầu Nghỉ Phép
          </button>
        </form>
      </div>
    </div>
  );
}

// ==================== CỔNG GIÁO VIÊN (TEACHER PORTAL VIEW) ====================
function TeacherPortalView() {
  const [maGVInput, setMaGVInput] = useState('GV001');
  const [dsLop, setDsLop] = useState([]);
  const [dsHocVien, setDsHocVien] = useState([]);
  const [dsXepLop, setDsXepLop] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  const [selectedLop, setSelectedLop] = useState('');
  const [dsHocVienTrongLop, setDsHocVienTrongLop] = useState([]);
  const [diemDanhData, setDiemDanhData] = useState({});
  const [formClassroom, setFormClassroom] = useState({ TieuDe: '', NoiDung: '', LinkDinhKem: '' });

  useEffect(() => {
    fetch(`${WEB_APP_URL}?action=getLopHocByGV&maGV=${maGVInput}`)
      .then(res => res.json()).then(data => { if (data.status === 'success') setDsLop(data.data); });
      
    fetch(`${WEB_APP_URL}?action=getHocVien`)
      .then(res => res.json()).then(data => { if (data.status === 'success') setDsHocVien(data.data); });
      
    fetch(`${WEB_APP_URL}?action=getXepLop`)
      .then(res => res.json()).then(data => { if (data.status === 'success') setDsXepLop(data.data); });
  }, [maGVInput]);

  useEffect(() => {
    if (selectedLop && dsHocVien.length > 0 && dsXepLop.length > 0) {
      const danhSachMaHV = dsXepLop.filter(xl => xl.MaLop === selectedLop).map(xl => xl.MaHV);
      setDsHocVienTrongLop(dsHocVien.filter(hv => danhSachMaHV.includes(hv.MaHV)));
    } else {
      setDsHocVienTrongLop([]);
    }
  }, [selectedLop, dsHocVien, dsXepLop]);

  const handleSaveAttendance = async (maHV) => {
    const detail = diemDanhData[maHV] || { trangThai: 'Có mặt', nhanXet: '' };
    const payload = { 
      action: 'saveDiemDanh', 
      MaLop: selectedLop, 
      NgayHoc: new Date(selectedDate).toLocaleDateString('vi-VN'), 
      MaHV: maHV, 
      TrangThaiDiemDanh: detail.trangThai, 
      NhanXetTungBuoi: detail.nhanXet || 'Đi học bình thường' 
    };
    const res = await fetch(WEB_APP_URL, { method: 'POST', body: JSON.stringify(payload) });
    const result = await res.json(); 
    alert(result.message);
  };

  const handleDangBaiClassroom = async (e) => {
    e.preventDefault();
    if (!selectedLop) { alert("Vui lòng chọn lớp học!"); return; }
    const res = await fetch(WEB_APP_URL, { 
      method: 'POST', 
      body: JSON.stringify({ action: 'dangBaiClassroom', MaLop: selectedLop, ...formClassroom }) 
    });
    const result = await res.json(); 
    alert(result.message);
  };

  return (
    <div className="space-y-6">
      {/* THANH THÔNG TIN & CHỌN LỚP CỦA GIÁO VIÊN */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div>
          <label className="text-xs text-gray-500 block mb-1 font-medium">Mã Giáo Viên:</label>
          <input type="text" value={maGVInput} onChange={e => setMaGVInput(e.target.value)} className="p-2 border rounded-xl font-medium w-full text-xs bg-gray-50" />
        </div>
        <div>
          <label className="text-xs text-gray-500 block mb-1 font-medium">Ngày điểm danh:</label>
          <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} className="p-2 border rounded-xl font-medium w-full bg-gray-50 text-xs" />
        </div>
        <div>
          <label className="text-xs text-gray-500 block mb-1 font-medium">Chọn lớp phụ trách:</label>
          <select value={selectedLop} onChange={e => setSelectedLop(e.target.value)} className="p-2 border rounded-xl w-full bg-white font-medium text-xs">
            <option value="">-- Chọn lớp học --</option>
            {dsLop.map((lop, idx) => (<option key={idx} value={lop.MaLop}>{lop.MaLop} - {lop.TenLop}</option>))}
          </select>
        </div>
      </div>

      {selectedLop && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* KHU VỰC ĐIỂM DANH HỌC VIÊN */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-base font-bold mb-2 text-emerald-700 flex justify-between items-center">
              <span>📋 Điểm Danh Học Viên</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">Sĩ số: {dsHocVienTrongLop.length}</span>
            </h2>
            <p className="text-xs text-gray-400 mb-4">Ngày: {new Date(selectedDate).toLocaleDateString('vi-VN')}</p>
            
            {dsHocVienTrongLop.length === 0 ? (
              <p className="text-xs text-gray-500 italic border p-4 rounded-xl bg-gray-50 text-center">Lớp này hiện chưa có học viên nào.</p>
            ) : (
              <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2">
                {dsHocVienTrongLop.map((hv, idx) => (
                  <div key={idx} className="border p-4 rounded-xl bg-gray-50 space-y-3 shadow-sm border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900 text-sm">{hv.HoTen} <span className="text-xs text-gray-400 font-normal">({hv.MaHV})</span></span>
                      <select className="p-1.5 border rounded-lg text-xs bg-white font-medium" 
                        onChange={e => setDiemDanhData({...diemDanhData, [hv.MaHV]: {...diemDanhData[hv.MaHV], trangThai: e.target.value}})}>
                        <option value="Có mặt">🟢 Có mặt</option>
                        <option value="Vắng phép">🟡 Vắng phép</option>
                        <option value="Vắng không phép">🔴 Vắng KPH</option>
                      </select>
                    </div>
                    <input type="text" placeholder={`Nhận xét buổi học cho ${hv.HoTen}...`} 
                      className="p-2 border rounded-xl w-full text-xs bg-white" 
                      onChange={e => setDiemDanhData({...diemDanhData, [hv.MaHV]: {...diemDanhData[hv.MaHV], nhanXet: e.target.value}})} 
                    />
                    <button onClick={() => handleSaveAttendance(hv.MaHV)} 
                      className="w-full bg-emerald-600 text-white px-3 py-2 rounded-xl text-xs hover:bg-emerald-700 font-bold transition shadow-sm">
                      💾 Lưu Điểm Danh Em Này
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* KHU VỰC ĐĂNG BÁO BÀI CLASSROOM */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
            <h2 className="text-base font-bold mb-4 text-emerald-700">📢 Đăng Báo Bài Lên Classroom</h2>
            <form onSubmit={handleDangBaiClassroom} className="space-y-4 text-xs">
              <div>
                <label className="text-gray-500 block mb-1 font-medium">Tiêu đề thông báo:</label>
                <input type="text" placeholder="VD: Dặn dò buổi học số 3" className="p-2 border rounded-xl w-full font-medium" onChange={e => setFormClassroom({...formClassroom, TieuDe: e.target.value})} required />
              </div>
              <div>
                <label className="text-gray-500 block mb-1 font-medium">Nội dung chi tiết:</label>
                <textarea placeholder="Nội dung dặn dò, chuẩn bị dụng cụ..." rows="4" className="p-2 border rounded-xl w-full font-medium" onChange={e => setFormClassroom({...formClassroom, NoiDung: e.target.value})} required />
              </div>
              <div>
                <label className="text-gray-500 block mb-1 font-medium">Link tài liệu / YouTube:</label>
                <input type="text" placeholder="https://..." className="p-2 border rounded-xl w-full font-medium" onChange={e => setFormClassroom({...formClassroom, LinkDinhKem: e.target.value})} />
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-xl font-bold shadow-sm transition">
                🚀 Đăng Lên Google Classroom
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
