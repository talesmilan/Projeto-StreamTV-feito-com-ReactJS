import RenderFilme from '../RenderFilme'
import {useEffect, useState} from 'react'
import { fetchFilmes } from '../fetchexports'
import imagem from '../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../Botoes'

const Drama = () => {

    const [drama, setDrama] = useState({results: []})

    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchFilmes(idPage.idPage, 18)
        recebe.then(response => setDrama(response) )

    }, [idPage.idPage])

    if (drama.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Filmes de Drama</h1>
                    <div className='row offset-1 col-10'>
                        {drama.results.map(filme => {
                            return (<RenderFilme filme={filme} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={drama.total_pages} tipo="drama" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default Drama