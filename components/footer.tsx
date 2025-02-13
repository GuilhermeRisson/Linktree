import Link from "next/link"
import type React from "react"

interface SocialLink {
  icon: React.ReactNode
  href: string
  label: string
}

interface FooterProps {
  socialLinks: SocialLink[]
}

export default function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="flex flex-col items-center gap-4 text-center">
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <Link key={link.href} href={link.href} aria-label={link.label} className="relative group p-2">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-zinc-400 hover:text-white transition-colors">{link.icon}</span>
          </Link>
        ))}
      </div>
      <p className="text-sm text-zinc-500">Built with Next.js and Tailwind CSS</p>
    </footer>
  )
}

