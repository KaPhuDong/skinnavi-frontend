import { Hero } from '../components/Hero'
import { PromoCards } from '../components/PromoCards'
import { PopularProducts } from '../components/PopularProducts'
import { SkinImprovement } from '../components/SkinImprovement'
import { InstagramFeed } from '../components/InstagramFeed'

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#67AEFF]/30">
      {/* CI/CD Test Banner */}
      <div className="bg-emerald-500 text-white text-center py-2 font-medium shadow-sm">
        🚀 Trạng thái hệ thống: CI/CD Pipeline đã được triển khai tự động thành công! 🚀
      </div>
      <main>
        <Hero />

        <div className="py-8">
          <PromoCards />
        </div>

        <PopularProducts />

        <SkinImprovement />

        <InstagramFeed />

      </main>

    </div>
  )
}

export default Home