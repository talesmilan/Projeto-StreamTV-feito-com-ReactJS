import RenderFilme from '../../RenderFilme'
import {useEffect, useState} from 'react'
import { fetchFilmes } from '../../fetchexports'
import imagem from '../../imagens/Loading_icon.gif'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'

const Familia = () => {

    const [familia, setFamilia] = useState({results: []})


    const idPage = useParams()

    useEffect(() => {
        const recebe = fetchFilmes(idPage.idPage, 10751)
        recebe.then(response => setFamilia(response) )

    }, [idPage.idPage])


    if (familia.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Filmes para assistir com a Família</h1>
                    <div className='row offset-1 col-10'>
                        {familia.results.map(filme => {
                            return (<RenderFilme key={filme.id} filme={filme} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={familia.total_pages} tipo="filmes/familia" />
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default Familia