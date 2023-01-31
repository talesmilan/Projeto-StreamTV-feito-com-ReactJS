import {useEffect, useState} from 'react'
import { fetchSeries } from '../../fetchexports'
import imagem from '../../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'
import RenderSerie from '../../RenderSerie'

const SeriesAnimacao = () => {

    const [animacao, setAnimacao] = useState({results: []})


    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchSeries(idPage.idPage, 16)
        recebe.then(response => setAnimacao(response) )

    }, [idPage.idPage])
    if (animacao.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Séries de Animação</h1>
                    <div className='row offset-1 col-10'>
                        {animacao.results.map(serie => {
                            return (<RenderSerie key={serie.id} serie={serie} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={animacao.total_pages} tipo="series/animacao" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default SeriesAnimacao