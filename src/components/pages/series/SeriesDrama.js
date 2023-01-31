import {useEffect, useState} from 'react'
import { fetchSeries } from '../../fetchexports'
import imagem from '../../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'
import RenderSerie from '../../RenderSerie'

const SeriesDrama = () => {

    const [drama, setDrama] = useState({results: []})


    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchSeries(idPage.idPage, 18)
        recebe.then(response => setDrama(response) )

    }, [idPage.idPage])
    if (drama.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Séries de Drama</h1>
                    <div className='row offset-1 col-10'>
                        {drama.results.map(serie => {
                            return (<RenderSerie key={serie.id} serie={serie} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={drama.total_pages} tipo="series/drama" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default SeriesDrama