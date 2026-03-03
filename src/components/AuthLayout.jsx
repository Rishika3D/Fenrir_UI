import React from 'react'
import { CheckIcon, StarIcon } from './Icons'

const features = [
  'Effortlessly spider and map targets to uncover hidden security flaws',
  'Deliver high-quality, validated findings in hours, not weeks.',
  'Generate professional, enterprise-grade security reports automatically.',
]

const AuthLayout = ({ children }) => (
  <div
    className="min-h-screen flex"
    style={{
      background: `
  radial-gradient(ellipse 72% 80% at 80% 82%, rgba(220, 55, 0, 0.92) 0%, transparent 65%),
  radial-gradient(ellipse 38% 28% at 96% 3%, rgba(0, 145, 125, 0.6) 0%, transparent 55%),
  #070b0a`
    }}
  >
    {/* Left branding panel */}
    <div className="hidden lg:flex flex-1 flex-col px-14 py-12 text-white">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-white" />
        </div>
        <span className="text-lg font-semibold tracking-wide">aps</span>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-lg">
        <h1 className="text-4xl font-bold leading-tight mb-8">
          Expert level Cybersecurity in{' '}
          <span className="text-teal-400">hours</span> not weeks.
        </h1>
        <p className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
          What's included
        </p>
        <ul className="space-y-3">
          {features.map((feat, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300 leading-snug">
              <span className="mt-0.5 shrink-0"><CheckIcon /></span>
              {feat}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-1.5 mb-1">
          <StarIcon />
          <span className="text-sm font-semibold">Trustpilot</span>
        </div>
        <p className="text-sm text-gray-400">
          Rated <span className="font-bold text-white">4.5/5.0</span>{' '}
          <span className="text-gray-500">(100k+ reviews)</span>
        </p>
      </div>
    </div>

    <div className="flex items-center justify-start w-full lg:w-[500px] pl-6 pr-10 py-10">
      <div className="bg-white rounded-2xl shadow-2xl w-full px-9 py-9">
        {children}
      </div>
    </div>
  </div>
)

export default AuthLayout
