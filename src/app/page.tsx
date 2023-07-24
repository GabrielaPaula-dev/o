'use server'
import { Filters } from "@/components/filters"
import { Header } from "@/components/header"
import { Results } from "@/components/results/index"
import { MyContextProvider } from "@/context"

export default async function Home() {
  return (
    <main>
    
      <MyContextProvider>
        <Header />
        <div className="flex sm:flex-row flex-col">
          <Filters />
            <Results />
        </div>
      </MyContextProvider >
    </main>
  )
}
