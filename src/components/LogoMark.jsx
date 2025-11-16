import React from 'react'

// Simple stylized Superman "S" shield and Batman bat silhouette as inline SVGs
// Light mode: Superman (primary red/yellow)
// Dark mode: Batman (black/yellow)

export function SupermanLogo({ className = '', size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      aria-label="Superman logo"
      role="img"
    >
      <defs>
        <linearGradient id="sup-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFDD00" />
          <stop offset="100%" stopColor="#FFC100" />
        </linearGradient>
      </defs>
      <g>
        <path
          d="M128 10L16 98l40 44 72 104 72-104 40-44L128 10z"
          fill="#E21C23"
        />
        <path
          d="M128 36L48 98l25 28h110l25-28-80-62z"
          fill="url(#sup-grad)"
        />
        <path
          d="M160 98h-24l-8 18h-24l16-40h40l-8 22z"
          fill="#E21C23"
          opacity="0.85"
        />
      </g>
    </svg>
  )
}

export function BatmanLogo({ className = '', size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      className={className}
      aria-label="Batman logo"
      role="img"
    >
      <defs>
        <radialGradient id="bat-grad" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#FFE34A" />
          <stop offset="100%" stopColor="#FFC300" />
        </radialGradient>
      </defs>
      <circle cx="128" cy="128" r="110" fill="url(#bat-grad)" />
      <path
        d="M48 140c14-26 36-44 63-49 5-9 10-14 17-14s12 5 17 14c27 5 49 23 63 49-10-8-21-12-33-12-6 10-17 15-29 12-8 12-19 18-35 18s-27-6-35-18c-12 3-23-2-29-12-12 0-23 4-33 12z"
        fill="#151515"
      />
    </svg>
  )
}

export default function LogoMark({ isDark, size = 40 }) {
  return isDark ? (
    <BatmanLogo size={size} />
  ) : (
    <SupermanLogo size={size} />
  )
}
