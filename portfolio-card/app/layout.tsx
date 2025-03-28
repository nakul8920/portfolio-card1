import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Portfolio Card',
  description: 'My professional portfolio card',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}