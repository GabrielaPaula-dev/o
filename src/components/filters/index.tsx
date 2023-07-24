'use client'
import { MyContext } from "@/context"
import { useContext, useEffect } from "react"

const Filters = () => {
    const { active, setActive, setFilterSelect, filterSelect, handleKeyUp, setDataGitHub, SearchApi, dataGitHub } = useContext(MyContext)
    if (window.innerWidth > 640) {
        setActive(true)
    }
    useEffect(() => {
        if (dataGitHub) {
            SearchApi();
            setDataGitHub([])
        } else {
            setDataGitHub("")
        }
    }, [filterSelect]);
    return (
        <>
            {active && (
                <div className="filters bg-gray-950 xl:w-1/5 md:w-5/12 sm:w-7/12 sm:h-[calc(100vh-81px)] h-80 border-r pt-10  px-5 ">
                    <h4
                        className="xl:text-2xl font-bold sm:pb-12 pb-6 md:text-xl text-md">
                        Filter by Category
                    </h4>
                    <div className="filter-type flex flex-col items-start sm:gap-y-10 gap-y-5 md:text-lg text-sm">
                        <button
                            className="hover:border-s-2 hover:pl-1"
                            onKeyUp={handleKeyUp}
                            onClick={() =>
                                setFilterSelect("repositories")

                            }>
                            Repositórios
                        </button>
                        <button
                            className="hover:border-s-2 hover:pl-1"
                            onKeyUp={handleKeyUp}
                            onClick={() =>
                                setFilterSelect("users")}>
                            Usuários
                        </button>
                        <button
                            className="hover:border-s-2 hover:pl-1"
                            onKeyUp={handleKeyUp}
                            onClick={() =>
                                setFilterSelect("commits")}>
                            Commits
                        </button>
                        <button
                            className="hover:border-s-2 hover:pl-1"
                            onKeyUp={handleKeyUp}
                            onClick={() =>
                                setFilterSelect("topics")}>
                            Topics
                        </button>
                        <button
                            className="hover:border-s-2 hover:pl-1"
                            onKeyUp={handleKeyUp}
                            onClick={() =>
                                setFilterSelect("issues")}>
                            Issues
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
export { Filters }
