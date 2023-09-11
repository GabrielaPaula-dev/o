import { MyContext } from "@/context"
import Image from "next/image"
import { useContext } from "react"
import  moment  from "moment"
import { ButtonAddFavourites } from "../buttons/add-favourites"

export const Repositories = () => {
    const { dataGitHub } = useContext(MyContext)

    return (
        <div className="flex flex-col h-[calc(100vh-81px)] overflow-auto scrollbar-none p-6 bg-gray-950/95 grow">
        {dataGitHub && dataGitHub.total_count > 0 && (
          <p>Results: {dataGitHub.total_count}</p>
        )}            <ul>
                {
                    dataGitHub.items?.map((item: any, index: number) => {
                        return (
                            <li key={index} className="flex border p-5 rounded-lg my-5 gap-x-4 items-center justify-between w-auto text-xs lg:text-md xl:text-lg flex-wrap space-y-7 lg:flex-nowrap">
                                {item.owner?.avatar_url && <Image
                                    src={item.owner?.avatar_url}
                                    height={60}
                                    width={60}
                                    alt="Foto de Perfil"
                                    className="rounded-full border-4"
                                />}
                                <div className="mr-auto">
                                    <a
                                        href={item.html_url}
                                        target="_blank"
                                        className="uppercase hover:text-white"
                                    >
                                        {item.full_name}
                                    </a>
                                    <p className="text-gray-400 max-w-md 2xl:max-w-6xl"
                                    >{item.description}</p>
                                </div>
                                <div className="mr-12 2xl:mr-60">
                                    <p className="flex gap-x-2 text-blue-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                                    </svg>
                                        {item.language}</p>
                                    <p className="text-gray-400 font-bold pt-2.5">{moment(item.created_at).format("DD/MM/YYYY - HH:MM")}</p>
                                </div>
                                <ButtonAddFavourites item={{
                                    id: item.id,
                                    img:item.owner?.avatar_url,
                                    type:"repositorie",
                                    name:item.full_name,
                                    url:item.html_url
                                }} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}