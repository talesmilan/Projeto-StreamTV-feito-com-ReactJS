import {useEffect, useState} from 'react'
import { fetchSeries } from '../../fetchexports'
import imagem from '../../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'
import RenderSerie from '../../RenderSerie'

const SeriesFantasia = () => {

    const [fantasia, setFantasia] = useState({results: []})


    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchSeries(idPage.idPage, 10765)
        recebe.then(response => setFantasia(response) )

    }, [idPage.idPage])
    if (fantasia.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Séries de Fantasia e Ficção Científica</h1>
                    <div className='row offset-1 col-10'>
                        {fantasia.results.map(serie => {
                            return (<RenderSerie key={serie.id} serie={serie} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={fantasia.total_pages} tipo="series/fantasia-e-ficcao-cientifica" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default SeriesFantasia