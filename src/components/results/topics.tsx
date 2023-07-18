import { MyContext } from "@/context"
import { Suspense, useContext } from "react"

export const Topics = ({children}:any) => {
    const { dataGitHub } = useContext(MyContext)
    return (
        <Suspense fallback={<p>carregando...</p>}>

        <div className="flex flex-col h-[calc(100vh-81px)] overflow-auto scrollbar-none w-full p-6 bg-gray-950/95">
        {dataGitHub && dataGitHub.total_count > 0 && (
          <p>Results: {dataGitHub.total_count}</p>
        )}            <ul>
                {
                    dataGitHub.items?.map((item: any, index: number) => {
                        return (
                            <li key={index} className="flex border p-5 rounded-lg my-5 gap-x-4 items-center justify-between ">
                                <div>
                                    <h2 className="uppercase hover:text-white font-bold">{item.display_name}</h2>
                                    <p className="text-gray-400 max-w-xl py-1.5">{item.short_description}</p>
                                </div>
                                <p>{item.released}</p>
                                {children}
                                {/* <ButtonAddFavourites /> */}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </Suspense>

    )
}
