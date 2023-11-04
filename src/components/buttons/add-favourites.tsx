import { useDispatch } from "react-redux"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { add, remove } from "@/features/favorite/slice"
import { useState } from "react";

export const ButtonAddFavourites = ({ item }: any) => {
    const dispatch = useDispatch();
    const [favorite, setFavorite] = useState(false);
    const removeFavorites = () => {
        setFavorite(!favorite);
        dispatch(remove(item.id))
        const favoritesFromStorage = JSON.parse(localStorage.getItem("@favorites") || "[]");
        const updatedFavorites = favoritesFromStorage.filter((favoriteItem: { id: number; }) => favoriteItem.id !== item.id);
        localStorage.setItem("@favorites", JSON.stringify(updatedFavorites))
    }
    const addFavorites = () => {
        setFavorite(!favorite);
        dispatch(add(item));
        const favoritesFromStorage = JSON.parse(localStorage.getItem("@favorites") || "[]");
        favoritesFromStorage.push(item);
        localStorage.setItem("@favorites", JSON.stringify(favoritesFromStorage));
    }
    return (
        <button
            onClick={favorite ? removeFavorites : addFavorites}
            className="flex items-center gap-x-2 uppercase text-xs border py-2.5 px-3 rounded bg-gray-800 "
        >
            {favorite ? (
                <AiFillStar className="text-yellow-500 text-lg" />
            ) : (
                <AiOutlineStar className="text-yellow-500 text-lg" />
            )}

            {favorite ? "remove" : "add favorite"}
        </button>
    );
};