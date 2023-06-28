'use client'
import { createContext, useState } from "react";
import { IProvider, IProviderProps } from "./types";

export const MyContext = createContext({} as IProvider);

export const MyContextProvider = ({ children }: IProviderProps) => {
    const [filterSelect, setFilterSelect] = useState("repositories");
    const [searchSubmit, setSearchSubmit] = useState("");
    const [dataGitHub, setDataGitHub] = useState([]); 
    console.log(searchSubmit)
    const handleButtonClick = async () => {
            if (searchSubmit != "") {
                const response = await fetch(`https://api.github.com/search/${filterSelect}?q=${searchSubmit}`)
                const data = await response.json();
                setDataGitHub(data)
                console.log(data); 
            }else{
                setDataGitHub([])
            }
    };
    const handleKeyUp = (e: { which: number; keyCode: number; }) => {
        const key = e.which || e.keyCode;
        const isEnterKeyPressed = key === 13;
        if (isEnterKeyPressed) {
            if (filterSelect != "" || filterSelect != undefined) {
                return handleButtonClick()
            }
        }
    }
    return (
        <MyContext.Provider value={{ filterSelect, setFilterSelect, searchSubmit, setSearchSubmit, handleButtonClick, dataGitHub, setDataGitHub, handleKeyUp }}>
            {children}
        </MyContext.Provider>
    );
};
