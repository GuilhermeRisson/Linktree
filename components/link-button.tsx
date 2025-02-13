import Link from "next/link"
import type React from "react"

interface LinkButtonProps {
  href: string
  title: string
  description: string
  icon: React.ReactNode
}

export default function LinkButton({ href, title, description, icon }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="group relative flex items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:scale-105"
    >
      <div className="absolute inset-0 rounded-xl bg-zinc-800/50 backdrop-blur-sm" />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute inset-0 rounded-xl border border-zinc-800 group-hover:border-zinc-700 transition-colors" />
      <span className="relative p-2 rounded-lg bg-zinc-800 text-purple-400 group-hover:text-cyan-400 transition-colors">
        {icon}
      </span>
      <div className="relative space-y-1 flex-1">
        <h2 className="font-medium text-zinc-100">{title}</h2>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </Link>
  )
}

