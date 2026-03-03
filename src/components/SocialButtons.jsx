import React from 'react'
import { AppleIcon, GoogleIcon, MetaIcon } from './Icons'


const SocialButtons = () => (
  <div className="grid grid-cols-3 gap-3">
    <button
      type="button"
      aria-label="Continue with Apple"
      className="flex items-center justify-center py-2.5 bg-black hover:bg-gray-900 rounded-full transition-colors cursor-pointer"
    >
      <AppleIcon />
    </button>
    <button
      type="button"
      aria-label="Continue with Google"
      className="flex items-center justify-center py-2.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
    >
      <GoogleIcon />
    </button>
    <button
      type="button"
      aria-label="Continue with Meta"
      className="flex items-center justify-center py-2.5 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors cursor-pointer"
    >
      <MetaIcon />
    </button>
  </div>
)

export default SocialButtons
