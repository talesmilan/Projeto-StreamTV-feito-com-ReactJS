import RenderFilme from '../../RenderFilme'
import {useEffect, useState} from 'react'
import { fetchFilmes } from '../../fetchexports'
import imagem from '../../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'

const FiccaoCientifica = () => {

    const [ficcaoCientifica, setFiccaoCientifica] = useState({results: []})

    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchFilmes(idPage.idPage, 878)
        recebe.then(response => setFiccaoCientifica(response) )

    }, [idPage.idPage])


    if (ficcaoCientifica.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Filmes de Ficção Científica</h1>
                    <div className='row offset-1 col-10'>
                        {ficcaoCientifica.results.map(filme => {
                            return (<RenderFilme key={filme.id} filme={filme} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={ficcaoCientifica.total_pages} tipo="filmes/ficcaoCientifica" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default FiccaoCientifica