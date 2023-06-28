'use server'
import { Filters } from "@/components/filters"
import { Header } from "@/components/header"
import { Results } from "@/components/results"
import { MyContextProvider } from "@/context"
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
          <Results />
        </div>
      </MyContextProvider>
      {/* </Provider> */}
    </>
  )
}
