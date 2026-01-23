import { User, Mail, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/shared/components/ui/button'
import { AuthLayout } from '@/shared/layouts/AuthLayout'
import { Input } from '@/shared/components/ui/input'
import { Field, FieldGroup, FieldLabel } from '@/shared/components/ui/field'
import registerImg from '@/shared/assets/images/register.png'

const Register = () => {
  return (
    <AuthLayout imageSrc={registerImg}>
      {/* Header section căn giữa */}
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-3xl font-bold text-[#A5C9FF] tracking-tight">Create Account</h2>
        <p className="text-muted-foreground text-sm">Join SkinNavi for personalized skincare</p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <FieldGroup className="space-y-4">
          {/* Full Name Field */}
          <Field className="space-y-1.5">
            <FieldLabel className="text-sm font-medium text-slate-700 ml-1">Full Name</FieldLabel>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="John Doe"
                className="pl-10 h-11 rounded-xl border-slate-200 focus:ring-[#A5C9FF] transition-all"
              />
            </div>
          </Field>

          {/* Email Field */}
          <Field className="space-y-1.5">
            <FieldLabel className="text-sm font-medium text-slate-700 ml-1">Email</FieldLabel>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="email"
                placeholder="your@email.com"
                className="pl-10 h-11 rounded-xl border-slate-200 focus:ring-[#A5C9FF] transition-all"
              />
            </div>
          </Field>

          {/* Password Field */}
          <Field className="space-y-1.5">
            <FieldLabel className="text-sm font-medium text-slate-700 ml-1">Password</FieldLabel>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="password"
                placeholder="Create a password"
                className="pl-10 h-11 rounded-xl border-slate-200 focus:ring-[#A5C9FF] transition-all"
              />
            </div>
          </Field>

          {/* Confirm Password Field */}
          <Field className="space-y-1.5">
            <FieldLabel className="text-sm font-medium text-slate-700 ml-1">
              Confirm Password
            </FieldLabel>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="password"
                placeholder="Confirm your password"
                className="pl-10 h-11 rounded-xl border-slate-200 focus:ring-[#A5C9FF] transition-all"
              />
            </div>
          </Field>
        </FieldGroup>

        {/* Terms and conditions */}
        <div className="flex items-center gap-2 px-1">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 rounded-full border-slate-300 text-[#A5C9FF] focus:ring-[#A5C9FF] transition-all"
          />
          <label htmlFor="terms" className="text-xs text-slate-500">
            I agree to the{' '}
            <span className="text-[#A5C9FF] font-semibold cursor-pointer">Terms of Service</span>{' '}
            and <span className="text-[#A5C9FF] font-semibold cursor-pointer">Privacy Policy</span>
          </label>
        </div>

        {/* Primary Action */}
        <Button className="w-full h-12 text-base font-semibold rounded-2xl bg-[#A5C9FF] hover:bg-[#94B8FF] text-white shadow-md shadow-[#A5C9FF]/20 transition-all active:scale-[0.98]">
          Create Account
        </Button>

        {/* Footer */}
        <div className="text-center pt-2">
          <p className="text-sm text-slate-500">
            Already have an account?{' '}
            <Link to="/login" className="text-[#A5C9FF] font-bold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  )
}

export default Register
