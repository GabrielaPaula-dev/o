'use client'
import { MyContext } from "@/context"
import { Suspense, useContext, useState } from "react"
import { Repositories } from "./repositories"
import { Users } from "./users"
import { Commits } from "./commits"
import { Topics } from "./topics"
import { Issues } from "./issues"
import { ButtonAddFavourites } from "../buttons/add-favourites"
import { Loading } from "../loading"

const Results = () => {
    const { filterSelect, dataGitHub } = useContext(MyContext)
    

    if (filterSelect === "repositories") {
        return (
            <>
                {dataGitHub.items ? (<Repositories>
                    <ButtonAddFavourites item={Repositories} />
                </Repositories >) : (<Loading/>)}
            </>

        )
    } else if (filterSelect === "users") {
        return (
            <>
                {dataGitHub.items ? (<Users>
                    <ButtonAddFavourites item={Users} />
                </Users >) : (<Loading />)
                }
            </>

        )
    } else if (filterSelect === "commits") {
        return (
            <>
                {dataGitHub.items ? (<Commits>
                    <ButtonAddFavourites item={Commits} />
                </Commits >) : (<Loading />)
                }
            </>

        )
    } else if (filterSelect === "topics") {
        return (
            <>
                {dataGitHub.items ? (<Topics>
                    <ButtonAddFavourites item={Topics} />
                </Topics >) : (<Loading />)

                }
            </>

        )
    }
    else if (filterSelect === "issues") {
        return (
            <>
                {dataGitHub.items ? (<Issues>
                    <ButtonAddFavourites item={Topics} />
                </Issues>) : (<Loading />)}
            </>

        )
    }
}

export { Results }