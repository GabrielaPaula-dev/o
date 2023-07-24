'use server'
import { ReduxProvider } from '@/features/favorite/provider'
import './globals.css'

// export const metadata = {
//   title:{
//     default: 'GitHub',
//     template:'%s | Github'
//   }
// }
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className="text-gray-200 bg-gray-950 overflow-y-hidden">
        <ReduxProvider>
        {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
