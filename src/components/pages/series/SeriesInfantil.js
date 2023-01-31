import {useEffect, useState} from 'react'
import { fetchSeries } from '../../fetchexports'
import imagem from '../../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'
import RenderSerie from '../../RenderSerie'

const SeriesInfantil = () => {

    const [infantil, setInfantil] = useState({results: []})


    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchSeries(idPage.idPage, 10762)
        recebe.then(response => setInfantil(response) )

    }, [idPage.idPage])
    if (infantil.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Séries de Infantil</h1>
                    <div className='row offset-1 col-10'>
                        {infantil.results.map(serie => {
                            return (<RenderSerie key={serie.id} serie={serie} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={infantil.total_pages} tipo="series/infantil" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default SeriesInfantil