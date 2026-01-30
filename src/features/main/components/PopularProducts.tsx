import { motion } from 'framer-motion'
import { Button } from '@/shared/components/ui/button'
import { ChevronDown } from 'lucide-react'

const products = [
  {
    id: 1,
    name: '50% Off on Creams',
    description: 'Grab exclusive discount curated for you.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80',
    bgColor: 'bg-[#E3F2ED]' // Màu xanh lá nhạt
  },
  {
    id: 2,
    name: '50% Off on Creams',
    description: 'Grab exclusive discount curated for you.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80',
    bgColor: 'bg-[#E7F0F8]' // Màu xanh dương nhạt
  },
  {
    id: 3,
    name: '50% Off on Creams',
    description: 'Grab exclusive discount curated for you.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80',
    bgColor: 'bg-[#F9E8E8]' // Màu hồng nhạt
  }
]

export const PopularProducts = () => {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24 bg-white relative">
      {/* Nút New Arrival nằm tuyệt đối ở góc phải trên Desktop */}
      <div className="absolute top-16 md:top-24 right-6 hidden md:block">
        <Button 
          variant="outline" 
          className="rounded-full text-xs font-semibold border-slate-300 px-5 h-9 flex items-center gap-2 text-slate-600 hover:bg-slate-50 transition-all"
        >
          New Arrival <ChevronDown className="w-4 h-4" />
        </Button>
      </div>

      {/* Header căn giữa hoàn toàn */}
      <div className="flex flex-col items-center text-center mb-16 space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Popular Products
        </h2>
        <p className="text-slate-500 text-sm md:text-base font-medium max-w-lg">
          Discover unbeatable offers on top beauty essentials.
        </p>
        
        {/* Nút hiện ra dưới mô tả khi ở màn hình Mobile */}
        <div className="md:hidden pt-2 w-full">
          <Button 
            variant="outline" 
            className="rounded-full text-xs font-semibold border-slate-300 w-full h-10 flex items-center justify-center gap-2 text-slate-600"
          >
            New Arrival <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Grid sản phẩm */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {products.map((product) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            {/* Thẻ sản phẩm hình vòm */}
            <div className={`${product.bgColor} rounded-[48px] rounded-t-full p-8 transition-all duration-300 flex flex-col items-center h-full`}>
              
              {/* Ảnh sản phẩm hình tròn sạch sẽ */}
              <div className="relative w-full aspect-square rounded-full bg-white overflow-hidden shadow-sm border-[6px] border-white/40">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>

              {/* Thông tin căn lề trái như hình mẫu */}
              <div className="mt-8 w-full text-left px-2">
                <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-[#67AEFF] transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}