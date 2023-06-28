'use server'
import Link from "next/link";

export default async function Favorites() {
    return(
        <>
        <h1>favoritos</h1>
        <Link href={"/"}>voltar</Link>
        </>
    )
}