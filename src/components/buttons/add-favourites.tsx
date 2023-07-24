
import { useDispatch } from "react-redux"
import { useState } from "react"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { add, remove } from "@/features/favorite/slice"

export const ButtonAddFavourites = ({ item }: any) => {
    const dispatch = useDispatch();
    const [addFavorite, setAddFavorite] = useState(false);
    console.log(addFavorite)

    const handleOnClick = () => {
        // Se o item já estiver nos favoritos, remova-o
        if (addFavorite) {
            setAddFavorite(!addFavorite);
        
            dispatch(remove(item.id)); // Dispatch da ação "remove" passando o ID do item
        
            // Remove o item do array de favoritos no localStorage
            const favoritesFromStorage = JSON.parse(localStorage.getItem("@favorites") || "[]");
            const updatedFavorites = favoritesFromStorage.filter((favoriteItem: { id: any; }) => favoriteItem.id !== item.id);
            localStorage.setItem("@favorites", JSON.stringify(updatedFavorites));
          } else {
            setAddFavorite(!addFavorite);
        
            dispatch(add(item)); // Dispatch da ação "add" passando o item inteiro
        
            // Adiciona o item ao array de favoritos no localStorage
            const favoritesFromStorage = JSON.parse(localStorage.getItem("@favorites") || "[]");
            favoritesFromStorage.push(item);
            localStorage.setItem("@favorites", JSON.stringify(favoritesFromStorage));
          }
        }
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