'use client'
import Link from "next/link";
import Image from "next/image";

export default async function Favorites() {
    const favorites = JSON.parse(localStorage.getItem("@favorites") || "[]")
    return (
        <>
            {favorites?.map((item: any, index: number) => {
                return (
                    <div key={index} className="flex border p-5 rounded-lg my-5 gap-x-4 items-center justify-between w-auto">
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
                                className="uppercase hover:text-white">
                                {item.name}
                            </a>

                            : <p className="uppercase hover:text-white">{item.name}</p>
                        }
                        <p className="flex gap-x-2 text-blue-400">Type:{item.type}</p>
                    </div>
                )
            })}
            <Link href={"/"}>voltar</Link>
        </>
    )
}