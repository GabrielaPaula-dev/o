// import { addFavorites } from "@/store/actions/add-favorites"
// import { useDispatch } from "react-redux"

import { useState } from "react"
import { BiStar } from "react-icons/bi"

const ButtonAddFavourites = ({ item }: any) => {
    // const dispatch = useDispatch()
    // onClick={() => dispatch(addFavorites({item}))} 
  
    const [addFavorite,setAddFavorite]=useState(false)

    return (
        <button
        onClick={()=> setAddFavorite(!addFavorite)}
        className="flex items-center gap-x-2 uppercase text-sm border py-2.5 px-3 rounded bg-gray-800"
         >
            <BiStar className={addFavorite ? "bg-yellow-500":"text-yellow-500 text-lg"}/>
           {addFavorite ? "remove" : "add favorite"}
        </button>
    )
}
export { ButtonAddFavourites }