'use client'
import { ChangeEvent, createContext, useState } from "react";
import { IProvider, IProviderProps } from "./types";
import { useDispatch } from "react-redux";
import { add, remove } from "@/features/favorite/slice";

export const MyContext = createContext({} as IProvider);

export const MyContextProvider = ({ children }: IProviderProps) => {
    const [active, setActive] = useState(false)
    const [addFavorite,setAddFavorite]=useState(false)
    const [filterSelect, setFilterSelect] = useState("");
    const [searchSubmit, setSearchSubmit] = useState("");
    const [dataGitHub, setDataGitHub] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const SearchApi = async () => {
        if (searchSubmit != "") {
            const response = await fetch(`https://api.github.com/search/${filterSelect}?q=${searchSubmit}`)
            const data = await response.json();
            setDataGitHub(data)
        }
    };
    const searchRepositories = () => {
        if (inputValue.trim() !== "") {
          setFilterSelect("repositories");
        }
      };
    const handleKeyUp = (e: { which: number; keyCode: number; }) => {
        const key = e.which || e.keyCode;
        const isEnterKeyPressed = key === 13;
        if (isEnterKeyPressed) {
            if (filterSelect != "" || filterSelect != undefined) {
                SearchApi()
                return searchRepositories()
            }
        }
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setSearchSubmit(event.target.value);
      };
     
    return (
        <MyContext.Provider value={{ active, setActive, filterSelect, setFilterSelect, searchSubmit, setSearchSubmit, SearchApi, dataGitHub, setDataGitHub, handleKeyUp,addFavorite,setAddFavorite,handleInputChange, inputValue, searchRepositories,}}>
            {children}
        </MyContext.Provider>
    );
};
