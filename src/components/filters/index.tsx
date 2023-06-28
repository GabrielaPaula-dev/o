'use client'
import { MyContext } from "@/context"
import { useContext } from "react"

const Filters = () => {
    const { setFilterSelect, handleKeyUp, setDataGitHub, handleButtonClick } = useContext(MyContext)
    return (
        <div className="filters bg-gray-950 w-3/12 h-[calc(100vh-81px)] border-r pt-10 px-5">
            <h4
                className="text-2xl font-bold pb-12">
                Filter by Category
            </h4>
            <div className="filter-type flex flex-col items-start gap-y-10 text-lg">
                <button
                    className="hover:border-s-2 hover:pl-1"
                    onKeyUp={handleKeyUp}
                    onClick={() => {
                        setFilterSelect("repositories")
                        setDataGitHub([])
                    }}>
                    Repositórios
                </button>
                <button
                    className="hover:border-s-2 hover:pl-1"
                    onKeyUp={handleKeyUp}
                    onClick={() => {
                        handleButtonClick

                        setFilterSelect("users")
                    }}>
                    Usuários
                </button>
                <button
                    className="hover:border-s-2 hover:pl-1"
                    onKeyUp={handleKeyUp}
                    onClick={() => setFilterSelect("commits")}>
                    Commits
                </button>
                <button
                    className="hover:border-s-2 hover:pl-1"
                    onKeyUp={handleKeyUp}
                    onClick={() => setFilterSelect("topics")}>
                    Topics
                </button>
                <button
                    className="hover:border-s-2 hover:pl-1"
                    onKeyUp={handleKeyUp}
                    onClick={() => setFilterSelect("issues")}>
                    Issues
                </button>
            </div>
        </div>
    )
}
export { Filters }
