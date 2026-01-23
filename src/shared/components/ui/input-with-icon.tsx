import React from 'react'
import { cn } from '@/shared/lib/utils'

interface InputWithIconProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode
  label: string
}

export const InputWithIcon = ({ icon, label, className, ...props }: InputWithIconProps) => {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-foreground ml-1">{label}</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</div>
        <input
          className={cn(
            'w-full pl-10 pr-4 py-2.5 bg-background border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-ring/50 transition-all placeholder:text-muted-foreground/50',
            className
          )}
          {...props}
        />
      </div>
    </div>
  )
}
