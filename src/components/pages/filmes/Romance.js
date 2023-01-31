import RenderFilme from '../../RenderFilme'
import {useEffect, useState} from 'react'
import { fetchFilmes } from '../../fetchexports'
import imagem from '../../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'

const Romance = () => {

    const [romance, setRomance] = useState({results: []})

    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchFilmes(idPage.idPage, 10749)
        recebe.then(response => setRomance(response) )

    }, [idPage.idPage])

    if (romance.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Filmes de Romance</h1>
                    <div className='row offset-1 col-10'>
                        {romance.results.map(filme => {
                            return (<RenderFilme key={filme.id} filme={filme} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={romance.total_pages} tipo="filmes/romance" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default Romance