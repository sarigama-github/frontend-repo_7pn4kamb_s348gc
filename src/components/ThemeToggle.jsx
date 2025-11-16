import React from 'react'
import * as Switch from '@radix-ui/react-switch'
import LogoMark from './LogoMark'

export default function ThemeToggle({ isDark, setIsDark }) {
  return (
    <div className="flex items-center gap-3">
      <LogoMark isDark={isDark} size={28} />
      <label className="text-sm font-medium select-none" htmlFor="theme-toggle">
        {isDark ? 'Dark' : 'Light'} mode
      </label>
      <Switch.Root
        id="theme-toggle"
        checked={isDark}
        onCheckedChange={setIsDark}
        className="relative inline-flex h-6 w-12 shrink-0 cursor-pointer items-center rounded-full border border-transparent bg-gray-300 transition-colors data-[state=checked]:bg-gray-800"
      >
        <Switch.Thumb
          className="pointer-events-none block h-5 w-5 translate-x-1 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-6"
        />
      </Switch.Root>
    </div>
  )
}
