
import { useDispatch } from "react-redux"
import { useState } from "react"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { add, remove } from "@/features/favorite/slice"

export const ButtonAddFavourites = ({ item }: any) => {
    const dispatch = useDispatch();
    const [addFavorite, setAddFavorite] = useState(false);

    const handleOnClick = () => {
        // Se o item já estiver nos favoritos, remova-o
        if (addFavorite) {
            dispatch(remove(item.id)); // Dispatch da ação "remove" passando o ID do item
        } else {
            dispatch(add(item)); // Dispatch da ação "add" passando o item inteiro
        }
        setAddFavorite(!addFavorite); // Inverte o estado local addFavorite
    };

    return (
        <button
            onClick={handleOnClick} 
            className="flex items-center gap-x-2 uppercase text-sm border py-2.5 px-3 rounded bg-gray-800"
        >
            {addFavorite ? (
                <AiFillStar className="text-yellow-500 text-lg" />
            ) : (
                <AiOutlineStar className="text-yellow-500 text-lg" />
            )}

            {addFavorite ? "remove" : "add favorite"}
        </button>
    );
};