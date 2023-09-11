import { Skeleton } from "./skeleton"
// import "./animationSkeleton.css"

export const Loading = () => {

    return (
        <div className="flex flex-col p-5 grow loading-wrapper animate-puls">
            <div className=" rounded-sm h-4 w-24 mb-2 bg-gray-500 item animate-pulse"></div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
    )
}

