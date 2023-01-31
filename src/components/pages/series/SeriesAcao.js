import RenderSerie from '../../RenderSerie'
import {useEffect, useState} from 'react'
import { fetchSeries } from '../../fetchexports'
import imagem from '../../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'

const SeriesAcao = () => {

    const [acao, setAcao] = useState({results: []})


    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchSeries(idPage.idPage, 10759)
        recebe.then(response => setAcao(response) )

    }, [idPage.idPage])
    if (acao.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Séries de Ação e Aventura</h1>
                    <div className='row offset-1 col-10'>
                        {acao.results.map(serie => {
                            return (<RenderSerie key={serie.id} serie={serie} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={acao.total_pages} tipo="series/acao-e-aventura" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default SeriesAcao