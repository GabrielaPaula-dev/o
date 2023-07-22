import { Skeleton } from "./skeleton"
import "./css.css"

export const Loading = () => {

    return (
        <div className="flex flex-col p-5 grow loading-wrapper">
            <div className=" rounded-sm h-4 w-24 mb-2 bg-gray-500 item"></div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
    )
}

