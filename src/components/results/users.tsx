import { MyContext } from "@/context"
import Image from "next/image"
import { useContext } from "react"

export const Users = ({ children }: any) => {
    const { dataGitHub } = useContext(MyContext)

    return (
            <div className="flex flex-col h-[calc(100vh-81px)] grow overflow-auto scrollbar-none w-fit p-6 bg-gray-950/95">
                {dataGitHub && dataGitHub.total_count > 0 && (
                    <p>Results: {dataGitHub.total_count}</p>
                )}
                <ul>
                    {
                        dataGitHub.items?.map((item: any, index: number) => {
                            return (
                                <li key={index} className="flex border p-5 rounded-lg my-5 gap-x-4 items-center justify-between ">
                                    <div className="flex items-center gap-x-4">
                                        {item.avatar_url && <Image
                                            src={item.avatar_url}
                                            height={60}
                                            width={60}
                                            alt="Foto de Perfil"
                                            className="rounded-full border-4"
                                        />}
                                        <a
                                            href={item.html_url}
                                            target="_blank"
                                            className=" text-lg uppercase hover:text-white hover:font-bold"
                                        >
                                            {item.login}
                                        </a>
                                    </div>
                                    {children}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
    )
}