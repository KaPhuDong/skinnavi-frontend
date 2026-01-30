import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Search, Menu } from 'lucide-react';
import Logo from '@/shared/assets/images/Logo_Skinnavi.jpg';

const Header = () => {
  const [hoveredTab, setHoveredTab] = useState(null);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Routine', href: '/routine' },
    { label: 'Tracking', href: '/tracking' },
    { label: 'About', href: '/about' },
  ];

  // Định nghĩa màu chủ đạo để dễ quản lý
  const brandColor = "#67AEFF";

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        
        {/* Logo SkinNavi */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="flex items-center cursor-pointer"
        >
          <div className="h-10 w-auto overflow-hidden rounded-lg">
            <img 
              src={Logo} 
              alt="SkinNavi Logo" 
              className="h-full w-full object-contain"
            />
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoveredTab(item.label)}
              onMouseLeave={() => setHoveredTab(null)}
              className="relative px-4 py-2 text-[15px] font-semibold text-slate-600 transition-colors"
              style={{ color: hoveredTab === item.label ? brandColor : undefined }}
            >
              <span className="relative z-10">{item.label}</span>
              
              {/* Hiệu ứng viên thuốc (Pill) chạy dưới chữ */}
              {hoveredTab === item.label && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 z-0 rounded-full"
                  style={{ backgroundColor: `${brandColor}15` }} // Độ mờ 15%
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Nút Thông báo */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative flex h-10 w-10 items-center justify-center rounded-full transition-all"
            style={{ 
              backgroundColor: `${brandColor}10`, // Nền xanh nhạt
              color: brandColor 
            }}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white">
              2
            </span>
          </motion.button>

          {/* User Profile */}
          <motion.div 
            whileHover={{ boxShadow: `0 0 15px ${brandColor}40`, scale: 1.05 }}
            className="h-11 w-11 shrink-0 cursor-pointer overflow-hidden rounded-full border-2 transition-all"
            style={{ borderColor: brandColor }}
          >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
              alt="User"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Mobile Menu (Hiển thị khi màn hình nhỏ) */}
          <button className="md:hidden p-2 text-slate-600">
            <Menu className="h-6 w-6" />
          </button>
        </div>

      </div>
    </motion.header>
  );
};

export default Header;