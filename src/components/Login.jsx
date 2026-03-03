import React, { useState } from 'react'
import AuthLayout from './AuthLayout'
import SocialButtons from './SocialButtons'
import { EyeIcon, EyeOffIcon } from './Icons'

const Login = ({ navigate }) => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.email.trim()) { e.email = 'Email is required' }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { e.email = 'Enter a valid email address' }
    if (!form.password) e.password = 'Password is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
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
        <h2 className="text-2xl font-bold text-gray-900 mb-1.5">Log in</h2>
        <p className="text-sm text-gray-500">
          Don't have an account?{' '}
          <button type="button" onClick={() => navigate('signup')}
            className="text-teal-500 font-medium hover:underline cursor-pointer bg-transparent border-none p-0">
            Sign up
          </button>
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3.5">
          <input type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="Email address*" className={inputClass('email')} />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-6">
          <div className="relative flex items-center">
            <input type={showPassword ? 'text' : 'password'} name="password" value={form.password}
              onChange={handleChange} placeholder="Password*"
              className={`${inputClass('password')} pr-11`} />
            <button type="button" onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-gray-400 hover:text-gray-600">
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
        </div>

        <button type="submit"
          className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer mb-4">
          Log in
        </button>

        <SocialButtons />
      </form>
    </AuthLayout>
  )
}

export default Login
