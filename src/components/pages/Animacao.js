import RenderFilme from '../RenderFilme'
import {useEffect, useState} from 'react'
import { fetchFilmes } from '../fetchexports'
import imagem from '../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../Botoes'

const Animacao = () => {

    const [animacao, setAnimacao] = useState({results: []})

    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchFilmes(idPage.idPage, 16)
        recebe.then(response => setAnimacao(response) )

    }, [idPage.idPage])


    if (animacao.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Filmes de Animação</h1>
                    <div className='row offset-1 col-10'>
                        {animacao.results.map(filme => {
                            return (<RenderFilme filme={filme} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={animacao.total_pages} tipo="animacao" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default Animacao