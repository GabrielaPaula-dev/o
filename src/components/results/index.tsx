'use client'
// import { addFavorites } from "@/store/actions/add-favorites"
// import { useDispatch } from "react-redux"
import { MyContext } from "@/context"
import { useContext } from "react"
import Image from "next/image"
import { ButtonAddFavourites } from "../buttons/add-favourites"

function Results() {
    // const dispatch = useDispatch()
    const { dataGitHub, filterSelect } = useContext(MyContext)
    if (filterSelect === "repositories") {
        return (
            <div className="flex flex-col h-[calc(100vh-81px)] overflow-auto scrollbar-none w-full p-6 bg-gray-950/95">
                <p>{dataGitHub.total_count}</p>
                <ul>
                    {
                        dataGitHub.items?.map((item: any, index: number) => {
                            return (
                                <li key={index} className="flex border p-5 rounded-lg my-5 gap-x-4 items-center justify-between ">
                                    <Image
                                        src={item.owner?.avatar_url}
                                        height={60}
                                        width={60}
                                        alt="Foto de Perfil"
                                        className="rounded-full border-4"
                                    />
                                    <div className="mr-auto">
                                        <a
                                            href={item.html_url}
                                            target="_blank"
                                            className="uppercase hover:text-white"
                                        >
                                            {item.full_name}
                                        </a>
                                        <p className="text-gray-400 max-w-md"
                                        >{item.description}</p>
                                    </div>
                                    <div className="mr-60">
                                        <p className="flex gap-x-2 text-blue-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                                        </svg>
                                            {item.language}</p>
                                        <p className="text-gray-400 font-bold pt-2.5">{item.created_at}</p>
                                    </div>
                                    <ButtonAddFavourites />
                                </li>
                            )
                        })


                    }
                </ul>
            </div>
        )
    } else if (filterSelect === "users") {
        return (
            <div className="flex flex-col h-[calc(100vh-81px)] overflow-auto scrollbar-none w-full p-6 bg-gray-950/95">
                <p>{dataGitHub.total_count}</p>
                <ul>
                    {
                        dataGitHub.items?.map((item: any, index: number) => {
                            return (
                                <li key={index} className="flex border p-5 rounded-lg my-5 gap-x-4 items-center justify-between ">
                                    <div className="flex items-center gap-x-4">
                                        <Image
                                            src={item.avatar_url}
                                            height={60}
                                            width={60}
                                            alt="Foto de Perfil"
                                            className="rounded-full border-4"
                                        />
                                        <a
                                            href={item.html_url}
                                            target="_blank"
                                            className=" text-lg uppercase hover:text-white hover:font-bold"
                                        >
                                            {item.login}
                                        </a>
                                    </div>
                                    <ButtonAddFavourites />
                                </li>
                            )
                        })


                    }
                </ul>
            </div>
        )
    } else if (filterSelect === "commits") {
        return (
            <div className="flex flex-col h-[calc(100vh-81px)] overflow-auto scrollbar-none w-full p-6 bg-gray-950/95">
                <p>{dataGitHub.total_count}</p>
                <ul>
                    {
                        dataGitHub.items?.map((item: any, index: number) => {
                            return (
                                <li key={index} className="flex border p-5 rounded-lg my-5 gap-x-4 items-center ">
                                    <Image
                                        src={item.author?.avatar_url}
                                        height={60}
                                        width={60}
                                        alt="Foto de Perfil"
                                        className="rounded-full border-4"
                                    />
                                    <div className="mr-auto">
                                        <a
                                            href={item.author?.html_url}
                                            target="_blank"
                                            className="uppercase hover:text-white"
                                        >
                                            {item.author?.login}
                                        </a>
                                        <p className="text-gray-400 max-w-md py-1.5">{item.commit?.message}</p>
                                    </div>
                                    <div className="mr-28">
                                        <p>{item.commit?.author?.date}</p>
                                    </div>
                                    <ButtonAddFavourites />
                                </li>
                            )
                        })


                    }
                </ul>
            </div>
        )
    } else if (filterSelect === "topics") {
        return (
            <div className="flex flex-col h-[calc(100vh-81px)] overflow-auto scrollbar-none w-full p-6 bg-gray-950/95">
                <p>{dataGitHub.total_count}</p>
                <ul>
                    {
                        dataGitHub.items?.map((item: any, index: number) => {
                            return (
                                <li key={index} className="flex border p-5 rounded-lg my-5 gap-x-4 items-center justify-between ">
                                    <div>
                                        <h2 className="uppercase hover:text-white font-bold">{item.display_name}</h2>
                                        <p className="text-gray-400 max-w-xl py-1.5">{item.short_description}</p>
                                    </div>
                                    <p>{item.released}</p>
                                    <ButtonAddFavourites />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    else if (filterSelect === "issues") {
        return (
            <div className="flex flex-col h-[calc(100vh-81px)] overflow-auto scrollbar-none w-full p-6 bg-gray-950/95">
                <p>{dataGitHub.total_count}</p>
                <ul>
                    {
                        dataGitHub.items?.map((item: any, index: number) => {
                            return (
                                <li key={index} className="flex border p-5 rounded-lg my-5 gap-x-4 items-center justify-between ">
                                    <Image
                                        src={item.user?.avatar_url}
                                        height={60}
                                        width={60}
                                        alt="Foto de Perfil"
                                        className="rounded-full border-4"
                                    />
                                    <h2>{item.title}</h2>
                                    <p>{item.created_at}</p>
                                    <p>{item.number}</p>
                                    <ButtonAddFavourites />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export { Results }