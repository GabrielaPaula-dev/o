'use server'
import { Filters } from "@/components/filters"
import { Header } from "@/components/header"
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
        <div className="flex">
          <Filters />
          {/* <Suspense fallback={<p>carregando...</p>}> */}
            <Results />
          {/* </Suspense> */}
        </div>
      </MyContextProvider >
      {/* </Provider> */}
    </>
  )
}
