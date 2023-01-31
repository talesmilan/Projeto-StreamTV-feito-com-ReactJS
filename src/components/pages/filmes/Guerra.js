import RenderFilme from '../../RenderFilme'
import {useEffect, useState} from 'react'
import { fetchFilmes } from '../../fetchexports'
import imagem from '../../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'

const Guerra = () => {

    const [guerra, setGuerra] = useState({results: []})

    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchFilmes(idPage.idPage, 10752)
        recebe.then(response => setGuerra(response) )

    }, [idPage.idPage])

    if (guerra.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Filmes de Guerra</h1>
                    <div className='row offset-1 col-10'>
                        {guerra.results.map(filme => {
                            return (<RenderFilme key={filme.id} filme={filme} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={guerra.total_pages} tipo="filmes/guerra" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default Guerra