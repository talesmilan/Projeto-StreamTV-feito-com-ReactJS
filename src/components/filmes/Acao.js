import RenderFilme from '../../RenderFilme'
import {useEffect, useState} from 'react'
import { fetchFilmes } from '../../fetchexports'
import imagem from '../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'

const Acao = () => {

    const [acao, setAcao] = useState({results: []})


    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchFilmes(idPage.idPage, 28)
        recebe.then(response => setAcao(response) )

    }, [idPage.idPage])

    if (acao.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Filmes de Ação</h1>
                    <div className='row offset-1 col-10'>
                        {acao.results.map(filme => {
                            return (<RenderFilme key={filme.id} filme={filme} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={acao.total_pages} tipo="filmes/acao" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default Acao