import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SJ Chinatowns',
  description: 'San Jose Chinatowns',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
