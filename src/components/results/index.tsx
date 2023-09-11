'use client'
import { MyContext } from "@/context"
import { useContext } from "react"
import { Repositories } from "./repositories"
import { Users } from "./users"
import { Commits } from "./commits"
import { Topics } from "./topics"
import { Issues } from "./issues"
import { Loading } from "../loading"

const Results = () => {
    const { filterSelect, dataGitHub} = useContext(MyContext)
    if (filterSelect === "repositories") {
            return (
                <>
                    {dataGitHub.items ? (<Repositories />) : (<Loading />)}
                </>
            )
       
    } else if (filterSelect === "users") {
        return (
            <>
                {dataGitHub.items ? (<Users />) : (<Loading />)}
            </>
        )
    } else if (filterSelect === "commits") {
        return (
            <>
                {dataGitHub.items ? (<Commits />) : (<Loading />)}
            </>
        )
    
    } else if (filterSelect === "topics") {
        return (
            <>
                {dataGitHub.items ? (<Topics />) : (<Loading />)}
            </>
        )
    }
    else if (filterSelect === "issues") {
        return (
            <>
                {dataGitHub.items ? (<Issues />) : (<Loading />)}
            </>
        )
    }
    return null
}

export { Results }