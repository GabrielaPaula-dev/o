'use server'
import { Filters } from "@/components/filters"
import { Header } from "@/components/header"
import { Loading } from "@/components/loading"
import { Results } from "@/components/results/index"
import { MyContextProvider } from "@/context"
import { Suspense } from "react"
// import store from "@/store"
// import { Provider } from "react-redux"

export default async function Home() {
  return (
    <>
      {/* <Provider store={store} > */}
      <MyContextProvider>
        <Header />
        <div className="flex sm:flex-row flex-col">
          <Filters />
          <Suspense fallback={<Loading/>}>
            <Results />
          </Suspense>
        </div>
      </MyContextProvider >
      {/* </Provider> */}
    </>
  )
}
