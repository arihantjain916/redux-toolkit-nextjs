import type { Metadata } from 'next'
import './globals.css'
import ReduxProvider from './provider'

export const metadata: Metadata = {
  title: 'react-redux-toolkit',
  description: 'Generated by react-redux-toolkit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
