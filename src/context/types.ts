import { SetStateAction } from "react";

export interface IProviderProps {
    children: React.ReactNode;
}
export interface IProvider {
    active:boolean,
    setActive: React.Dispatch<SetStateAction<boolean>>,
    addFavorite:boolean,
    setAddFavorite:React.Dispatch<SetStateAction<boolean>>,
    filterSelect: string,
    setFilterSelect: React.Dispatch<SetStateAction<string>>,
    searchSubmit: string,
    setSearchSubmit: React.Dispatch<SetStateAction<string>>,
    SearchApi: () => void,
    dataGitHub: any,
    setDataGitHub: React.Dispatch<SetStateAction<any>>,
    handleKeyUp: (e: { which: number; keyCode: number; }) => void
}

