import RenderFilme from '../RenderFilme'
import {useEffect, useState} from 'react'
import { fetchFilmes } from '../fetchexports'
import imagem from '../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../Botoes'

const Fantasia = () => {

    const [fantasia, setFantasia] = useState({results: []})

    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchFilmes(idPage.idPage, 16)
        recebe.then(response => setFantasia(response) )

    }, [idPage.idPage])


    if (fantasia.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Filmes de Fantasia</h1>
                    <div className='row offset-1 col-10'>
                        {fantasia.results.map(filme => {
                            return (<RenderFilme filme={filme} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={fantasia.total_pages} tipo="fantasia" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default Fantasia