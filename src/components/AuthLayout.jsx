import React from 'react'
import { CheckIcon, StarIcon } from './Icons'

const features = [
  'Effortlessly spider and map targets to uncover hidden security flaws',
  'Deliver high-quality, validated findings in hours, not weeks.',
  'Generate professional, enterprise-grade security reports automatically.',
]

const AuthLayout = ({ children }) => (
  <div
    className="min-h-screen w-full flex relative overflow-hidden bg-[#070b0a]"
  >
    {/* Subtle Background Gradients */}
    <div className="absolute inset-0 z-0 pointer-events-none" style={{
      background: `
        radial-gradient(ellipse 72% 80% at 80% 82%, rgba(220, 55, 0, 0.4) 0%, transparent 65%),
        radial-gradient(ellipse 38% 28% at 96% 3%, rgba(0, 145, 125, 0.3) 0%, transparent 55%)`
    }} />

    {/* Left branding panel */}
    <div className="hidden lg:flex w-[55%] flex-col px-14 lg:px-20 py-12 text-white z-10">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-white" />
        </div>
        <span className="text-xl font-bold tracking-wide">aps</span>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-lg mt-8">
        <h1 className="text-5xl font-extrabold leading-[1.15] mb-8 tracking-tight">
          Expert level<br />Cybersecurity in<br />
          <span className="text-teal-400">hours</span> not weeks.
        </h1>
        <p className="text-sm font-bold text-gray-400 mb-5 uppercase tracking-widest">
          What's included
        </p>
        <ul className="space-y-4">
          {features.map((feat, i) => (
            <li key={i} className="flex items-start gap-4 text-base font-medium text-gray-300 leading-snug">
              <span className="mt-0.5 shrink-0"><CheckIcon /></span>
              {feat}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2.5 mb-2">
          <StarIcon />
          <span className="text-base font-bold tracking-wide">Trustpilot</span>
        </div>
        <p className="text-sm text-gray-400 font-medium">
          Rated <span className="font-bold text-white">4.5/5.0</span>{' '}
          <span className="text-gray-500 ml-1">(100k+ reviews)</span>
        </p>
      </div>
    </div>

    {/* Right Form Panel */}
    <div className="flex-1 flex items-center justify-center lg:justify-start w-full px-4 sm:px-8 py-10 z-10">
      <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-[420px] px-6 py-8 sm:px-10 sm:py-10 mx-auto">
        {/* Mobile Header (Only visible on small screens) */}
        <div className="flex lg:hidden items-center justify-center gap-2.5 mb-8">
          <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white" />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-wide">aps</span>
        </div>
        {children}
      </div>
    </div>
  </div>
)

export default AuthLayout
