import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MainLayout } from '@/shared/layouts/MainLayout'
import Register from '@/features/auth/pages/Register'
import Home from '@/features/main/pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Nhóm các trang dùng chung Header & Footer */}
        <Route element={<MainLayout />}>
          {/* Mặc định vào trang chủ */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          
          {/* Ví dụ thêm trang sau này: 
          <Route path="/routine" element={<RoutinePage />} /> 
          */}
        </Route>

        {/* 2. Các trang độc lập (Không có Header/Footer chung) */}
        <Route path="/register" element={<Register />} />

        {/* 3. Trang lỗi 404 */}
        <Route
          path="*"
          element={
            <div className="flex h-screen items-center justify-center">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App