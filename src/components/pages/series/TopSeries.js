import { fetchTopSerie } from "../../fetchexports";
import Botoes from "../../Botoes";
import RenderSerie from "../../RenderSerie";
import {useEffect, useState} from 'react'
import imagem from '../../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'


const TopSeries = () => {

    const [series, setSeries] = useState({results: []})


    const idPage = useParams()


    useEffect(() => {
        const recebe = fetchTopSerie(idPage.idPage)
        recebe.then(response => setSeries(response) )

    }, [idPage.idPage])


    if (series.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Top Séries</h1>
                    <div className='row offset-1 col-10'>
                        {series.results.map(serie => {
                            return (<RenderSerie key={serie.id} serie={serie} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={series.total_pages} tipo="series/top-series" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }

}

export default TopSeries