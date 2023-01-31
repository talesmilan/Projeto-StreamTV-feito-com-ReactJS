import { fetchTopFilme } from "../../fetchexports";
import Botoes from "../../Botoes";
import RenderFilme from '../../RenderFilme'
import {useEffect, useState} from 'react'
import imagem from '../../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'


const TopFilmes = () => {

    const [filmes, setFilmes] = useState({results: []})


    const idPage = useParams()


    useEffect(() => {
        const recebe = fetchTopFilme(idPage.idPage)
        recebe.then(response => setFilmes(response) )

    }, [idPage.idPage])


    if (filmes.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Top Filmes</h1>
                    <div className='row offset-1 col-10'>
                        {filmes.results.map(filme => {
                            return (<RenderFilme key={filme.id} filme={filme} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={filmes.total_pages} tipo="filmes/top-filmes" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }

}

export default TopFilmes