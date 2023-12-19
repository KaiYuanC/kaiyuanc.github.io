import './globals.css'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kai Yuan Chi',
  description: 'A place to express myself',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
