'use server'
import Link from "next/link";

export default async function Error() {
    return(
        <>
        <h1>Ocorreu um erro Volte para Pagina de busca de tente novamente</h1>
        <Link href={"/"}>voltar</Link>
        </>
    )
}
