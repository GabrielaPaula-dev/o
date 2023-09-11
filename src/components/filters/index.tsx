'use client'
import { MyContext } from "@/context"
import { useContext, useEffect } from "react"

const Filters = () => {
    const { active, setActive, setFilterSelect, filterSelect, handleKeyUp, setDataGitHub, SearchApi, dataGitHub,inputValue } = useContext(MyContext)
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
    
    const renderInfoFilter = (filter: string) => {
        if (inputValue.trim() != "") {
          setFilterSelect(filter);
        }
      };
    return (
        <>
            {active && (
                <div className="filters bg-gray-950 min-w-max sm:h-[calc(100vh-81px)] h-80 border-r pt-10  px-5 pr-12 md:pr-16 ">
                    <h4
                        className="xl:text-2xl font-bold sm:pb-12 pb-6 md:text-xl text-md">
                        Filter by Category
                    </h4>
                    <div className="filter-type flex flex-col items-start sm:gap-y-10 gap-y-5 md:text-lg text-sm">
                        <button
                            className={filterSelect === "repositories" ? "border-s-2 pl-1" : "hover:border-s-2 hover:pl-1"}
                            onKeyUp={handleKeyUp}
                            onClick={() =>
                                renderInfoFilter("repositories")
                            }>
                            Repositórios
                        </button>
                        <button
                            className={filterSelect === "users" ? "border-s-2 pl-1" : "hover:border-s-2 hover:pl-1"}
                            onKeyUp={handleKeyUp}
                            onClick={() =>
                                renderInfoFilter("users")}>
                            Usuários
                        </button>
                        <button
                            className={filterSelect === "commits" ? "border-s-2 pl-1" : "hover:border-s-2 hover:pl-1"}
                            onKeyUp={handleKeyUp}
                            onClick={() =>
                                renderInfoFilter("commits")}>
                            Commits
                        </button>
                        <button
                            className={filterSelect === "topics" ? "border-s-2 pl-1" : "hover:border-s-2 hover:pl-1"}
                            onKeyUp={handleKeyUp}
                            onClick={() =>
                                renderInfoFilter("topics")}>
                            Topics
                        </button>
                        <button
                            className={filterSelect === "issues" ? "border-s-2 pl-1" : "hover:border-s-2 hover:pl-1"}
                            onKeyUp={handleKeyUp}
                            onClick={() =>
                                renderInfoFilter("issues")}>
                            Issues
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
export { Filters }
