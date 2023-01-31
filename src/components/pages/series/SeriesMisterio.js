import {useEffect, useState} from 'react'
import { fetchSeries } from '../../fetchexports'
import imagem from '../../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'
import RenderSerie from '../../RenderSerie'

const SeriesMisterio = () => {

    const [misterio, setMisterio] = useState({results: []})


    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchSeries(idPage.idPage, 9648)
        recebe.then(response => setMisterio(response) )

    }, [idPage.idPage])
    if (misterio.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Séries de Mistério</h1>
                    <div className='row offset-1 col-10'>
                        {misterio.results.map(serie => {
                            return (<RenderSerie key={serie.id} serie={serie} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={misterio.total_pages} tipo="series/misterio" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default SeriesMisterio