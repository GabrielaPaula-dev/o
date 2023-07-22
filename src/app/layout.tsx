'use server'
import './globals.css'
// import {store} from "@/store"
// import { Provider } from "react-redux"

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
      <body className="text-gray-200 bg-gray-950 overflow-y-hidden">
        {/* <Provider store={store} > */}
          <main>{children}</main>
        {/* </Provider> */}

      </body>
    </html>
  )
}
