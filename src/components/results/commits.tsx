import { MyContext } from "@/context"
import moment from "moment"
import Image from "next/image"
import { useContext } from "react"
import { ButtonAddFavourites } from "../buttons/add-favourites"

export const Commits = () => {
    const { dataGitHub } = useContext(MyContext)
    return (
        <div className="flex flex-col h-[calc(100vh-81px)] grow overflow-auto scrollbar-none w-fit p-6 bg-gray-950/95">
        {dataGitHub && dataGitHub.total_count > 0 && (
          <p>Results: {dataGitHub.total_count}</p>
        )}            <ul>
                {
                    dataGitHub.items?.map((item: any, index: number) => {
                        return (
                            <li key={index} className="flex border p-5 rounded-lg my-5 gap-x-4 items-center  text-xs lg:text-md xl:text-lg flex-wrap space-y-7 lg:flex-nowrap">
                                {item.author?.avatar_url && <Image
                                    src={item.author?.avatar_url}
                                    height={60}
                                    width={60}
                                    alt="Foto de Perfil"
                                    className="rounded-full border-4"
                                />}
                                <div className="mr-auto">
                                    <a
                                        href={item.author?.html_url}
                                        target="_blank"
                                        className="uppercase hover:text-white"
                                    >
                                        {item.author?.login}
                                    </a>
                                    <p className="text-gray-400 max-w-md py-1.5 2xl:max-w-6xl">{item.commit?.message}</p>
                                </div>
                                <div className="mr-28">
                                    <p>{
                                    moment(item.commit?.author?.date).format("DD/MM/YYYY - HH:MM")}</p>
                                </div>
                                <ButtonAddFavourites item={{
                                    id: item.id,
                                    img:item.author?.avatar_url,
                                    type:"commit",
                                    name:item.author?.login,
                                    url:item.author?.html_url
                                }} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}