import {useEffect, useState} from 'react'
import { fetchSeries } from '../../fetchexports'
import imagem from '../../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'
import RenderSerie from '../../RenderSerie'

const SeriesFamilia = () => {

    const [familia, setFamilia] = useState({results: []})


    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchSeries(idPage.idPage, 10751)
        recebe.then(response => setFamilia(response) )

    }, [idPage.idPage])
    if (familia.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Séries de Família</h1>
                    <div className='row offset-1 col-10'>
                        {familia.results.map(serie => {
                            return (<RenderSerie key={serie.id} serie={serie} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={familia.total_pages} tipo="series/familia" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default SeriesFamilia