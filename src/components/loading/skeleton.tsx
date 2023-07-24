import "./animationSkeleton.css"
export const Skeleton = () => {
    return (
        <div className=" flex border p-5 rounded-lg my-3 items-center justify-between skeleton">
            <div className="h-14 w-14 rounded-full bg-gray-500 item"></div>
            <div className="flex flex-col gap-y-3 justify-center w-3/4 ">
                <div className="rounded-sm h-1.5 w-40 bg-gray-500 item"></div>
                <div className=" rounded-sm h-2 w-60 bg-gray-500 item"></div>
            </div>
            <div className="rounded-sm h-7 w-28 bg-gray-500 item"></div>
        </div>
    )
}