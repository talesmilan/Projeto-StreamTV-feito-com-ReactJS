import {useEffect, useState} from 'react'
import { fetchSeries } from '../../fetchexports'
import imagem from '../../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'
import RenderSerie from '../../RenderSerie'

const SeriesGuerra = () => {

    const [guerra, setGuerra] = useState({results: []})


    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchSeries(idPage.idPage, 10768)
        recebe.then(response => setGuerra(response) )

    }, [idPage.idPage])
    if (guerra.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Séries de Guerra e Política</h1>
                    <div className='row offset-1 col-10'>
                        {guerra.results.map(serie => {
                            return (<RenderSerie key={serie.id} serie={serie} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={guerra.total_pages} tipo="series/guerra-e-politica" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default SeriesGuerra