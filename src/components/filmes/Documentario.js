import RenderFilme from '../../RenderFilme'
import {useEffect, useState} from 'react'
import { fetchFilmes } from '../../fetchexports'
import imagem from '../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'

const Documentario = () => {

    const [documentario, setDocumentario] = useState({results: []})


    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchFilmes(idPage.idPage, 99)
        recebe.then(response => setDocumentario(response) )

    }, [idPage.idPage])

    if (documentario.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Filmes de Documentário</h1>
                    <div className='row offset-1 col-10'>
                        {documentario.results.map(filme => {
                            return (<RenderFilme key={filme.id} filme={filme} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={documentario.total_pages} tipo="filmes/documentario" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default Documentario