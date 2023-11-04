'use client'
import { ChangeEvent, createContext, useState } from "react";
import { IProvider, IProviderProps, ICommit } from "./types";

export const MyContext = createContext({} as IProvider);

export const MyContextProvider = ({ children }: IProviderProps) => {
    const [active, setActive] = useState(false)
    const [addFavorite,setAddFavorite]=useState(false)
    const [filterSelect, setFilterSelect] = useState("");
    const [searchSubmit, setSearchSubmit] = useState("");
    const [dataGitHub, setDataGitHub] = useState({});
    const [inputValue, setInputValue] = useState("");

    const SearchApi = async () => {
        if (searchSubmit != "") {
            const response = await fetch(`https://api.github.com/search/${filterSelect}?q=${searchSubmit}`)
            const data = await response.json();
            console.log(data);
            switch (filterSelect) {
                case "commits":
                    const commit:ICommit = {
                        img: data.author?.avatar_url,
                        urlName:data.author?.html_url,
                        nameUser:data.author?.login,
                        message: data.commit?.message,
                        date:data.commit?.author?.date
                    }
                    setDataGitHub(commit)
                    break;
                default:
                    setDataGitHub(data)
                    break;
            }
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
        <MyContext.Provider value={{ active, setActive, filterSelect, setFilterSelect, searchSubmit, setSearchSubmit, SearchApi, handleKeyUp,addFavorite,setAddFavorite,handleInputChange, inputValue, searchRepositories,}}>
            {children}
        </MyContext.Provider>
    );
};
