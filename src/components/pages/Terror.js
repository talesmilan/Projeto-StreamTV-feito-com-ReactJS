import RenderFilme from '../RenderFilme'
import {useEffect, useState} from 'react'
import { fetchFilmes } from '../fetchexports'
import imagem from '../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../Botoes'

const Terror = () => {

    const [terror, setTerror] = useState({results: []})

    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchFilmes(idPage.idPage, 27)
        recebe.then(response => setTerror(response) )

    }, [idPage.idPage])

    if (terror.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Filmes de Terror</h1>
                    <div className='row offset-1 col-10'>
                        {terror.results.map(filme => {
                            return (<RenderFilme filme={filme} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={terror.total_pages} tipo="terror" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default Terror