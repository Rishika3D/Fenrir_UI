import React, { useState } from 'react'
import AuthLayout from './AuthLayout'
import SocialButtons from './SocialButtons'
import { EyeIcon, EyeOffIcon } from './Icons'

const Signup = ({ navigate }) => {
  const [form, setForm] = useState({
    fName: '', lName: '', email: '', password: '', agreedToTerms: false,
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.fName.trim()) e.fName = 'First name is required'
    if (!form.lName.trim()) e.lName = 'Last name is required'
    if (!form.email.trim()) { e.email = 'Email is required' }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { e.email = 'Enter a valid email address' }
    if (!form.password) { e.password = 'Password is required' }
    else if (form.password.length < 8) { e.password = 'Password must be at least 8 characters' }
    if (!form.agreedToTerms) e.agreedToTerms = 'You must agree to the terms'
    return e
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
    if (errors[name]) setErrors({ ...errors, [name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    navigate('dashboard')
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border bg-white text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-teal-500 focus:ring-1 focus:ring-teal-500 ${
      errors[field] ? 'border-red-400' : 'border-gray-200'
    }`

  return (
    <AuthLayout>
      <div className="text-center mb-7">
        <h2 className="text-2xl font-bold text-gray-900 mb-1.5">Sign up</h2>
        <p className="text-sm text-gray-500">
          Already have an account?{' '}
          <button type="button" onClick={() => navigate('login')}
            className="text-teal-500 font-medium hover:underline cursor-pointer bg-transparent border-none p-0">
            Log in
          </button>
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3.5">
          <input type="text" name="fName" value={form.fName} onChange={handleChange}
            placeholder="First name*" className={inputClass('fName')} />
          {errors.fName && <p className="mt-1 text-xs text-red-500">{errors.fName}</p>}
        </div>

        <div className="mb-3.5">
          <input type="text" name="lName" value={form.lName} onChange={handleChange}
            placeholder="Last name*" className={inputClass('lName')} />
          {errors.lName && <p className="mt-1 text-xs text-red-500">{errors.lName}</p>}
        </div>

        <div className="mb-3.5">
          <input type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="Email address*" className={inputClass('email')} />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <div className="relative flex items-center">
            <input type={showPassword ? 'text' : 'password'} name="password" value={form.password}
              onChange={handleChange} placeholder="Password (8+ characters)*"
              className={`${inputClass('password')} pr-11`} />
            <button type="button" onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-gray-400 hover:text-gray-600">
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
        </div>

        <div className="mb-6">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input type="checkbox" name="agreedToTerms" checked={form.agreedToTerms}
              onChange={handleChange}
              className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-teal-500 shrink-0 cursor-pointer" />
            <span className="text-xs text-gray-500 leading-relaxed">
              I agree to Aps's{' '}
              <a href="/terms" className="text-teal-500 hover:underline">Terms &amp; Conditions</a>{' '}
              and acknowledge the{' '}
              <a href="/privacy" className="text-teal-500 hover:underline">Privacy Policy</a>
            </span>
          </label>
          {errors.agreedToTerms && <p className="mt-1 text-xs text-red-500">{errors.agreedToTerms}</p>}
        </div>

        <button type="submit"
          className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer mb-4">
          Create account
        </button>

        <SocialButtons />
      </form>
    </AuthLayout>
  )
}

export default Signup
