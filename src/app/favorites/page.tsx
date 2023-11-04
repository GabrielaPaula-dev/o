'use client'
import Link from "next/link";
import Image from "next/image";
import { BsFillTrash3Fill } from 'react-icons/bs'
import { ImBlocked } from 'react-icons/im'
import { remove } from "@/features/favorite/slice"
import { useDispatch } from "react-redux"
import { useState } from "react";

export default function Favorites() {
    const favorites = JSON.parse(localStorage.getItem("@favorites") || "[]")
    const dispatch = useDispatch();
    const [addFavorite, setAddFavorite] = useState(false);
    const removeFavorites = (id: number) => {
        setAddFavorite(!addFavorite);
        dispatch(remove(id))
        const favoritesFromStorage = JSON.parse(localStorage.getItem("@favorites") || "[]");
        const updatedFavorites = favoritesFromStorage.filter((favoriteItem: { id: number; }) => favoriteItem.id !== id);
        localStorage.setItem("@favorites", JSON.stringify(updatedFavorites))
    }
    const removeAll = () => {
        localStorage.clear()
        document.querySelectorAll(".item-favorite").forEach((item: any) => { item.style.display = "none" })
    }
    return (
        <div className="overflow-y-auto scrollbar-none h-screen">
            <div className="flex justify-between items-center">
                <Link href={"/"} className="uppercase w-min py-2 px-3 mt-8 ml-8 rounded text-white font-medium flex items-center gap-3 border border-transparent hover:border-white transition duration-700 ease-in-out ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
                    </svg>
                    Back
                </Link>
                <button onClick={removeAll} className="flex items-center gap-2 mr-10 mt-8"><ImBlocked />Limpar</button>
            </div>
            {favorites?.map((item: any, index: number) => {
                return (
                    <div key={index} className=" item-favorite flex border p-5 mx-10 rounded-lg my-6 gap-x-4 items-center justify-between w-auto flex-wrap space-y-5 text-xs sm:flex-nowrap sm:text-base sm:space-y-0">
                        <div className="flex items-center gap-4 flex-wrap">
                            <Image
                                src={item.img}
                                height={60}
                                width={60}
                                alt="Foto de Perfil"
                                className="rounded-full border-4"
                            />
                            {item.url ?
                                <a
                                    href={item.url}
                                    target="_blank"
                                    className="uppercase hover:text-white ">
                                    {item.name}
                                </a>

                                : <p className="uppercase hover:text-white">{item.name}</p>
                            }
                        </div>
                        <div className="flex gap-12">
                            <p className=" text-blue-400"> Type: {item.type}</p>
                            <button className="mr-4 hover:opacity-25" onClick={() => removeFavorites(item.id)} ><BsFillTrash3Fill /></button>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}
