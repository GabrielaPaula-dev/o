'use client'
import { MyContext } from "@/context"
import { Suspense, useContext } from "react"
import { Repositories } from "./repositories"
import { Users } from "./users"
import { Commits } from "./commits"
import { Topics } from "./topics"
import { Issues } from "./issues"
import { ButtonAddFavourites } from "../buttons/add-favourites"
import { Loading } from "../loading"

const Results = () => {
    const { filterSelect, dataGitHub } = useContext(MyContext)
    // console.log(dataGitHub.items?.length)
    // if (dataGitHub.items?.length == 0) {
    //     return (
    //         <h1>carregando...</h1>
    //     )
    // }
    if (filterSelect === "repositories") {
        return (
            <Suspense fallback={<p>carregando...</p>}>

            <Repositories>
                <ButtonAddFavourites item={Repositories} />
            </Repositories>
            </Suspense>

        )
    } else if (filterSelect === "users") {
        return (
            <Suspense fallback={<p>carregando...</p>}>

            <Users>
                <ButtonAddFavourites item={Users} />
            </Users>
            </Suspense>

        )
    } else if (filterSelect === "commits") {
        return (
            <Suspense fallback={<p>carregando...</p>}>

            <Commits>
                <ButtonAddFavourites item={Commits} />
            </Commits>
            </Suspense>

        )
    } else if (filterSelect === "topics") {
        return (
            <Suspense fallback={<p>carregando...</p>}>

            <Topics>
                <ButtonAddFavourites item={Topics} />
            </Topics>
            </Suspense>

        )
    }
    else if (filterSelect === "issues") {
        return (
            <Suspense fallback={<Loading/>}>

            <Issues>
                <ButtonAddFavourites item={Topics} />
            </Issues>
            </Suspense>

        )
    }

    // if (dataGitHub.length === 0) {
    //     return (
    //         <Loading />
    //     )
    // }
}

export { Results }