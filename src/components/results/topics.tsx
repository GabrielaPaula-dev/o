import { MyContext } from "@/context"
import { useContext } from "react"
import { ButtonAddFavourites } from "../buttons/add-favourites"

export const Topics = () => {
    const { dataGitHub } = useContext(MyContext)
    return (
        <div className="flex flex-col h-[calc(100vh-81px)] grow overflow-auto scrollbar-none w-fit p-6 bg-gray-950/95">
        {dataGitHub && dataGitHub.total_count > 0 && (
          <p>Results: {dataGitHub.total_count}</p>
        )}            <ul>
                {
                    dataGitHub.items?.map((item: any, index: number) => {
                        return (
                            <li key={index} className="flex border p-5 rounded-lg my-5 gap-x-4 items-center justify-between text-xs lg:text-sm  flex-wrap space-y-7 lg:flex-nowrap">
                                <div>
                                    <h2 className="uppercase hover:text-white font-bold">{item.display_name}</h2>
                                    <p className="text-gray-400 max-w-xl 2xl:max-w-6xl py-1.5">{item.short_description}</p>
                                </div>
                                <p>{item.released}</p>
                                <ButtonAddFavourites item={{
                                    id: item.id,
                                    type:"topic",
                                    name:item.display_name,
                                }} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
