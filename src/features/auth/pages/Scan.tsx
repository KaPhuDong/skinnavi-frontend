import { Button } from '@/shared/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function Scan() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-6">
      <div className="relative w-full max-w-6xl bg-[#cfe4ff] rounded-3xl p-6 md:p-12 overflow-hidden">
        <button className="absolute top-6 left-6 h-12 w-12 rounded-full bg-[#b7d4ff] border-2 border-blue-300 flex items-center justify-center shadow-sm hover:opacity-90 transition">
          <ArrowLeft className="h-5 w-5 text-blue-700" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-[30rem] md:h-[30rem] flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-blue-400" />

              <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center">
                <div className="absolute inset-4 rounded-full border-4 border-blue-300" />

                {/* Camera icon block */}
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    className="h-28 w-28 md:h-44 md:w-44"
                  >
                    {/* Camera body */}
                    <rect x="8" y="18" width="48" height="34" rx="8" fill="#60A5FA" />

                    {/* Top bump */}
                    <rect x="20" y="12" width="24" height="12" rx="6" fill="#60A5FA" />

                    {/* Lens outer */}
                    <circle cx="32" cy="35" r="10" fill="white" />

                    {/* Lens inner */}
                    <circle cx="32" cy="35" r="5" fill="#60A5FA" />

                    {/* Flash */}
                    <rect x="44" y="26" width="6" height="4" rx="2" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col items-center">
            <h4 className="text-[26px] md:text-[40px] text-center font-semibold text-gray-800 leading-snug">
              Healthy Skin <br /> Reflection Of Wellness
            </h4>

            <p className="mt-4 text-gray-500 max-w-md text-sm md:text-base">
              We installed Purex dispensers throughout the prison to combat diseases… and it was a
              Roaring Success (as in Roaring Drunk) I mean we had long lines of prisoners.
            </p>

            <Button
              variant="outline"
              className="mt-6 rounded-xl border-blue-400 bg-blue-200 text-blue-700 px-6 py-2 text-sm shadow-sm hover:bg-blue-300 hover:border-blue-500"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
