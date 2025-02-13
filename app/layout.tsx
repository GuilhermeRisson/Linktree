import "@/styles/globals.css"
import { GeistSans } from "geist/font/sans"
import { cn } from "@/lib/utils"
import type React from "react"

export const metadata = {
  title: "Guilherme Risson",
  description: "linktree",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen antialiased", GeistSans.className)}>{children}</body>
    </html>
  )
}

