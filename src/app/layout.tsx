'use server'
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
      <body className="text-gray-200 ">
        <main>{children}</main>
      </body>
    </html>
  )
}
