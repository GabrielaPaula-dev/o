'use client'
import { BiSearchAlt } from "react-icons/bi"
import { MyContext } from "@/context"
import Link from "next/link"
import { useContext } from "react"
import Image from "next/image"
// import { useSelector } from "react-redux"
// import favoriteReducer from "../../store/reducers/favorites"


const Header = () => {
    // const favorites = useSelector((state):any => state.favoriteReducer)
    const { setSearchSubmit, handleButtonClick, handleKeyUp } = useContext(MyContext)
    const handleInputChange = (event: any) => {
        setSearchSubmit(event.target.value);
    };
// console.log(favorites)
    return (
        <header className=" flex bg-gray-950 items-center spac border-b ">
            <Image
                src="/logo-github.png"
                alt="Logo do GitHub"
                width={80}
                height={80}
            />
            <input
                type="text"
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
                placeholder="Search to jump..."
                className="w-1/2 bg-transparent rounde px-3.5 py-1.5 placeholder:text-gray-300 border border-r-0 focus:outline-none rounded-l-md"
            />
            <button
                type="submit"
                onClick={handleButtonClick}
                className=" border pr-4 py-2.5 border-l-0 rounded-r-md">
                <BiSearchAlt />
            </button>
            <Link
                href={"/favorites"}
                className="absolute right-16 ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.7}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                </svg>
                <span className="bg-red-700 rounded-full w-full text-center text-xs p-1 absolute bottom-2.5 left-2.5 -scale-75 ">0</span>
            </Link>
        </header>
    )
}

export { Header }
