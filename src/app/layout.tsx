'use server'
import { ReduxProvider } from '@/features/favorite/provider'
import './globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="shortcut icon" href="/logo-github.png" type="image/x-icon"></link>
            <title>GitHub</title>
          </head>
          <body className="text-gray-200 bg-gray-950 overflow-y-hidden">
            <ReduxProvider>
              {children}
            </ReduxProvider>
          </body>
        </html>
        )
}
