import RenderFilme from '../../RenderFilme'
import {useEffect, useState} from 'react'
import { fetchFilmes } from '../../fetchexports'
import imagem from '../../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'

const Misterio = () => {

    const [misterio, setMisterio] = useState({results: []})


    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchFilmes(idPage.idPage, 9648)
        recebe.then(response => setMisterio(response) )

    }, [idPage.idPage])

    if (misterio.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Filmes de Mistério</h1>
                    <div className='row offset-1 col-10'>
                        {misterio.results.map(filme => {
                            return (<RenderFilme key={filme.id} filme={filme} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={misterio.total_pages} tipo="filmes/misterio" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default Misterio