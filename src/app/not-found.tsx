'use server'
import Link from "next/link";

export default async function NotFound(){
    return(
        <>
        <h1>pagina nao encontrada</h1>
        <Link href={"/"}>voltar</Link>
        </>
    )
}
