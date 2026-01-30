import { Outlet } from 'react-router-dom'
import Header from '@/features/navigation/components/Header'
import Footer from '@/features/navigation/components/Footer'

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-[#67AEFF]/30">
      {/* Header dùng chung cho mọi trang chính */}
      <Header />
      
      {/* Main content: Nơi chứa nội dung của các page như Home, Routine... */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer dùng chung cho mọi trang chính */}
      <Footer />
    </div>
  )
}