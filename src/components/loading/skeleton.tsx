export const Skeleton = () => {
    return (
        <div className=" flex border p-5 rounded-lg my-3 items-center justify-between animate-puls ">
            <div className="h-14 w-14 rounded-full bg-gray-500 item animate-pulse"></div>
            <div className="flex flex-col gap-y-3 justify-center md:w-3/4 w-1/2 ">
                <div className="rounded-sm h-1.5 md:w-40 w-20 bg-gray-500 item animate-pulse"></div>
                <div className=" rounded-sm h-2 md:w-60 w-28 bg-gray-500 item animate-pulse"></div>
            </div>
            <div className="rounded-sm h-7 md:w-28 w-24 bg-gray-500 item animate-pulse"></div>
        </div>
    )
}