import RenderFilme from '../../RenderFilme'
import {useEffect, useState} from 'react'
import { fetchFilmes } from '../../fetchexports'
import imagem from '../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'

const Aventura = () => {

    const [aventura, setAventura] = useState({results: []})


    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchFilmes(idPage.idPage, 12)
        recebe.then(response => setAventura(response) )

    }, [idPage.idPage])


    if (aventura.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Filmes de Aventura</h1>
                    <div className='row offset-1 col-10'>
                        {aventura.results.map(filme => {
                            return (<RenderFilme key={filme.id} filme={filme} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={aventura.total_pages} tipo="filmes/aventura" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default Aventura