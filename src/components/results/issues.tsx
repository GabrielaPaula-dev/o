import { MyContext } from "@/context"
import moment from "moment"
import Image from "next/image"
import { useContext } from "react"
import { ButtonAddFavourites } from "../buttons/add-favourites"

export const Issues = ({children}:any) => {
    const { dataGitHub } = useContext(MyContext)
    return (
        <div className="flex flex-col h-[calc(100vh-81px)] grow overflow-auto scrollbar-none w-fit p-6 bg-gray-950/95">
        {dataGitHub && dataGitHub.total_count > 0 && (
          <p>Results: {dataGitHub.total_count}</p>
        )}            <ul>
                {
                    dataGitHub.items?.map((item: any, index: number) => {
                        return (
                            <li key={index} className="flex border p-5 rounded-lg my-5 gap-x-4 items-center justify-between ">
                                {item.user?.avatar_url && <Image
                                    src={item.user?.avatar_url}
                                    height={60}
                                    width={60}
                                    alt="Foto de Perfil"
                                    className="rounded-full border-4"
                                />}
                                <h2 className="w-1/2 -ml-10">{item.title}</h2>
                                <p>{moment(item.created_at).format("DD/MM/YYYY - HH:MM")}</p>
                                <p>{item.number}</p>
                                <ButtonAddFavourites item={{
                                    id: item.id,
                                    img:item.user?.avatar_url,
                                    type:"issue",
                                    name:item.title,
                                }}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}