'use client'
import { createContext, useState } from "react";
import { IProvider, IProviderProps } from "./types";

export const MyContext = createContext({} as IProvider);

export const MyContextProvider = ({ children }: IProviderProps) => {
    const [active, setActive] = useState(false)
    const [addFavorite,setAddFavorite]=useState(false)
    const [filterSelect, setFilterSelect] = useState("");
    const [searchSubmit, setSearchSubmit] = useState("");
    const [dataGitHub, setDataGitHub] = useState([]);
    const SearchApi = async () => {
        if (searchSubmit != "") {
            const response = await fetch(`https://api.github.com/search/${filterSelect}?q=${searchSubmit}`)
            const data = await response.json();
            setDataGitHub(data)
        } else {
            setDataGitHub([])
        }
    };
    const handleKeyUp = (e: { which: number; keyCode: number; }) => {
        const key = e.which || e.keyCode;
        const isEnterKeyPressed = key === 13;
        if (isEnterKeyPressed) {
            if (filterSelect != "" || filterSelect != undefined) {

                setFilterSelect("repositories")

                return SearchApi()
            }
        }
    }
    return (
        <MyContext.Provider value={{ active, setActive, filterSelect, setFilterSelect, searchSubmit, setSearchSubmit, SearchApi, dataGitHub, setDataGitHub, handleKeyUp,addFavorite,setAddFavorite }}>
            {children}
        </MyContext.Provider>
    );
};
