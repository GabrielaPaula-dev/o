import { MyContext } from "@/context"
import moment from "moment"
import Image from "next/image"
import { useContext } from "react"
import { ButtonAddFavourites } from "../buttons/add-favourites"
import { __ApiPreviewProps } from "next/dist/server/api-utils"

interface Icommit {
    img: string,
    urlName:string,
    nameUser:string,
    message: string,
    date:string
}

export const Commits = () => {
    const { dataGitHub } = useContext(MyContext)
    console.log(dataGitHub.items)
    return (
        <div className="flex flex-col h-[calc(100vh-81px)] grow overflow-auto scrollbar-none w-fit p-6 bg-gray-950/95">
        {dataGitHub && dataGitHub.total_count > 0 && (
          <p>Results: {dataGitHub.total_count}</p>
        )}            <ul>
                {
                    dataGitHub.items?.map((item: any, index: number) => {
                        const commit:Icommit = {
                            img: item.author?.avatar_url,
                            urlName:item.author?.html_url,
                            nameUser:item.author?.login,
                            message: item.commit?.message,
                            date:item.commit?.author?.date
                        }
                        return (
                            <li key={index} className="flex border p-5 rounded-lg my-5 gap-x-4 items-center  text-xs lg:text-sm  flex-wrap space-y-7 lg:flex-nowrap">
                                {commit.img && <Image
                                    src={commit.img}
                                    height={60}
                                    width={60}
                                    alt="Foto de Perfil"
                                    className="rounded-full border-4"
                                />}
                                <div className="mr-auto">
                                    <a
                                        href={commit.urlName}
                                        target="_blank"
                                        className="uppercase hover:text-white"
                                    >
                                        {commit.nameUser}
                                    </a>
                                    <p className="text-gray-400 max-w-md py-1.5 2xl:max-w-6xl">{commit.message}</p>
                                </div>
                                <div className="mr-28">
                                    <p>{
                                    moment(commit.date).format("DD/MM/YYYY - HH:MM")}</p>
                                </div>
                                <ButtonAddFavourites item={{
                                    id: item.id,
                                    img:commit.img,
                                    type:"commit",
                                    name:commit.nameUser,
                                    url:commit.urlName
                                }} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}