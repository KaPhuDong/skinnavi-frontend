import React from 'react'

interface AuthLayoutProps {
  children: React.ReactNode
  imageSrc: string
}

export const AuthLayout = ({ children, imageSrc }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex">
      <div className="sm:hidden md:flex w-[40%] bg-[#f3f6ff] items-center justify-center p-8">
        <div className="relative w-full max-w-md aspect-4/5 overflow-hidden rounded-2xl">
          <img src={imageSrc} alt="Auth Illustration" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-sm space-y-8">{children}</div>
      </div>
    </div>
  )
}
