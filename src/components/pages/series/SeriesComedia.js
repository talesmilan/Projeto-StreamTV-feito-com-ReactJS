import {useEffect, useState} from 'react'
import { fetchSeries } from '../../fetchexports'
import imagem from '../../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'
import RenderSerie from '../../RenderSerie'

const SeriesComedia = () => {

    const [comedia, setComedia] = useState({results: []})


    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchSeries(idPage.idPage, 35)
        recebe.then(response => setComedia(response) )

    }, [idPage.idPage])
    if (comedia.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Séries de Comédia</h1>
                    <div className='row offset-1 col-10'>
                        {comedia.results.map(serie => {
                            return (<RenderSerie key={serie.id} serie={serie} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={comedia.total_pages} tipo="series/comedia" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default SeriesComedia