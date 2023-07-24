'use server'
import Link from "next/link";

export default async function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <p className="text-9xl font-bold font-mono scale-150 tracking-wider text-white/75  ">404</p>
            <h2 className="absolute uppercase font-black text-5xl text-gray-700/95 mb-16 " style={{ textShadow: "5px 2px rgb(0,0,0)" }}>page not found</h2>
            <Link href={"/"} className="mt-8 uppercase py-2 px-3 rounded  border-transparent border-2 hover:border-white text-white transition duration-500 font-medium flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
                </svg>
                home page
            </Link>
        </div>
    )
}
