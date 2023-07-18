// import { addFavorites } from "@/store/actions/add-favorites"
// import { useDispatch } from "react-redux"
import "./star.css"

const ButtonAddFavourites = ({ item }: any) => {
    // const dispatch = useDispatch()
    // onClick={() => dispatch(addFavorites({item}))} 
    return (
        <>
            <label htmlFor="star">
                <input type="checkbox" id="star" />
                <svg viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
            </label>
        </>
    )
}
export { ButtonAddFavourites }